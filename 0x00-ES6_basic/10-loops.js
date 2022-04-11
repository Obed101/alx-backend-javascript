export default function appendToEachArrayValue(array, appendString) {
  const newArr = [];
  for (let idx of array) {
    let value = array[idx];
    newArr.push(appendString + value);
  }

  return newArr;
}
