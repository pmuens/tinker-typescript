// our lists we want to `map` over
const someNumbers = [1, 2, 3, 4, 5, 6]
const someStrings = ['Alice', 'Bob', 'John', 'Alex', 'Pete']

// functions which are used for our mapping
const add2 = (num: number): number => num + 2
const isEven = (num: number): boolean => num % 2 === 0
const startsWithA = (str: string): boolean => str.toLowerCase().charAt(0) === 'a'
const wrapStr = (str: string): string => `<blink>${str}</blink>`
const numToString = (num: number): string => `${num}`

// some convenient variables / functions
let result
const log = (msg: string) => console.log(`${msg}\n`)

// --------------- Filter ---------------
// using the built-in `filter` functionality
result = someNumbers.filter(isEven)
log(`built-in filter with numbers: ${result}`)

result = someStrings.filter(startsWithA)
log(`built-in filter with strings: ${result}`)

// implementing our own `filter` function
function filter1(xs: number[], func: (x: number) => boolean): number[] {
  const res: number[] = []
  for (const x of xs) {
    if (func(x)) {
      res.push(x)
    }
  }
  return res
}

result = filter1(someNumbers, isEven)
log(`filter1 with numbers: ${result}`)

// NOTE: we cannot use our `filter1` on strings since `filter1` can only deal with numbers --> Solution: Use Generics!
// result = filter1(someStrings, startsWithA)
// log(`filter1 with strings: ${result}`)

// the generic version of our `filter` function which can deal with any type
function filter2<T>(xs: T[], func: (x: T) => boolean): T[] {
  const res: T[] = []
  for (const x of xs) {
    if (func(x)) {
      res.push(x)
    }
  }
  return res
}

result = filter2(someNumbers, isEven)
log(`filter2 with numbers: ${result}`)

result = filter2(someStrings, startsWithA)
log(`filter2 with strings: ${result}`)

// --------------- Map ---------------
// using the built-in `map` functionality
result = someNumbers.map(add2)
log(`built-in map with numbers: ${result}`)

result = someStrings.map(wrapStr)
log(`built-in map with strings: ${result}`)

// implementing our own `map` function
function map1(xs: number[], func: (x: number) => number): number[] {
  const res: number[] = []
  for (const x of xs) {
    res.push(func(x))
  }
  return res
}

result = map1(someNumbers, add2)
log(`map1 with numbers: ${result}`)

// NOTE: we cannot use our `map1` on strings since `map1` can only deal with numbers --> Solution: Use Generics!
// result = map1(someStrings, wrapStr)
// log(`map1 with strings: ${result}`)

// the generic version of our `map` function which can deal with any type
function map2<A, B>(xs: A[], func: (x: A) => B): B[] {
  const res: B[] = []
  for (const x of xs) {
    res.push(func(x))
  }
  return res
}

result = map2(someNumbers, add2)
log(`map2 with numbers: ${result}`)

result = map2(someStrings, wrapStr)
log(`map2 with strings: ${result}`)

// proof that we can turn the input of type A into a result of type B
result = map2(someNumbers, numToString)
log(`map2 with a list of numbers turned into a list of strings: ${result}`)
