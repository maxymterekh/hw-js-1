                // TASK 1

// ДЗ 11



// task 1
    //   НЕ СТРІЛОЧНА 
// const logItems = function(array) {
//     for(let i = 0; i < array.length; i++) {
     
//        console.log((`${i + 1} - ${array[i]}`))
//     }
// }
// const friends = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
// logItems(friends);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);


// СТРІЛОЧНА


// const logItems = (array) => {
//     for(let i = 0; i < array.length; i++) {
     
//         //        console.log((`${i + 1} - ${array[i]}`))
//         //     }
// }
// }

// const friends = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
// logItems(friends);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);


// task 2

// НЕ СТРІЛОЧНА  



// const calculateEngravingPrice = function (message, pricePerWord) {
//     const words = message.split(' ');
//     const wordCount = words.length;
//     const totalPrice = wordCount * pricePerWord;
//     return totalPrice;
// }

// console.log(
//     calculateEngravingPrice(
//       'Proin sociis natoque et magnis parturient montes mus',
//       10,
//     ),
//   ); 
  
//   console.log(
//     calculateEngravingPrice(
//       'Proin sociis natoque et magnis parturient montes mus',
//       20,
//     ),
//   ); 
  
//   console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
//   ); 
  
//   console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20), );


// СТРІЛОЧНА 

// const calculateEngravingPrice = (message, pricePerWord) => {
//     const words = message.split(' ');
//     const wordCount = words.length;
//     const totalPrice = wordCount * pricePerWord;
//     return totalPrice;
// }

// console.log(
//         calculateEngravingPrice(
//           'Proin sociis natoque et magnis parturient montes mus',
//           10,
//         ),
//       ); 
      
//       console.log(
//         calculateEngravingPrice(
//           'Proin sociis natoque et magnis parturient montes mus',
//           20,
//         ),
//       ); 
      
//       console.log(
//         calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
//       ); 
      
//       console.log(
//         calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20), );
    

// task 3


// НЕ СТРІЛОЧНА 

// const findLongestWord = function(string) {
//     let words = string.split(' ');
//     let wordLength = 0;
//     let biggestWord;
  
//     for (let i = 0; i < words.length; i += 1) {
//       wordLength = words[1].length;
  
//       if (words[i].length > wordLength) {
//         biggestWord = words[i];
  
//         return biggestWord;
//       }
  
//     }
//   };

  
//   /*
//    * Виклич функції для перевірки працездатності твоєї реалізації.
//    */
//   console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
  
//   console.log(findLongestWord('Google do a roll')); 
  
//   console.log(findLongestWord('May the force be with you')); 

// СТРІЛОЧНА 

// const findLongestWord = (string) => {
//     let words = string.split(' ');
//     let wordLength = 0;
//     let biggestWord;
  
//     for (let i = 0; i < words.length; i += 1) {
//       wordLength = words[1].length;
  
//       if (words[i].length > wordLength) {
//         biggestWord = words[i];
  
//         return biggestWord;
//       }
  
//     }
//   };

  
//   /*
//    * Виклич функції для перевірки працездатності твоєї реалізації.
//    */
//   console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
  
//   console.log(findLongestWord('Google do a roll')); 
  
//   console.log(findLongestWord('May the force be with you')); 


// task 4

// НЕ СТРІЛОЧНА 



// const formatString = function (string) {
//     let stringLength = string.length;
//    if (stringLength < 40) {
//     return string;
//    }
//    else if (stringLength > 40) {
//     let newString =  string.slice(0, 40);
//     newString = newString + "...";
//     return newString;
    
//    }
   
//   };
  
//   /*
//    * Виклич функції для перевірки працездатності твоєї реалізації.
//    */
//   console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
//   // повернеться оригінальний рядок
  
//   console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
//   // повернеться форматований рядок
  
//   console.log(formatString('Curabitur ligula sapien.'));
//   // повернеться оригінальний рядок
  
//   console.log(
//     formatString(
//       'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//     ),
//   );
//   // повернеться форматований рядок

// СТРІЛОЧНА 

// const formatString =  (string) => {
//     let stringLength = string.length;
//    if (stringLength < 40) {
//     return string;
//    }
//    else if (stringLength > 40) {
//     let newString =  string.slice(0, 40);
//     newString = newString + "...";
//     return newString;
    
//    }
   
//   };
  
//   /*
//    * Виклич функції для перевірки працездатності твоєї реалізації.
//    */
//   console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
//   // повернеться оригінальний рядок
  
//   console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
//   // повернеться форматований рядок
  
//   console.log(formatString('Curabitur ligula sapien.'));
//   // повернеться оригінальний рядок
  
//   console.log(
//     formatString(
//       'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//     ),
//   );
//   // повернеться форматований рядок



// task 5



// НЕ СТРІЛОЧНА


// const checkForSpam = function (message) {
//     let response;
//     const newMessage = message.toLowerCase();
  
//     if (newMessage.includes("spam") || newMessage.includes("sale")) {
//       response = true;
//     } else {
//       response = false;
//     }
  
//     return response;
//   };
  
