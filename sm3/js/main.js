// let a = 7;

// if (a >= 8) {
//     alert('Да');
// } else if (a == 9) {
//     alert('Да 2');
// } else if (a == 4) {
//     alert('Да 3');
// } else if (a == 7) {
//     alert('Да 4');
// } else {
//     alert('Да 5');
// }

let priceProduct = parseFloat(prompt('Cтоимость товара'));
let clientMoney = parseFloat(prompt('Кол-во ваших денег'));

if (priceProduct == clientMoney) {
    alert('Покупка совершена!!');
} else if (priceProduct > clientMoney) {
    alert('Для покупки не хватает ' + `${priceProduct - clientMoney}` + ' рублей');
} else if (priceProduct < clientMoney) {
    alert('Покупка совершена. Сдача ' + `${clientMoney - priceProduct}` + ' рублей');
}