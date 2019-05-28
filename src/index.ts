// (base: https://www.typescriptlang.org/play/)

class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet(): string {
    return `Hello, ${this.greeting}`;
  }
}

const greeter = new Greeter("world");

const button = document.getElementById('myButton')!;
button.onclick = () => {
  alert(greeter.greet());
};
