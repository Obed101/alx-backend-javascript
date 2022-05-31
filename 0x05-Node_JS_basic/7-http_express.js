const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
app.get('/', (_, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
}).listen(1245);

app.get('/students', (_, res) => {
  countStudents(process.argv[2]).then((data) => {
  res.send('This is the list of our students\n');
  res.send(`Number of students: ${data.students.length}\n`);
    res.send(`Number of students in CS: ${data.count.CS}. List: ${data.csStudents.join(', ')}\n`);
    res.send(`Number of students in SWE: ${data.count.SWE}. List: ${data.sweStudents.join(', ')}`);
    res.end();
  }).catch((err) => res.end(err.message));
}).listen(1245);

module.exports = app;
