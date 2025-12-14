// String();
// Number();
// Array();
// Object();
// Boolean();

const person = new Object();
person.name = String("John");
person.id = Number(234);
person.tickets = Array("1", "2", "3");
person.alive = Boolean(); // anything except for false OR 0 converts to true

console.log(person);
