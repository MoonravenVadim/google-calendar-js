import { getItem, setItem } from '../common/storage.js';
import { renderWeek } from '../calendar/calendar.js';
import { renderHeader } from '../calendar/header.js';
import { getStartOfWeek, getDisplayedMonth } from '../common/time.utils.js';

const navElem = document.querySelector('.navigation');
const displayedMonthElem = document.querySelector(
  '.navigation__displayed-month'
);

function renderCurrentMonth() {
  // отрисовать месяц, к которому относиться текущая неделя (getDisplayedMonth)
  // вставить в .navigation__displayed-month
  const date = getItem("displayedWeekStart");
  document.querySelector(".navigation__displayed-month").innerHTML =
    getDisplayedMonth(date);
}

const onChangeWeek = (event) => {
  // при переключении недели обновите displayedWeekStart в storage
  // и перерисуйте все необходимые элементы страницы (renderHeader, renderWeek, renderCurrentMonth)
  const { direction } = event.target.closest("button").dataset;

  if (direction === "prev") {
    setItem(
      "displayedWeekStart",
      new Date(
        getItem("displayedWeekStart").getTime() - 7 * 24 * 60 * 60 * 1000,
      ),
    );
  } else if (direction === "next") {
    setItem(
      "displayedWeekStart",
      new Date(
        getItem("displayedWeekStart").getTime() + 7 * 24 * 60 * 60 * 1000,
      ),
    );
  }
  renderHeader();
  renderWeek();
  renderCurrentMonth();
};

export const initNavigation = () => {
  renderCurrentMonth();
  navElem.addEventListener("click", onChangeWeek);
};

const todayBtn = (event) => {
  setItem("displayedWeekStart", getStartOfWeek(new Date()));
  renderHeader();
  renderWeek();
  renderCurrentMonth();
};

const today = document.querySelector(".navigation__today-btn");
today.addEventListener("click", todayBtn);
