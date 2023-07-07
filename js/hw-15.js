// task 1


// const user = {
// name : "Jamie",
// hobby : "Golf",
// age : 23,
// premium : true,

// };

// user.mood = "happy";

// user.hobby = "skydiving";

// user.premium = false;

// for(const key of Object.keys(user)) {
//  console.log(`${key} = ${user[key]}`)
// }


// task 2



// const program = {
//     title : "lightshot",
//     weight : 250,
//     price : 100,
//     discount : 10,



//     countProps(obj) {
//         let total = 0;
//         for (const key in obj) {
//           total += 1;
//         }
//         return total;
//       }

// }


// console.log(program.countProps(program))


// task 3

// function findBestEmployee(employees) {
//     let bestEmployee = "";
//     let maxTasks = 0;

//     for(const employee in employees) {
//         const tasks = employees[employee];
//         if (tasks > maxTasks) {
//             maxTasks = tasks;
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


// task 4


// const salaries = {
//     john : 200,
//     andrew : 500,
//     dario: 1000,
//     brad : 300,
//     tyler : 200,
// }

// function countTotalSalary(employees) {
//     let totalSalary = 0;

//     for(const employee in employees) {
//         const salary = employees[employee];
//         totalSalary += salary;
//     }
//     return totalSalary;
// }

// console.log(countTotalSalary(salaries))


// task 5


// function getAllPropValues(arr, prop) {
//     const finalValues = [];

//     for(const obj of arr) {
//         const value = obj[prop];
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


// console.log(getAllPropValues(fruits, "title" ));



// task 6

function calculateTotalPrice(allProducts, productName) {
    let totalPrice = 0;

    for (const product of allProducts) {
        if (product.name === productName) {
          totalPrice += product.price * product.quantity;
        }
      }
    
      return totalPrice;
}

const allProducts = [
    {
      name: "apple",
      price: 2.5,
      quantity: 10
    },
    {
      name: "banana",
      price: 1.5,
      quantity: 5
    },
    {
      name: "peach",
      price: 3,
      quantity: 8
    }
  ];

const productName = "banana";
console.log(calculateTotalPrice(allProducts, productName)); 



