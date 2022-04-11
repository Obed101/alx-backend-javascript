export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
    let newArr = array;
    const value = array[idx];
    newArr[idx] = appendString + value;
  }

  return newArr;
}
