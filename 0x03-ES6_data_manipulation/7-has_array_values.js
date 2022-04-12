export default function hasValuesFromArray(set, array) {
  for (let i of set) {
    if (!i in array) {
      return false;
    }
    return true;
  }
}
