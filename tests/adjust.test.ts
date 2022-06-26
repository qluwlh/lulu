import { adjust, add } from '../src'

describe('adjust', () => {
  const addOne = (value: number) => add(1, value)
  test('applies the given function to the value at the given index of the supplied array', () => {
    expect(adjust(2, addOne, [0, 1, 2, 3])).toEqual([0, 1, 3, 3])
  })

  test('offsets negative indexes from the end of the array', () => {
    expect(adjust(-3, addOne, [0, 1, 2, 3])).toEqual([0, 2, 2, 3])
  })

  test('returns the original array if the supplied index is out of bounds', () => {
    const list = [0, 1, 2, 3]
    expect(adjust(4, addOne, [0, 1, 2, 3])).toEqual(list)
    expect(adjust(5, addOne, [0, 1, 2, 3])).toEqual(list)
  })

  test('does not mutate the original array', () => {
    const list = [0, 1, 2, 3]
    expect(adjust(2, addOne, [0, 1, 2, 3])).toEqual([0, 1, 3, 3])
    expect(list).toEqual([0, 1, 2, 3])
  })
})
