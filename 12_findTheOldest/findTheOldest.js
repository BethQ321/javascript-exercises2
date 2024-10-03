const findTheOldest = function(people) {
    let oldestPerson = {};
    let highestAge = 0;
    const today = new Date();
    const thisYear = today.getFullYear();
    people.map((person) => {
        let age = 0;
        if(!person.yearOfDeath) {
            age = thisYear - person.yearOfBirth;
        } else {
            age = person.yearOfDeath - person.yearOfBirth;
        }

        if(age > highestAge) {
            highestAge = age;
            oldestPerson = person;
        }
    });
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
