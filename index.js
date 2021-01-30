import { Calendar } from "./src/Calendar.js";
import { Storage } from "./src/Storage.js";

import { createMonthState } from "./src/createMonthState.js";
import { renderApp } from "./src/render/renderApp.js";

import {
  form,
  habitInputContainer,
  habitInput,
  habitContainer,
  changeMonthBtns,
  deleteBtn,
} from "./src/DOMelements.js";

const storage = new Storage();
let habit;
let calendar;

if (storage.getData()) {
  hideInput();
  habit = storage.getData();
  calendar = new Calendar(habit);
  const { currentMonth, currentYear } = calendar;
  renderApp(habit, currentMonth, currentYear, calendar, storage);
} else {
  habitInputContainer.classList.remove("hidden");
}

form.addEventListener("submit", (e) => createtHabit(e));
changeMonthBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => changeMonth(e))
);

deleteBtn.addEventListener("click", deleteHabit);

function createtHabit(e) {
  e.preventDefault();
  hideInput();
  habit = { name: habitInput.value, state: {} };
  calendar = new Calendar(habit);
  const { currentMonth, currentYear } = calendar;
  createMonthState(
    currentMonth,
    currentYear,
    calendar.getDaysNumber(currentYear, currentMonth),
    habit
  );
  habitInput.value = "";
  storage.setData(habit);
  renderApp(habit, currentMonth, currentYear, calendar, storage);
}

function hideInput() {
  habitInputContainer.classList.add("hidden");
  habitContainer.classList.remove("hidden");
}

function showInput() {
  habitInputContainer.classList.remove("hidden");
  habitContainer.classList.add("hidden");
}

function changeMonth(e) {
  if (e.currentTarget.dataset.direction === "next") {
    calendar.nextMonth();
  } else {
    calendar.prevMonth();
  }
  renderApp(
    habit,
    calendar.currentMonth,
    calendar.currentYear,
    calendar,
    storage
  );
}

function deleteHabit() {
  storage.clearData();
  showInput();
}
