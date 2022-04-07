export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw TypeError('Name must be a string');
    if (typeof length !== 'number') throw TypeError('Length must be a number');
    if (!Array.isArray(students)) throw TypeError('Students must be an array');
    this._name = name;
    this._length = length;
    this._students = students;
  }
}
  get getname() {
    return this._name;
  }

  set setname(name) {
    if (typeof name !== 'string') throw TypeError('Name must be a string');
    this._name = name;
  }

  get getlength() {
    return this._length;
  }

  set setlength(length) {
    if (typeof length !== 'number') throw TypeError('Length must be a number');
    this._length = length;
  }

  get getstudents() {
    return this._students;
  }

  set setstudents(students) {
    if (!Array.isArray(students)) { throw TypeError('Students must be an array'); }
    this._students = students;
  }
}
