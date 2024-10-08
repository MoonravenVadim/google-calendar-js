import { getItem, setItem } from "../common/storage.js";
import { renderEvents } from "./events.js";
import { getDateTime } from "../common/time.utils.js";
import { closeModal } from "../common/modal.js";

const eventFormElem = document.querySelector(".event-form");
const closeEventFormBtn = document.querySelector(".create-event__close-btn");

function clearEventForm() {
  // ф-ция должна очистить поля формы от значений
  const form = document.querySelector(".event-form");
  form.reset();
}

function onCloseEventForm() {
  // здесь нужно закрыть модальное окно и очистить форму
  closeModal();
  clearEventForm();
}

function onCreateEvent(event) {
  // задача этой ф-ции только добавить новое событие в массив событий, что хранится в storage
  // создавать или менять DOM элементы здесь не нужно. Этим займутся другие ф-ции
  // при подтверждении формы нужно считать данные с формы
  // с формы вы получите поля date, startTime, endTime, title, description
  // на основе полей date, startTime, endTime нужно посчитать дату начала и окончания события
  // date, startTime, endTime - строки. Вам нужно с помощью getDateTime из утилит посчитать start и end объекта события
  // полученное событие добавляем в массив событий, что хранится в storage
  // закрываем форму
  // и запускаем перерисовку событий с помощью renderEvents
  event.preventDefault();
  const form = document.querySelector(".event-form");
  const formData = new FormData(form);
  const date = formData.get("date");
  const startTime = formData.get("startTime");
  const endTime = formData.get("endTime");
  const title = formData.get("title");
  const description = formData.get("description");

  const events = getItem("events");

  if (events.length >= 1) {
    for (let i = 0; i < events.length; i++) {
      const { id, title, description, start, end } = events[i];
      const eventStart = new Date(start).getTime();
      const eventEnd = new Date(end).getTime();
      const currentEventStart = new Date(date + "T" + startTime).getTime();
      const currentEventEnd = new Date(date + "T" + endTime).getTime();
      if (currentEventStart < eventEnd && currentEventEnd > eventStart) {
        alert("a new event intersects with an existing one");
        return undefined;
      }
    }
  }

  const newEvent = {};
  newEvent.id = Math.random();

  newEvent.title = title;
  newEvent.description = description;

  const startTimeInDateFormat = getDateTime(date, startTime);
  const endTimeInDateFormat = getDateTime(date, endTime);
  newEvent.start = startTimeInDateFormat;
  newEvent.end = endTimeInDateFormat;
  events.push(newEvent);
  onCloseEventForm();
  renderEvents();
}

export function initEventForm() {
  // подпишитесь на сабмит формы и на закрытие формы
  const submit = document.querySelector(".event-form__submit-btn");
  submit.addEventListener("click", onCreateEvent);
  const btn = document.querySelector(".create-event__close-btn");
  btn.addEventListener("click", closeModal);
}
