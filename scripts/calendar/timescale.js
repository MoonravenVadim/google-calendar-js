import { createNumbersArray } from "../common/createNumbersArray.js";

export const renderTimescale = () => {
  // ф-ция должна генерировать разметку для боковой шкалы времени (24 часа)
  // полученную разметку вставьте на страницу с помощью innerHTML в .calendar__time-scale
  const hours24 = createNumbersArray(0, 24);
  document.querySelector(".calendar__time-scale").innerHTML = hours24
    // .map((hour) => `<div class="time-slot" data-hour="${hour}">${hour}</div>`)
    .map((hour) => {
      if (hour.toString().length === 1) {
        return `<div class="time-slot" data-hour="${hour}">0${hour}:00</div>`;
      }
      return `<div class="time-slot" data-hour="${hour}">${hour}:00</div>`;
    })
    .join("");
};
