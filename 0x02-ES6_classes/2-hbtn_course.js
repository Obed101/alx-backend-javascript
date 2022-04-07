class HolbertonCourse {
  constructor(name='', length=0, students=[]) {
    if (typeof name === 'string') {
      set setName() {
        this._name = name;
      }
      get getName() {
        return this._students;
      }
    } else {
      throw TypeError('Name must be an string');
    }
    if (!isNaN(length)) {
      set setLength() {
        this._lenght = lenght;
      }
      get getLength() {
        return this._lenght;
      }
    } else {
      throw TypeError('Length must be a number');
    }
    if (Array.isArray(students)) {
      set setStudents() {
        this._students = students;
      }
      get getStudents() {
        return this._students;
      }
    } else {
      throw TypeError('Students must be an array');
    }
  }
}
