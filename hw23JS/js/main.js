//Створи функцію, яка буде виводити кількість переданих їй аргументів.

function test(){
   alert(arguments.length);
}
test(12, 8, 45,5555,1);

//Напиши функцію, яка приймає 2 числа і повертає :

function compareNumbers (numOne, numTwo) {
  if (numOne < numTwo) {
    return -1;
  } else if (numOne > numTwo) {
    return 1;
  } else {
    return 0;
  }
}
console.log(compareNumbers(2,3));
console.log(compareNumbers(3,2));
console.log(compareNumbers(2,2));

//Напиши функцію, яка обчислює факторіал переданого їй числа.

function factorial(n){
if (n==1) return 1;
else return n*factorial(n-1);		
}
let  userNum=+prompt('Введите число для вычисления факториала');
alert(factorial(userNum));

//Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

function getCombine (numOne, numTwo, numThree) {
  return Number(`${numOne}${numTwo}${numThree}`);
}
alert(getCombine(1, 2, 3));

//Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

function calcArea (side1, side2) {
  if(side2 === undefined){
    return side1 * side1;
  } else {
    return side1 * side2
  }
}
console.log(calcArea(5, 10));
console.log(calcArea(4));
