// import { getItem } from '../common/storage.js';
// import { generateWeekRange } from '../common/time.utils.js';
// import { renderEvents } from '../events/events.js';
// import { createNumbersArray } from '../common/createNumbersArray.js';

const generateDay = () => {
  // функция должна сгенерировать и вернуть разметку дня в виде строки
  // разметка состоит из 24 часовых временных слотов (.calendar__time-slot)
};

export const renderWeek = () => {
  const week = document.querySelector('.calendar__week');
  week.innerHTML = `<table>
  <tr>
      <th>Header 1</th>
      <th>Header 2</th>
      <th>Header 3</th>
  </tr>
  <tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
  </tr>
  <tr>
      <td>4</td>
      <td>5</td>
      <td>6</td>
  </tr>
  <tr>
      <td>7</td>
      <td>8</td>
      <td>9</td>
  </tr>
</table>`;
  // функция должна сгенерировать разметку недели в виде строки и вставить ее на страницу (в .calendar__week)
  // разметка недели состоит из 7 дней (.calendar__day) отображаемой недели
  // массив дней, которые нужно отобразить, считаем ф-цией generateWeekRange на основе displayedWeekStart из storage
  // каждый день должен содержать в дата атрибуте порядковый номер дня в месяце
  // после того, как отрисовали всю сетку для отображаемой недели, нужно отобразить события этой недели с помощью renderEvents
};
