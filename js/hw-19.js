// task 1

const array2 = ['apple', 'banana', 'orange', 'banana', 'grape', 'apple', 'kiwi'];

const getFirst = array2.map(element => element[0]);
console.log(getFirst)

const getLast = array2.map(element => element[element.length - 1])
console.log(getLast)

// task 2

const people = [
    { name: 'John', surname: "Doe", age: 32, occupation: 'programmer' },
    { name: 'Jane', surname: "Lee", age: 26, occupation: 'teacher' },
    { name: 'Mike', surname: "Watson", age: 42, occupation: 'engineer' },
    { name: 'Emily', surname: "Brad", age: 29, occupation: 'designer' }
    ];

const user = people.map((person, index) => {
    return {
        id: index + 1,
        fullName : `${person.name} ${person.surname}`,
    }
})

console.log(user)