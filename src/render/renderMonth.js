import { renderDays } from "./renderDays.js";

export function renderMonth(month, year, daysNumber, calendar, habit, storage) {
  const { state } = habit;

  renderDays(state, month, year, daysNumber, calendar, habit, storage);
}
