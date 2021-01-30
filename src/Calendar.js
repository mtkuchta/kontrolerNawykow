export class Calendar {
  constructor({ name, state }) {
    this.name = name;
    this.getCurrentDate();
    this.daysNumber = this.getDaysNumber(this.currentYear, this.currentMonth);
    this.findFirstDayName(this.currentYear, this.currentMonth);
    this.state = state;
  }

  getCurrentDate() {
    const date = new Date();
    this.currentMonth = date.getMonth();
    this.currentYear = date.getUTCFullYear();
    this.currentDay = date.getDay();
  }

  getDaysNumber(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }

  findFirstDayName(currentYear, currentMonth) {
    const date = new Date(currentYear, currentMonth, 1);
    return date.getDay();
  }

  nextMonth() {
    if (this.currentMonth >= 0 && this.currentMonth < 11) {
      this.currentMonth++;
    } else if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    }
  }

  prevMonth() {
    if (this.currentMonth > 0 && this.currentMonth <= 11) {
      this.currentMonth--;
    } else if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    }
  }
}
