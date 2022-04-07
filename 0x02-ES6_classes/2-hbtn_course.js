export default class HolbertonCourse {
  constructor(name, length, students) {
      set setName() {
        if (typeof name === 'string') {
          this._name = name;
          get getName() {
            return this._students;
          }
        } else {
          throw TypeError('Name must be an string');
        }
      }
      set setLength() {
        if (!isNaN(length)) {
            this._lenght = lenght;
          get getLength() {
            return this._lenght;
          }
        } else {
          throw TypeError('Length must be a number');
        }  
			}
      set setStudents() {
        if (Array.isArray(students)) {      
          this._students = students;
          get getStudents() {
            return this._students;
          }
        } else {
          throw TypeError('Students must be an array');
        }
      }
  }
}
