let sum = 0.1 + 0.2;
alert(sum.toFixed(1));
let string = '2';
let number = 1;
console.log(string + number); 
console.log(+string + number); 

let flashDrive = prompt('Specify amount of memory of flash drive, GB...');
const fileSize = ('0.801');
let result = flashDrive / fileSize;
alert(result.toFixed(0)+ 'files'); 

let money = prompt("Enter the amount of money:");
let price = prompt("Enter the price of one chocolate bar:");

let numChocolates = Math.floor(money / price);
let moneyLeft = money % price;

alert(`You can buy ${numChocolates} chocolate(s) and you will have ${moneyLeft} money left.`);

let num = prompt('Enter three-digit number');
function getReversedNum(num) {
  let result = 0;
  while (num) {
    result = result * 10 + num % 10;
    num = Math.floor(num / 10);
  }
  return result;
}
alert(getReversedNum(num));