export default class HolbertonCourse {
  constructor(name='', length=0, students=[]) {
    if (typeof name === 'string') {
      set name_() {
        this._name = name;
      }
      get getname() {
        return this._students;
      }
    } else {
      throw 'TypeError: Name must be an string';
    }
    if (typeof length === 'number') {
      set length_() {
        this._lenght = lenght;
      }
      get getLength() {
        return this._lenght;
      }
    } else {
      throw 'TypeError: Length must be a number';
    }
    if (Array.isArray(students)) {
      set students_() {
        this._students = students;
      }
      get students() {
        return this._students;
      }
    } else {
      throw 'TypeError: Students must be an array';
    }
  }
}
