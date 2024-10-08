import { getItem } from "../common/storage.js";
import { generateWeekRange } from "../common/time.utils.js";
import { openModal } from "../common/modal.js";

const daysOfWeek = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

export const renderHeader = () => {
  // на основе displayedWeekStart из storage с помощью generateWeekRange сформируйте массив дней текущей недели
  // на основе полученного массива сформируйте разметку в виде строки - 7 дней (день недели и число в месяце)
  // полученную разметку вставить на страницу с помощью innerHTML в .calendar__header
  // в дата атрибуте каждой ячейки должно хранить для какого часа эта ячейка
  const weekStart = getItem("displayedWeekStart");
  const weekRange = generateWeekRange(weekStart);
  let header = "<table><tr>";
  header += weekRange
    .map((day) => `<th>${daysOfWeek[day.getDay()]}<br>${day.getDate()}</th>`)
    .join("");
  header += "</tr></table>";
  const calendarHeader = document.querySelector(".calendar__header");
  calendarHeader.innerHTML = header;
};

// при клике на кнопку "Create" открыть модальное окно с формой для создания события
// назначьте здесь обработчик

const createBtn = document.querySelector(".create-event-btn");
createBtn.addEventListener("click", openModal);
