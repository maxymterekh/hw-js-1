// // MAIN TASK 1

// // task 1

// const user = {
//     name : "Jamie",
//     hobby : "Golf",
//     age : 23,
//     premium : true,
    
//     };
    
//     user.mood = "happy";
    
//     user.hobby = "skydiving";
    
//     user.premium = false;
    
//     for(const [key, value] of Object.entries(user)) {
//      console.log(`${key} = ${value}`)
//     }


// // task 2

// const program = {
//     title : "lightshot",
//     weight : 250,
//     price : 100,
//     discount : 10,



//     countProps(obj) {
//         let total = 0;
//         for (const [key , ] in Object.entries(obj)) {
//           total += 1;
//         }
//         return total;
//       }

// }


// console.log(program.countProps(program))


// // task 3

// function findBestEmployee(employees) {
//     let bestEmployee = "";
//     let maxTasks = 0;

//     for(const [employee, tasks] of Object.entries(employees)) {
     
//         if (tasks > maxTasks) {
//            maxTasks = tasks;
//            bestEmployee = employee;
//         }
        
//     }
//     return bestEmployee;


// }

// const workers = {
//     john : 2,
//     mike : 2333232,
//     jake: 2231231231323,
    

// }

// console.log(findBestEmployee(workers));



// // task 4

// const salaries = {
//     john : 200,
//     andrew : 500,
//     dario: 1000,
//     brad : 300,
//     tyler : 200,
// }

// function countTotalSalary(employees) {
//     let totalSalary = 0;

//     for(const salary of Object.values(employees)) {
//         totalSalary += salary;
//     }
//     return totalSalary;
// }

// console.log(countTotalSalary(salaries))

// // тут нема сенсу використовувати деструктуризацію і спред бо це тільки збільшить код

// // task 5

// function getAllPropValues(arr, prop) {
//     const finalValues = [];

//     for(const {title, weight} of arr) {
//         let value = "";
//         if (prop === "title") {
//             value = title;
//         }
//         else if (prop === "weight") {
//             value = weight;
//         }
//         else {
//             console.log("Oops, you typed wrong prop!")
//         }
//         finalValues.push(value)
//     }
//     return finalValues;

// }

// const fruits = [
//   {
//         title : "apple",
//         weight : "25g"
//     },
//     {
//         title : "banana",
//         weight : "50g"
//     },
//     {
//         title : "peach",
//         weight : "20g"
//     },
//     ];


// console.log(getAllPropValues(fruits, "weight" ));

// // task 6

// function calculateTotalPrice(allProducts, productName) {
//     let totalPrice = 0;
  
//     for (const { name, price, quantity } of allProducts) {
//       if (name === productName) {
//         totalPrice += price * quantity;
//       }
//     }
  
//     return totalPrice;
//   }
  
//   const allProducts = [
//     {
//       name: "apple",
//       price: 2.5,
//       quantity: 10
//     },
//     {
//       name: "banana",
//       price: 1.5,
//       quantity: 5
//     },
//     {
//       name: "peach",
//       price: 3,
//       quantity: 8
//     }
//   ];
  
//   const productName = "banana";
//   console.log(calculateTotalPrice(allProducts, productName));


//   MAIN TASK 2

const account = {
    balance : 5000,
    history : ["+5000", "-200", "-500", "+300", "-500", "+900"],


}

function showLastTransaction(...history) {
    for(const transaction of history) {
    return transaction;
    }
    
 }

function replenishBalance(balance) {
    let newBalance = 0;

    const stringToReplenish = prompt("Введіть суму поповнення!")

    const numberToReplenish = Number.parseInt(stringToReplenish);

    if (100000 > numberToReplenish > 0) {
       newBalance = balance + numberToReplenish;
       return `Ваш рахунок успішно поповнено! Баланс тепер - ${newBalance}`
    }
    else {
        return "Вибачте ви не можете поповнити рахунок на таку суму("
    }


 }

console.log(showLastTransaction(...account.history));
console.log(replenishBalance(account.balance));



