const total = 100;
const ordered = 50;
const answer = prompt('Введите колличество товаров для заказа')  ;


const message = answer <= (total - ordered)
    ? 'Заказ оформлен, с вами свяжется менеджер'
    : 'На складе недостаточно товаров';

alert(message);