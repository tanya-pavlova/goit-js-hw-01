 
const answer = prompt('Введите пароль') || 'Отменено пользователем';

console.log(answer);

const ADMIN_PASSWORD ='jquertyismyjam';

let message = answer === ADMIN_PASSWORD 
    ? 'Добро пожаловать!'
    : 'Доступ запрещен, неверный пароль!';

alert(message);