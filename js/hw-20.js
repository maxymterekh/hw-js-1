// task 1

const users =  [
    {name : "andrew", balance : 1200, age : 25, friend : "jamie", friendsQuantity : 10, skills : ["programming", "painting"] },
    {name : "mathew", balance : 2500, age : 40, friend : "jake", friendsQuantity : 5, skills : ["programming", "skateboarding"] }, 
    {name : "john" , balance : 500, age : 15, friend : "jake", friendsQuantity : 9, skills : ["cooking", "climbing"] },
];

// const countBalances = users.reduce((totalBal, {balance}) => totalBal + balance, 0);
// console.log(countBalances);


// task 2

// const targetFriend = "jake";

// const findFriend = users.filter(({friend}) => friend === targetFriend);
// console.log(findFriend);

// const friendsNames = findFriend.map(user => user.name);
// console.log(friendsNames)

// task 3



const sortedUsers = users.sort((a, b) => a.friendsQuantity - b.friendsQuantity);
console.log(sortedUsers);

const sortedNames = sortedUsers.map(user => user.name);
console.log(sortedNames);


// task 4


const allSkills = users.reduce((totalSkills, user) => {
   for(const skill of user.skills) {
    if (!(totalSkills.includes(skill))){
      totalSkills.push(skill);
    }
   }

   return totalSkills;
    }, []);

const sortedSkills = allSkills.sort();

console.log(sortedSkills)
 







