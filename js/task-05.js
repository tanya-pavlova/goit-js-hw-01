
let deliveryPrice;

const china = 'китай';
const chile = 'чили';
const australia = 'австралия';
const india = 'индия';
const jamaica = 'ямайка';

let country = prompt('В какую страну доставить товар?') || 'Отменено пользователем';

country = country.toLowerCase();

let message;


console.log(country);

switch (country) {
    case china:
        country = 'Китай';
        deliveryPrice = 100;        
        message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
        break;


case chile:
    country = 'Чили';
    deliveryPrice = 250;    
    message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
    break;

case australia:
    country = 'Австралию';
    deliveryPrice = 170;    
    message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
    break;

case india:
    country = 'Индию';
    deliveryPrice = 80;    
    message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
    break;

case jamaica:
    country = 'Ямайку';
    deliveryPrice = 120;    
    message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
    break;

default:
    message = 'В вашей стране доставка не доступна';
}


alert(message);
