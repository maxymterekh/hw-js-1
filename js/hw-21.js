
// роблю функцію фільтрації товарів в інтернет магазинах

// потрібно відфільтрувати за ціною (якщо коштує більше 1000 не показувати) та відсортувати  по року пступлення(від більшого до меншого)
// і показувати тільки товари вибраного бренду(targetBrand)



const products = [
    {
        title: "monitor",
        price: 1200,
        id: 1,
        receiptYear: 2021,
        brand: "samsung",
    },
    {
        title: "keyboard",
        price: 700,
        id: 2,
        receiptYear: 2023,
        brand: "apple",
    },
    {
        title: "mouse",
        price: 500,
        id: 3,
        receiptYear: 2020,
        brand: "logitech",
    },
    {
        title: "headphones",
        price: 900,
        id: 4,
        receiptYear: 2022,
        brand: "apple",
    },
];

const targetBrand = "apple";

const filterProducts = products.filter(product => product.price < 1000).filter(product => product.brand === "apple").sort((a, b) => b.receiptYear - a.receiptYear);
console.log(filterProducts);


