export function createListElement(index, firstDayIndex, day, days) {
  if (!days) {
    return `
     <li class="habit__day empty">
     </li>`;
  }

  return ` 
    <li class="habit__day">
      <input class="habit__checkbox" type="checkbox" id="${index}" ${
    day ? "checked" : ""
  } />
      <label class="habit__day-descritpion" for="${index}">${index + 1}. ${
    days[(firstDayIndex + index) % 7]
  }
      </label>
    </li>`;
}
