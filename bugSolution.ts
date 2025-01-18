function greeter(person: string | string[]): string {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return "Hello, " + person.join(' ');
  }
}

let user = ["Jane", "Doe"];
console.log(greeter(user)); //This will now correctly output "Hello, Jane Doe"

let user2 = "John";
console.log(greeter(user2)); //This will output "Hello, John"