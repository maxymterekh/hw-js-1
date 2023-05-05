
// task 1

// const lang = "fr";

// switch(lang) {
//   case "de" :
//     console.log("Januar")
//     break;
//     case "fr" :
//         console.log("Janvier")
//         break;
//         case "ua" :
//     console.log("Січень")
//     break;
//     case "en" :
//     console.log("Januar")
//     break;

//     default :
//     console.log("This language cannot be reached")

  
// }


// task 2

// const drink = prompt("Який напій ви бажаєте придбати: Кава, Чай чи Сік?")
// const redactedDrink = drink.toLowerCase();
// let cost;

// switch (redactedDrink) {
//     case "чай" :
//     cost = 10;
//     console.log(`До сплати ${cost} гривень`)
//     break;

//     case "кава" :
//     cost = 15;
//     console.log(`До сплати ${cost} гривень`)
//     break;

//     case "сік" :
//     cost = 20;
//     console.log(`До сплати ${cost} гривень`)
//     break;

//     default :
//     console.log("Нажаль, такий напій недоступний :(")

// }


// task 3

// const day = prompt("Який сьогодні день тижня?");
// const fixedDay = day.toLowerCase();


// switch (fixedDay) {
//     case "понеділок" : 
//     console.log("Сьогодні робочий день(")
//     break;

//     case "вівторок" : 
//     console.log("Сьогодні робочий день(")
//     break;

//     case "середа" : 
//     console.log("Сьогодні робочий день(")
//     break;

//     case "четвер" : 
//     console.log("Сьогодні робочий день(")
//     break;

//     case "субота" : 
//     console.log("Ура, сьогодні вихідний!")
//     break;

//     case "неділя" :
//         console.log("Ура, сьогодні вихідний!")
//         break;
    
//         default :
//         console.log("Неправильний день тижня")


// }

//  task 4

// const month = prompt("Який номер поточного місяця?");

// switch (month) {
//   case "12":
//   case "1":
//   case "2":
//     alert("Це зима!");
//     break;
//   case "3":
//   case "4":
//   case "5":
//     alert("Це весна!");
//     break;
//   case "6":
//   case "7":
//   case "8":
//     alert("Це літо!");
//     break;
//   case "9":
//   case "10":
//   case "11":
//     alert("Це осінь!");
//     break;
//   default:
//     alert("Введіть правильний номер місяця!");
//     break;
// }


// task 5 


// створити таблицю множення для числа 7

// for(let i = 1; i <= 10; i++) {
//     const result = i * 7;
//     console.log(result)
// }
  
// task 6

// const max = 27;
// const min = 12;
// let total = 0;

// for (let i = min; i <= max; i++) {
//   total += i;
// }

// console.log(total);

// task 7

// const min = 3;
// const max = 9;
// let total = 1;

// for (let i = min; i <= max; i++) {
//        if(i % 2 !== 0) {
//         total *= i;
//        }
// }
// console.log(total)

// task 8

// for(let i =1; i <= 100; i++) {
//     if (i === 49) {
//         console.log(i)
//         break;
      
//     }
// }

// task 9

// const min = 10;
// const max = 30;

// for(let i = min; i <= max; i++) {
//     if (i !== 15) {
//       console.log(i)
//     }
// }

// task 10  
// const minPrice = 500;
// const maxPrice = 5000;
// const goods = 50;
// let totalPrice = 0;

// for(let i = 1; i <= goods ; i++) {
// let price = (Math.random() * (maxPrice - minPrice) + minPrice)
// price = Number(price.toFixed(2))

// totalPrice = price + totalPrice;
// console.log(totalPrice.toFixed(0))

// }

// task 11 

            // FOR 



// for(let i = 1; i <= 5; i++) {
//     console.log(i)
// }


        //    WHILE

// let counter = 1;

// while (counter <= 5) {
    
//     console.log(counter)
//     counter += 1;
    
// }


    //    DO WHILE 

    // let i = 1;
    // do {
    //   console.log(i);
    //   i++;
    // } while (i <= 5);


// task 12

// let number;

// do {
//   number = prompt("Введіть число більше 100:", "");
// } while (number <= 100 && number !== null);

// console.log(`Ви ввели число: ${number}`);



