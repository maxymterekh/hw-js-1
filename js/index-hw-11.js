// task 1
// const logItems = function(array) {
//     for(let i = 0; i < array.length; i++) {
     
//        console.log((`${i + 1} - ${array[i]}`))
//     }
// }
// const friends = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
// logItems(friends);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);



// task 2
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



// task 3

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


// task 4

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



// task 5


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



// task 6


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





