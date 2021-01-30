import { createMonthState } from "../createMonthState.js";
import { renderHabitName } from "./renderHabitName.js";
import { renderMonth } from "./renderMonth.js";
import { renderMonthDescription } from "./renderMonthDescription.js";

export function renderApp(habit, currentMonth, currentYear, calendar, storage) {
  if (!habit.state[`${currentYear}_${currentMonth}`]) {
    createMonthState(
      currentMonth,
      currentYear,
      calendar.getDaysNumber(currentYear, currentMonth),
      habit
    );
  }
  renderHabitName(habit);
  renderMonth(
    currentMonth,
    currentYear,
    calendar.getDaysNumber,
    calendar,
    habit,
    storage
  );
  renderMonthDescription(currentMonth, currentYear);
}
