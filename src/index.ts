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

const button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = () => {
  alert(greeter.greet());
}

document.body.appendChild(button);
