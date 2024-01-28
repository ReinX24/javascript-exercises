const findTheOldest = function (people) {
    // oldest = first person in array, currentPerson second person in array.
    return people.reduce((oldest, currentPerson) => {
        console.log(currentPerson)
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath)
        return oldestAge < currentAge ? currentPerson : oldest
    })
};

const getAge = function (yearOfBirth, yearOfDeath) {
    if (!yearOfDeath) {
        yearOfDeath = new Date().getFullYear()
    }
    return yearOfDeath - yearOfBirth
}

// Do not edit below this line
module.exports = findTheOldest;
