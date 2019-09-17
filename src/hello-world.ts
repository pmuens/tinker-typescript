function greet(name: string) {
  const msg = `Hello ${name}!`
  process.stdout.write(msg)
}

greet('John Doe')
