export function createMonthState(month, year, daysNumber, habit) {
  const key = `${year}_${month}`;
  const keyValue = [];
  for (let i = 0; i < daysNumber; i++) {
    keyValue.push(false);
  }
  habit.state[key] = keyValue;
}
