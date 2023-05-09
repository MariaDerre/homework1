function month(){
    const month=Number(prompt('Введите номер месяца'));
if (month===12 || month>=1 && month<=2) {
    alert('Зима');
} else if (month>=3 && month<=5) {
    alert('Весна');
} else if (month>=6 && month<=8) {
    alert('Лето');
} else if (month>=9 && month<=11) {
    alert('Осень');
} else {
    alert('Вы ввели неверное значение');
}   
}

//Rem_word

function fruit(){
let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
arr = arr.sort(() => Math.random() - 0.5);
alert(arr);
let answerOne = prompt('Чему равнялся первый элемент массива?');
let answerTwo = prompt('Чему равнялся последний элемент массива?');
    if (answerOne===arr[0] && answerTwo===arr[arr.length - 1]) {
        alert('Молодец');
    } else if (answerOne===arr[0] || answerTwo===arr[6]) {
        alert('Вы были близки к победе!');
    } else {
        alert('Оба ответа неверные');
    }
}