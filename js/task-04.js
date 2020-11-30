
const credits = 23580;
 
const pricePerDroid = 3000;

let totalPrice;

let message;

const number = prompt('Введите колличество ремонтных дроидов для покупки') ;

console.log(number);

if (number === null) {
     message = 'Отменено пользователем!';
} 
else if (isNaN(number)) {
     message = 'Было введено не число, попробуйте еще раз';
} 
else {
     totalPrice = Number(number) * pricePerDroid;
     

     totalPrice > credits 
      ?  message = ('Недостаточно средств на счету!')
      :  message = (`Вы купили ${number} дроидов, на счету осталось ${credits - totalPrice} кредитов`);

}
 
alert(message);
