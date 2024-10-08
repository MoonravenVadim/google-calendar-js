export function renderCurrentTimeLine() {
  const timeSlotSelector = `div[data-day="${new Date().getDate()}"] div[data-hour="${new Date().getHours()}"]`;
  const minutes = new Date().getMinutes();
  const timeSlotElement = document.querySelector(timeSlotSelector);
  const newHr = document.createElement("hr");
  newHr.setAttribute("style", `margin-top: ${minutes}px; margin-bottom: 0;`);
  newHr.setAttribute("color", "red");
  newHr.setAttribute("size", "2");
  // newHr.innerHTML = `<hr style="margin-top: ${minutes}px" color="red" size="2">`;
  timeSlotElement.append(newHr);
}
