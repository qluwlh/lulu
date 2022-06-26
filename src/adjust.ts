/**
 * Applies a function to the value at the given index of an array, returning a new copy of the array with the
 * element at the given index replaced with the result of the function application.
 *
 * ### example
 * ```typescript
 * adjust(1, (value) => value.toUpperCase(), ['a', 'b', 'c', 'd']);      //=> ['a', 'B', 'c', 'd']
 * adjust(-1, (value) => value.toUpperCase(), ['a', 'b', 'c', 'd']);     //=> ['a', 'b', 'c', 'D']
 * ```
 */

function adjust<T>(index: number, fn: (value: T) => T, list: T[]): T[] {
  const len = list.length
  if (index >= len || index < -len) {
    return list
  }
  const newIndex = (len + index) % len
  const res = list.concat()
  res[newIndex] = fn(list[newIndex])
  return res
}

export default adjust
