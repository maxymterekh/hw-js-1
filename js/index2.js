
// task 1

const str = "hello";
const num = 123;
const flag = true;
const txt = "true";

console.log(typeof str) 
console.log(typeof num)
console.log(typeof flag)
console.log(typeof txt)

// task 6

const name = "MacBook Pro 13,";
let price = "ціна: 10000";
const chosed = "Обрано";
const currency = "кредитів"

console.log(chosed,name,price,currency)

const conf = confirm("Змінити ціну на 20000 кредитів?")
console.log(conf)

if(conf === true) {
     price = "ціна: 20000";
}

console.log(chosed,name,price,currency)
