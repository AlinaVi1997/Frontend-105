//Мінімум//

// 1юЗапитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

const years = prompt('How old are you?');
// 0-11 child
// 12-17 teenager  
// 18-59 adult
// 60 ... & seniore

if (years >= 0 && years <= 11) {
    alert('you are child');
} else if (years >= 12 && years <= 17) {
    alert('you are teenager');
} else if (years >= 18 && years <= 59) {
    alert('you are adult');
} else if (years >= 60 && years <= 150) {
    alert('you are seniore');
}  else {
    alert('valiue is not correct');
}
// 2.Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
let numer = prompt('Enter the number from 0 to 9');
let symbol;
switch (numer) {
    case "0":
        symbol = ")";
        break;   
    case "1":
        symbol = "!";
        break;   
    case "2":
        symbol = "#";
        break;   
    case "3":
        symbol = "$";
        break;   
    case "4":
        symbol = "%";
        break;   
    case "5":
        symbol = "^";
        break;   
    case "6":
        symbol = "&";
        break;   
    case "7":
        symbol = "*";
        break;   
    case "8":
        symbol = "(";
        break;   
    case "9":
        symbol = ")";
        break;
    default:
        symbol =('You have enteret an incorrect number')
}
alert('symbol is ' + symbol);

// 3.Підрахуй суму всіх чисел в заданому користувачем діапазоні.
let start = parseInt(prompt("Введіть початкове число: "));
let end = parseInt(prompt("Введіть кінцеве число: "));
let sum = 0;
for (let i = start; i <= end; i++) {
  sum += i;
}
alert(`Сума чисел в діапазоні від ${start} до ${end} дорівнює ${sum}.`);

// 4.Запитай у користувача 2 числа і знайди найбільший спільний дільник.
let number1 = parseInt(prompt("Введіть перше число: "));
let number2 = parseInt(prompt("Введіть друге число: "));
let greatestCommonDivisor = 1;
let i = 1;
while (i <= number1 && i <= number2) {
    if (number1 % i === 0 && number2 % i === 0) {
        greatestCommonDivisor = i;
    }
    i++;
}
alert(`Найбільший спільний дільник чисел ${number1} і ${number2} дорівнює ${greatestCommonDivisor}.`);

// 5.Запитай у користувача число і виведи всі дільники цього числа.
let num = parseInt(prompt('Enter the number'));
let divisor = "";
let b = 1;
while (b <= num){
    if (num % b === 0) {
        divisor += b + "\n";
    }
    b++;
}
alert(`Найбільший спільний дільник числа ${num} дорівнює ${divisor}`);

//Норма//

// 1.Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
let number = prompt('enter the number');
let numberString = number.toString();
let numberStringReverse = numberString.split('').reverse().join('');
if (numberString === numberStringReverse) {
    alert('чісло є паліндромом');
}
else {
 alert('Число не є паліндромом');
}

// 2.Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// від 500 і вище - 7%.
let buy = prompt('enter the sum');
 let discountedBuy;
if (buy >= 200 && buy < 300) {
   discountedBuy = buy - (buy / 100 * 3);
}
if (buy >= 300 && buy < 500) {
   discountedBuy = buy - (buy / 100 * 5);
}
if (buy >= 500) {
    discountedBuy = buy - (buy / 100 * 7);
}
alert("sum " + discountedBuy  + " grn" );

// 4.Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.
let currentDay = 1; 
while (true) {
  let dayName;
  switch (currentDay) {
    case 1:
      dayName = "Понеділок";
      break;
    case 2:
      dayName = "Вівторок";
      break;
    case 3:
      dayName = "Середа";
      break;
    case 4:
      dayName = "Четвер";
      break;
    case 5:
      dayName = "П'ятниця";
      break;
    case 6:
      dayName = "Субота";
      break;
    case 7:
      dayName = "Неділя";
      break;
  }
  if (!confirm(`${dayName}. Хочеш побачити наступний день?`)) {
    break;
  }
  currentDay = currentDay % 7 + 1;
};








