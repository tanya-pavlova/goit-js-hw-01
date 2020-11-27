
const credits = 23580;
 
const pricePerDroid = 3000;

const answer = prompt('Введите колличество ремонтных дроидов для покупки') || 'Отменено пользователем';

console.log(answer);

let totalPrice = (answer * pricePerDroid);

let message = `Вы купили ${answer} дроидов, на счету осталось ${credits - totalPrice} кредитов`;

if (totalPrice > credits) {
        alert('Недостаточно средств на счету!');
    } else {
         alert(message);
    }