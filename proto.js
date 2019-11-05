function Person(name, age, gender) {
  const person = Object.create(Person.prototype);
  person.name = name;
  person.age = age;
  person.gender = gender;

  return person;
}

console.log(Person.prototype);

Person.prototype.greeting = function(otherPerson){
  console.log(`Hello ${otherPerson.name} My name is ${this.name}`);
};

console.log(Person.prototype);


var jason = Person('Jason', 34, 'Male');
var erika = Person('Erika', 33, 'Female');
