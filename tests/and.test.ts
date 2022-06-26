import { and } from '../src'

describe('and', () => {
  test('compares two values with ts &&', () => {
    expect(and(true, true)).toEqual(true)
    expect(and(true, false)).toEqual(false)
    expect(and(false, true)).toEqual(false)
    expect(and(false, false)).toEqual(false)
  })
})
