const fs = require('fs');

async function countStudents (file) {
  try {
    let students = await fs.promises.readFile(file, 'utf-8');
    students = students.split('\n').slice(1);
    students.pop();
    const firstName = [];
    const fields = [];
    const sep = {};
    const sweStudents = [];
    const csStudents = [];
    const fieldList = ['SWE', 'CS'];
    for (const line of students) {
      col = line.split(',');
      firstName.push(col[0]);
      fields.push(col[3]);
      col[3] == 'SWE' ? sweStudents.push(col[0]) : csStudents.push(col[0]);
    }
    console.log(`Number of students: ${students.length}`);
    for (const field of fields) {
      if (sep[field]) {
        sep[field] += 1;
      }else {
        sep[field] = 1;
      }
    }
    console.log(`Number of students in CS: ${sep['CS']}. List: ${csStudents.join(', ')}`);
    console.log(`Number of students in SWE: ${sep['SWE']}. List: ${sweStudents.join(', ')}`);
  } catch(err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
