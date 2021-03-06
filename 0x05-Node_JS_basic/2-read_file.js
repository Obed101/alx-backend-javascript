const fs = require('fs');

function countStudents(file) {
  try {
    let students = fs.readFileSync(file, 'utf-8');
    students = students.split('\n').slice(1);
    students.pop();
    const firstName = [];
    const fields = [];
    const sep = {};
    const sweStudents = [];
    const csStudents = [];
    for (const line of students) {
      const col = line.split(',');
      firstName.push(col[0]);
      fields.push(col[3]);
      if (col[3] === 'SWE') {
        sweStudents.push(col[0]);
      } else {
        csStudents.push(col[0]);
      }
    }
    console.log(`Number of students: ${students.length}`);
    for (const field of fields) {
      if (sep[field]) {
        sep[field] += 1;
      } else {
        sep[field] = 1;
      }
    }
    console.log(`Number of students in CS: ${sep.CS}. List: ${csStudents.join(', ')}`);
    console.log(`Number of students in SWE: ${sep.SWE}. List: ${sweStudents.join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
