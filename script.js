// complete this js code
function Person(name, age) {
	this.name=name;
	this.age=age;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

function Employee(name, age, jobTitle) {
	 Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Inheriting the Person prototype into the Employee prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Adding a method to the Employee prototype
Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

const person1 = new Person("Alice", 30);
person1.greet(); // Output: Hello, my name is Alice, I am 30 years old.

const employee1 = new Employee("Alice", 25, "Software Engineer");
employee1.greet(); // Output: Hello, my name is Bob, I am 25 years old.
employee1.jobGreet(); // Output: Hello, my name is Bob, I am 25 years old, and my job title is Software Engineer.
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
