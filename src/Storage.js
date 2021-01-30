export class Storage {
  constructor(key, value) {
    this.STORAGE_KEY = "habit";
    this.key = key;
    this.value = value;
    this.storage = localStorage;
  }

  getData() {
    return JSON.parse(this.storage.getItem(this.STORAGE_KEY));
  }
  setData(value) {
    this.storage.setItem(this.STORAGE_KEY, JSON.stringify(value));
  }
  clearData() {
    this.storage.clear();
  }
}
