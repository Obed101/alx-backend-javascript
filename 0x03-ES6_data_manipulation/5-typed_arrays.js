export default function createInt8TypedArray(length, position, value) {
    if (position < 0 || position >= length) {
      throw Error('Position outside range');
    }
    const type1 = new ArrayBuffer(length);
    const array8 = new Int8Array(type1, 0, length);
    array8.set([value], position);
    return new DataView(type1);
  }