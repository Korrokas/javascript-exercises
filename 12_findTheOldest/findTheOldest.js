const findTheOldest = function(people) {

people.forEach(person => person.age = person.yearOfDeath - person.yearOfBirth)
people.sort((p1, p2) => (p1.age < p2.age) ? 1 : -1)

const oldest = people[0];


console.log(people);
return oldest;
}

// Do not edit below this line
module.exports = findTheOldest;