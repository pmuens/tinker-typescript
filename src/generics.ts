// our lists we want to `map` over
const someNumbers = [1, 2, 3, 4, 5, 6]
const someStrings = ['a', 'b', 'c', 'd']

// functions which are used for our mapping
const add2 = (num) => num + 2
const wrapStr = (str) => `<blink>${str}</blink>`

// using the built-in `map` functionality
const resNumbers1 = someNumbers.map(add2)
console.log(resNumbers1)

const resStrings1 = someStrings.map(wrapStr)
console.log(resStrings1)

// implementing our own `map` function
function map1(xs: number[], func: (x: number) => number): number[] {
  const res: number[] = []
  for (const x of xs) {
    res.push(func(x))
  }
  return res
}

const resNumbers2 = map1(someNumbers, add2)
console.log(resNumbers2)

// NOTE: we cannot use our `map1` on strings since `map1` can only deal with numbers --> Solution: Use Generics!
// const resStrings2 = map1(someStrings, wrapStr)
// console.log(resStrings2)

// the generic version of our `map` function which can deal with any type
function map2<T>(xs: T[], func: (x: T) => T): T[] {
  const res: T[] = []
  for (const x of xs) {
    res.push(func(x))
  }
  return res
}

const resNumbers3 = map2(someNumbers, add2)
console.log(resNumbers3)

const resStrings3 = map2(someStrings, wrapStr)
console.log(resStrings3)
