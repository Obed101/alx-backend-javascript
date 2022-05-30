// const process = require('process')
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question(`Welcome to Holberton School, what is your name?\n`, name => {
  console.log(`Your name is: ${name}`);
  readline.close();
});
const ac = new AbortController();
const signal = ac.signal;
signal.addEventListener('abort', () => {
  console.log('This important software is now closing');
}, { once: true });
