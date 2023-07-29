// task 1

const players = [
    {
        name: "john",
        eyeColor : "blue",
        gender : "male",
        isActive : true,
        age : 12,
        
    },
    {
        name: "julia",
        eyeColor : "grey",
        gender : "female",
        isActive : false,
        age : 45,
    },
    {
        name: "jake",
        eyeColor : "brown",
        gender : "male",
        isActive : false,
        email: "chacha@gmail.com",
        age : 100,
    },

];

const namesArray = players.map(({name}) => name);
console.log(namesArray)

// task 2

const targetEye = "blue";

const eyesArray = players.filter(({eyeColor}) => eyeColor === "blue");
console.log(eyesArray)


// task 3

const targetGender = "male";

const genderArray = players.filter(({gender}) => gender === "male").map(({name}) => name);
console.log(genderArray)

// task 4

const notActiveArray = players.filter(({isActive}) => isActive === false);
console.log(notActiveArray);

// task 5

const findEmail = players.find(({email}) => email);
console.log(findEmail)

// task 6

const min = 10;

const max = 50;

const findAge = players.filter(({age}) => age >= min && age <= max )
   
console.log(findAge);





