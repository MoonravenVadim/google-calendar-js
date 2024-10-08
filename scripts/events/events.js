import { getItem, setItem } from "../common/storage.js";
import shmoment from "../common/shmoment.js";
import { openPopup, closePopup } from "../common/popup.js";

const weekElem = document.querySelector(".calendar__week");
const deleteEventBtn = document.querySelector(".delete-event-btn");

function handleEventClick(event) {
  // если произошел клик по событию, то нужно паказать попап с кнопкой удаления
  // установите eventIdToDelete с id события в storage
}

function removeEventsFromCalendar() {
  // ф-ция для удаления всех событий с календаря
}

const createEventElement = (event) => {
  // ф-ция создает DOM элемент события
  // событие должно позиционироваться абсолютно внутри нужной ячейки времени внутри дня
  // нужно добавить id события в дата атрибут
  // здесь для создания DOM элемента события используйте document.createElement
  const newDiv = document.createElement("div");
  newDiv.classList.add("event");
  const { start, end, id, title, description } = event;
  newDiv.dataset.eventId = id;
  const startEvent = new Date(start);
  const endEvent = new Date(end);
  const heightBlockEvent = (end - start) / 60000;
  // console.log(dateFrom);
  newDiv.innerHTML = `<div style="height:${heightBlockEvent}px"><h4>${title}</h4><p>${start.toTimeString().slice(0, 5)}-${end.toTimeString().slice(0, 5)}</p></div>`;
  return newDiv;
};

export const renderEvents = () => {
  // достаем из storage все события и дату понедельника отображаемой недели
  // фильтруем события, оставляем только те, что входят в текущую неделю
  // создаем для них DOM элементы с помощью createEventElement
  // для каждого события находим на странице временную ячейку (.calendar__time-slot)
  // и вставляем туда событие
  // каждый день и временная ячейка должно содержать дата атрибуты, по которым можно будет найти нужную временную ячейку для события
  // не забудьте удалить с календаря старые события перед добавлением новых
  const events = getItem("events");
  events.map((event) => {
    // const day = event.dateFrom.getDay();
    // const hour = event.dateFrom.getHour();
    // const minutes = event.dateFrom.getminutes();
    const eventStart = new Date(event.start);
    const timeSlotSelector = `div[data-day="${eventStart.getDate()}"] div[data-hour="${eventStart.getHours()}"]`;
    const timeSlotElement = document.querySelector(timeSlotSelector);
    timeSlotElement.append(createEventElement(event));
  });
};

function onDeleteEvent() {
  // достаем из storage массив событий и eventIdToDelete
  // удаляем из массива нужное событие и записываем в storage новый массив
  // закрыть попап
  // перерисовать события на странице в соответствии с новым списком событий в storage (renderEvents)
}

deleteEventBtn.addEventListener("click", onDeleteEvent);

weekElem.addEventListener("click", handleEventClick);
