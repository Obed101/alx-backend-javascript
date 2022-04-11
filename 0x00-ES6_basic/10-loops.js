export default function appendToEachArrayValue(array, appendString) {
  const newArr = [];
  for (const idx of array) {
    const value = array[idx];
    newArr.push(appendString + value);
  }

  return newArr;
}
