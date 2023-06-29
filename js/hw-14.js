// task 1

// const myArray = {
   

// }

// myArray.name = "petro";
// myArray.age = 44;
// myArray.city = "kyiv";
// myArray.occupation = "builder";

// console.log(myArray.title);
// //  властивості немає тому показує undefined

// console.log(myArray.city);
// // властивість є, тому показує її значення


// task 2

// const cart = {
//      milk : {
//       fatPercent : 40, 
//       brand : "galychyna",
//       isAffordable : true, 
//       price : 20,
//       discount : undefined

//     },
//     bread : {
//      price : 50, 
//      type : "black-grained",
//      isAffordable : false,
//      discount : undefined

//     },
//     cookies : {
//         price : 15, 
//         quantity : 5, 
//         isAffordable : true, 
//         discount : undefined

//     }
// }

// console.log(cart)

// task 3


// // 1

// let apartment;

// apartment = {
//     imgUrl : "https://via.placeholder.com/640x480",
//     descr : "Spacious apartment in the city center",
//     rating  : 4, 
//     price  : 2153,
//     tags  :  ["premium", "promoted", "top"],
// };

// // 2

// apartment.owner = {
//     name : "henry",
//     phone  : "982-126-1588",
//     email : "henry.carter@aptmail.com",

// };

// // 3

// let aptRating = apartment.rating;
// console.log(aptRating);

// let aptDescr  = apartment.descr;
// console.log(aptDescr);

// let aptPrice = apartment.price;
// console.log(aptPrice);

// let aptTags  = apartment.tags;
// console.log(aptTags)

// // 4

// const ownerName  = apartment.owner.name;

// const ownerPhone = apartment.owner.phone;

// const ownerEmail = apartment.owner.email;

// const numberOfTags =  apartment.tags.length;

// const firstTag = apartment.tags[0];

// const lastTag = apartment.tags[apartment.tags.length - 1];

// // 5

// aptRating = apartment["rating"];
// aptDescr = apartment["descr"];
// aptPrice = apartment["price"];
// aptTags = apartment["tags"];


// // 6

// apartment.price = 5000;

// apartment.rating = 4.7;
 
// apartment.owner.name = "Henry Sibola";

// apartment.tags.push("trusted");

// console.log(apartment.tags);
// console.log(apartment.rating);

// // 7

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//     country : "Jamaica",
//     city : "Kingston",
// }

// console.log(apartment)


// task 4

// const name = "Repair Droid";

// const price = 2500;

// const image = "https://via.placeholder.com/640x480";

// const tags = ["on sale", "trending", "best buy"];

 

// const product = {

//   name, 
//   price,
//   image, 
//   tags,

// };

// console.log(product)

// task 5

const emailInputName = "email";

const passwordInputName = "password";

const credentials = {

    [emailInputName] : "henry.carter@aptmail.com",

    [passwordInputName] : "jqueryismyjam",

 

};

console.log(credentials);







