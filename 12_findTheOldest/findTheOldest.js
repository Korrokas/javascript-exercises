const findTheOldest = function(people) {

const date = new Date();
const currentYear = date.getFullYear();

people.forEach(person => {
    if (!person.hasOwnProperty('yearOfDeath')) {
        person.yearOfDeath = currentYear;
    }
    person.age = person.yearOfDeath - person.yearOfBirth
})

people.sort((p1, p2) => (p1.age < p2.age) ? 1 : -1)

const oldest = people[0];
return oldest;
}

// Do not edit below this line
module.exports = findTheOldest;