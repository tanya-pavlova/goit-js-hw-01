const total = 100;
const ordered = 50;
const answer = prompt('Введите колличество товаров для заказа');

// if (answer <= total - ordered) {
//     alert('Заказ оформлен, с вами свяжется менеджер');
// } else {
//     alert('На складе недостаточно товаров');
// }

const message = answer <= (total - ordered)
    ? 'Заказ оформлен, с вами свяжется менеджер'
    : 'На складе недостаточно товаров';

alert(message);