import isPlaceholder from '../../src/internal/isPlaceholder'
import placeholder from '../../src/internal/placeholder'
import { __ } from '../../src'

describe('placeholder', () => {
  test('should return true', () => {
    expect(isPlaceholder(__)).toBeTruthy()
    expect(isPlaceholder(placeholder)).toBeTruthy()
  })
})
