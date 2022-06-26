/**
 * Returns the first argument if it is falsy, otherwise the second argument. Acts as the boolean and statement if both inputs are Booleans.
 * ### example
 * ```typescript
 * and(true,true)          // true
 * and(true,false)         // false
 * and(false,true)         // false
 * and(false,false)        // false
 * ```
 */
function and(a: boolean, b: boolean): boolean {
  return a && b
}
export default and
