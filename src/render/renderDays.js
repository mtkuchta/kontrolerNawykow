import { addCheckboxListeners } from "../addCheckboxListeners.js";
import { createListElement } from "../createListElement.js";

const days = ["Niedz.", "Pon.", "Wt.", "Śr.", "Czw.", "Pt.", "Sob."];
import { daysContainer } from "../DOMelements.js";

export function renderDays(
  state,
  month,
  year,
  daysNumber,
  calendar,
  habit,
  storage
) {
  daysContainer.textContent = "";
  let input;
  const stateID = `${year}_${month}`;
  const firstDayIndex = calendar.findFirstDayName(year, month);
  const emptyDays =
    calendar.findFirstDayName(year, month) === 0
      ? 6
      : calendar.findFirstDayName(year, month) - 1;
  for (let i = 0; i < emptyDays; i++) {
    input = createListElement();
    daysContainer.insertAdjacentHTML("beforeend", input);
  }

  if (state.hasOwnProperty(stateID)) {
    const monthData = state[stateID];
    monthData.forEach((day, index) => {
      input = createListElement(index, firstDayIndex, day, days);
      daysContainer.insertAdjacentHTML("beforeend", input);
    });
  } else {
    for (let i = 0; i < daysNumber; i++) {
      input = input = createListElement(i, firstDayIndex, (day = false), days);
      daysContainer.insertAdjacentHTML("beforeend", input);
    }
  }
  addCheckboxListeners(stateID, habit, calendar, storage);
}
