import { monthNameContainer, succeedContainer } from "../DOMelements.js";

const months = [
  "Styczeń",
  "Luty",
  "Marzec",
  "Kwiecień",
  "Maj",
  "Czerwiec",
  "Lipiec",
  "Sierpień",
  "Wrzesień",
  "Październik",
  "Listopad",
  "Grudzień",
];

export function renderMonthDescription(currentMonth, currentYear) {
  const checkboxes = [...document.querySelectorAll(".habit__checkbox")];
  const succeed = checkboxes.filter((checkbox) => {
    return checkbox.checked;
  });
  monthNameContainer.textContent = `${months[currentMonth]} ${currentYear}`;
  succeedContainer.textContent = `${succeed.length}/${checkboxes.length}`;
}
