function greetEveryone(name: string, ...rests: string[]): string {
  return rests.map((name) => `Hello ${name}`).join(", ");
}

console.log(greetEveryone("name", "rest1", "rest2"));