//   /*
//    * Викличи функції для перевірки працездатності твоєї реалізації.
//    */
//   console.log(checkForSpam('Latest technology news')); // false
  
//   console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
//   console.log(checkForSpam('Get best sale offers now!')); // true
  
//   console.log(checkForSpam('[SPAM] How to earn fast money?')); // true




// СТРІЛОЧНА

// const checkForSpam =  (message) => {
//     let response;
//     const newMessage = message.toLowerCase();
  
//     if (newMessage.includes("spam") || newMessage.includes("sale")) {
//       response = true;
//     } else {
//       response = false;
//     }
  
//     return response;
//   };
  
//   /*
//    * Викличи функції для перевірки працездатності твоєї реалізації.
//    */
//   console.log(checkForSpam('Latest technology news')); // false
  
//   console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
//   console.log(checkForSpam('Get best sale offers now!')); // true
  
//   console.log(checkForSpam('[SPAM] How to earn fast money?')); // true





// task 6


//  НЕМА ФУНКЦІЇ


// let input;
// const numbers = [];
// let total = 0;

// while (true) {
//   input = prompt('Введіть число');

//   if (input === null) {
//     break;
//   }

//   const number = Number(input);

//   if (Number.isNaN(number)) {
//     alert('Було введено не число, спробуйте ще раз');
//     continue;
//   }

//   numbers.push(number);
// }

// if (numbers.length > 0) {
//   for (const number of numbers) {
//     total += number;
//   }

//   console.log(`Загальна сума чисел дорівнює ${total}`);
// }



// ДЗ 12



// task 1

// НЕ СТРІЛОЧНА

// function makePizza() {

//     return "Your pizza is being prepared, please wait.";
  
//   }
  
//   // Change code below this line
  
//   const result = makePizza("");
  
//   const pointer = makePizza;



// СТРІЛОЧНА 



// const makePizza = () => "Your pizza is being prepared, please wait.";

    
//   // Change code below this line
  
//   const result = makePizza("");
  
//   const pointer = makePizza;


// task 2


// НЕ СТРІЛОЧНА


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

// СТРІЛОЧНА 

// const deliverPizza = (pizzaName) =>  `Delivering ${pizzaName} pizza.`;

    
// const makePizza = (pizzaName) => `Pizza ${pizzaName} is being prepared, please wait...`;

    

//   // Chande code below this line

// const makeMessage = (pizzaName, callback) => callback(pizzaName);


// console.log(makeMessage("Royal Grand", makePizza))




// task 3


// НЕ СТРІЛОЧНА 



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

// СТРІЛОЧНА

// const makePizza = (pizzaName, callback) => {

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



// НЕ СТРІЛОЧНА 


// const buttonRef = document.querySelector("[data-button]");

// buttonRef.addEventListener("click", showInfo);

// function showInfo() {
//     console.log("hello world!")
// }


// СТРІЛОЧНА 


// const buttonRef = document.querySelector("[data-button]");

// const showInfo = () => {
//     console.log("hello world!");
// };
    
// buttonRef.addEventListener("click", showInfo);






// task 5


// НЕ СТРІЛОЧНА 


// const buttonClickCount = document.querySelector("[data-button]")

// buttonClickCount.addEventListener("click", clickCounter)

// let clickCount = 0;

// function clickCounter() {
//     clickCount++;
//     console.log(clickCount)
    
// }

// СТРІЛОЧНА 


// const buttonClickCount = document.querySelector("[data-button]")

// const clickCounter = () => {
//     clickCount++;
//     console.log(clickCount)
    
// }

// buttonClickCount.addEventListener("click", clickCounter)

// let clickCount = 0;



// task 6


// НЕ СТРІЛОЧНА 


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





// стрілочна 



// const applyCallbackToEachElement = (arr, callback) => {
//     const masResult = [];

//    for(let i = 0; i < arr.length; i++) {
//     const callBackResult = callback(arr[i])
//     masResult.push(callBackResult)
//    }

//    return masResult;

// }

// const arr = [1, 2, 3, 4, 5];

// const squareCallback = (number) => number / 10;
    
 
// const result = applyCallbackToEachElement(arr, squareCallback);

// console.log(result); 



// task 7


// НЕ СТРІЛОЧНА 



// const calculateDiscountedPrice = function (price, discount, callback) {
//     const discountedPrice = price - (price * discount) / 100; 
  
//     return  callback(discountedPrice); 
//   };
  
//   const showDiscountedPrice = function (discountedPrice) {
//     console.log('Discounted price:', discountedPrice);
//   };
  
//   calculateDiscountedPrice(100, 10, showDiscountedPrice) 


// СТРІЛОЧНА 


// const calculateDiscountedPrice =  (price, discount, callback) => {
//     const discountedPrice = price - (price * discount) / 100; 
  
//     return  callback(discountedPrice); 
//   };
  
// const showDiscountedPrice = (discountedPrice) => {
//     console.log('Discounted price:', discountedPrice);
//   };
  
//   calculateDiscountedPrice(100, 10, showDiscountedPrice) 






  
  
  





