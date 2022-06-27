import placeholder from '../../src/internal/placeholder'
import { __ } from '../../src'

describe('placeholder', () => {
  test('should equal __', () => {
    expect(placeholder).toEqual(__)
    expect(placeholder).not.toEqual(Symbol('__'))
  })
})
