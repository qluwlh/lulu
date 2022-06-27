import { __ } from '../src'
import placeholder from '../src/internal/placeholder'

describe('__', () => {
  test('should equal internal placeholder', () => {
    expect(__).toEqual(placeholder)
    expect(__).not.toEqual(Symbol('__'))
  })
})
