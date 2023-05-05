//Мінімум//

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

let number = prompt('Enter the number from 0 to 9');
let symbol;
switch (number) {
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

let start = parseInt(prompt("Введіть початкове число: "));
let end = parseInt(prompt("Введіть кінцеве число: "));
let sum = 0;
for (let i = start; i <= end; i++) {
  sum += i;
}
alert(`Сума чисел в діапазоні від ${start} до ${end} дорівнює ${sum}.`);


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

