let input;

let total = 0;



do {
    input = prompt('Введите число');

    isNaN(input) 
    ?  alert('Было введено не число, попробуйте еще раз')
    :  total += Number(input);

} 

while (input !== null);

alert(`Общая сумма чисел равна ${total}`);