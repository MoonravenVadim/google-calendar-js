import { getItem } from "../common/storage.js";
import { generateWeekRange } from "../common/time.utils.js";
import { renderEvents } from "../events/events.js";
import { createNumbersArray } from "../common/createNumbersArray.js";
import { openModal } from "../common/modal.js";

function slotListener(event) {
  // const { day } = event.target.dataset.day;
  // const { hour } = event.target.dataset.hour;
  // console.log(event.target.dataset.hour);
  let hour = event.target.dataset.hour;
  if (hour.toString().length === 1) {
    hour = "0" + hour.toString();
  } else {
    hour = hour.toString();
  }
  // document.getElementById("date").value = day;
  // document.getElementsByName("startTime").value = `${hour.toString()}:00`;
  // document.getElementsByName("startTime").value = "10:45";
  // document.querySelector('input[type="time"]').value = "10:45";
  document.querySelector('input[type="time"]').value = hour + ":00";
  openModal();
}

function renderCurrentHourLine() {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const currentHour = currentDate.getHours();
  const currentMinutes = currentDate.getMinutes();
  
}

const generateDay = () => {
  // функция должна сгенерировать и вернуть разметку дня в виде строки
  // разметка состоит из 24 часовых временных слотов (.calendar__time-slot)
  let hours24 = ``;
  for (let i = 0; i < 24; i += 1) {
    hours24 += `<div class="hour-slot" data-hour="${i}"></div>`;
  }
  return hours24;
};

export const renderWeek = () => {
  const weekElem = document.querySelector(".calendar__week");
  const week = generateWeekRange(getItem("displayedWeekStart"))
    .map(
      (day) =>
        `<div class="calendar__day" data-day="${day.getDate()}">${generateDay()}</div>`,
    )
    .join("");
  weekElem.innerHTML = week;
  const slots = Array.from(document.querySelectorAll(".hour-slot"));
  slots.map((slot) => slot.addEventListener("click", slotListener));
  // функция должна сгенерировать разметку недели в виде строки и вставить ее на страницу (в .calendar__week)
  // разметка недели состоит из 7 дней (.calendar__day) отображаемой недели
  // массив дней, которые нужно отобразить, считаем ф-цией generateWeekRange на основе displayedWeekStart из storage
  // каждый день должен содержать в дата атрибуте порядковый номер дня в месяце
  // после того, как отрисовали всю сетку для отображаемой недели, нужно отобразить события этой недели с помощью renderEvents
};
