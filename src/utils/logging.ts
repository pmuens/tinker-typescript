const { log } = console

function println<T>(msg: T): void {
  log(`${msg}\n`)
}

const logger = {
  log,
  println
}

export { println, logger }
