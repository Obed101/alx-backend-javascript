function cleanSet (set, start) {
  const another = [];
  if (start === '' || typeof start !== 'string') return '';
  set.forEach(element => {
    if (element.startsWith(start)) {
      const final = element.replace(start, '');
      another.push(final);
    }
  });
  return another.join('-');
}
console.log(
  cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon')
);
console.log(
  cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 1)
);
