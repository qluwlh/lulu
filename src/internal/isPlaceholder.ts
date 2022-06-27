import placeholder, { type Placeholder } from './placeholder'

function isPlaceholder(a: unknown): a is Placeholder {
  return placeholder === a
}

export default isPlaceholder
