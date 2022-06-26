import { add } from '../src'

describe('add', () => {
  test('adds together two numbers', () => {
    expect(add(1, 2)).toEqual(3)
  })
})
