import { renderApp } from "./render/renderApp.js";

export function handleCheckbox(e, stateIndex, habit, calendar, storage) {
  const newValue = e.currentTarget.checked;
  const checkboxID = e.currentTarget.id;
  habit.state[stateIndex].splice(checkboxID, 1, newValue);
  renderApp(
    habit,
    calendar.currentMonth,
    calendar.currentYear,
    calendar,
    storage
  );
  storage.setData(habit);
}
