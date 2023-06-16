// task 1
// function makePizza() {

//     return "Your pizza is being prepared, please wait.";
  
//   }
  
//   // Change code below this line
  
//   const result = makePizza("");
  
//   const pointer = makePizza;



// task 2


// function deliverPizza(pizzaName) {

//     return `Delivering ${pizzaName} pizza.`;

//   }

//   function makePizza(pizzaName) {

//     return `Pizza ${pizzaName} is being prepared, please wait...`;

//   }

//   // Chande code below this line

//   function makeMessage(pizzaName, callback) {

//     return callback(pizzaName);

//   }

//   console.log(makeMessage("Royal Grand", makePizza))




// task 3

// function makePizza(pizzaName, callback) {

//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);

//     callback(pizzaName);

//   }

//   makePizza("Royal Grand", function deliverPizza(pizzaName) {

//     console.log(`Delivering pizza ${pizzaName}.`);

//   });

//   // Change code below this line

//   makePizza("Ultracheese",function eatPizza(pizzaName){
//     console.log(`Eating pizza ${pizzaName}`)
//   });


// task 4


// const buttonRef = document.querySelector("[data-button]");

// buttonRef.addEventListener("click", showInfo);

// function showInfo() {
//     console.log("hello world!")
// }


// task 5

// const buttonClickCount = document.querySelector("[data-button]")

// buttonClickCount.addEventListener("click", clickCounter)

// let clickCount = 0;

// function clickCounter() {
//     clickCount++;
//     console.log(clickCount)
    
// }

// task 6


// const applyCallbackToEachElement = function (arr, callback) {
//     const masResult = [];

//    for(let i = 0; i < arr.length; i++) {
//     const callBackResult = callback(arr[i])
//     masResult.push(callBackResult)
//    }

//    return masResult;

// }

// const arr = [1, 2, 3, 4, 5];

// const squareCallback = function(number) {
//     return number / 10;
// }; 

// const result = applyCallbackToEachElement(arr, squareCallback);

// console.log(result); 

// task 7

// const calculateDiscountedPrice = function (price, discount, callback) {
//     const discountedPrice = price - (price * discount) / 100; 
  
//     return  callback(discountedPrice); 
//   };
  
//   const showDiscountedPrice = function (discountedPrice) {
//     console.log('Discounted price:', discountedPrice);
//   };
  
//   calculateDiscountedPrice(100, 10, showDiscountedPrice) 





  
  
  

  