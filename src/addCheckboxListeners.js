import { handleCheckbox } from "./handleCheckbox.js";

export function addCheckboxListeners(stateID, habit, calendar, storage) {
  const checkboxes = document.querySelectorAll(".habit__checkbox");
  checkboxes.forEach((checkbox) => {
    const stateIndex = stateID;
    checkbox.addEventListener("click", (e) =>
      handleCheckbox(e, stateIndex, habit, calendar, storage)
    );
  });
}
