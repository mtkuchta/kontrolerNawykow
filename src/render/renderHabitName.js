import { habitNameContainer } from "../DOMelements.js";

export function renderHabitName(habit) {
  habitNameContainer.textContent = habit.name;
}
