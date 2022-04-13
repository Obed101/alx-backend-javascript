export default function cleanSet (set, start) {
  const another = [];
  if (start === '') return start;
  set.forEach(element => {
    if (element.startsWith(start)) {
      const final = element.replace(start, '');
      another.push(final);
    }
  });
  return another.join('-');
}
