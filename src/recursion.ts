import { println } from './utils/logging'

// the numbers we want to sum up
const numbers = [1, 2, 3, 4, 5]

// convenience variables
let result

// a non tail-recursive `sum` function
function sum1(xs: number[]): number {
  if (!xs.length) {
    return 0
  }
  const head: number = xs[0]
  const tail: number[] = xs.slice(1, xs.length)
  return head + sum1(tail)
}

result = sum1(numbers)

println(`sum1 (non tail-recursive): ${result}`)

// translating the `sum` function into a tail-recursive function
function sum2(xs: number[]): number {
  function sumTail(xs: number[], accum: number) {
    if (!xs.length) {
      return accum
    }
    const head: number = xs[0]
    const tail: number[] = xs.slice(1, xs.length)
    return sumTail(tail, head + accum)
  }
  return sumTail(xs, 0)
}

result = sum2(numbers)

println(`sum2 (tail-recursive): ${result}`)
