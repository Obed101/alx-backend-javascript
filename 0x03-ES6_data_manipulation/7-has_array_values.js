export default function hasValuesFromArray(set, array) {
  for (let i of array) {
    if (!set.has(i)) {
      return false;
    }
    return true;
  }
}
