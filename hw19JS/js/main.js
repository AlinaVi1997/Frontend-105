
// 1.Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;
let name = prompt("Будь ласка введіть ваше імя");
alert("Hello," + name);

// 2.Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;
let answer = prompt('Enter your year of birth');
const year = ('2023');
let result = year - answer;
alert(result.toFixed(0) + 'year'); 

// 3.Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата;
let side = prompt("Enter the lenght of the side of the square");
let P = side * 4;
alert("Perimeter of the square is  " + P);

//Максимум//

// 1.Запитай у користувача радіус кола і виведи площу такої окружності.
const radius = prompt('Enter a number');

const circleLength = 2 * Math.PI * radius;
console.log(Math.round(circleLength));

const circleArea = Math.PI * Math.pow(radius, 2);
console.log(Math.round(circleArea));

// 3.Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.
window.onload = function () {
    let c = {'USD':'1.12', 'EUR':'0.89',}; // Устанавливаем курс валют

    let val = document.getElementById('val'); // Получаем элемент ввода данных
    let currency1 = document.getElementById('cur1'); // Получаем первый селект
    let currency2 = document.getElementById('cur2'); // Получаем второй селект
    let result = document.getElementsByClassName('convert_result')[0]; // Получаем поле куда будем писать результат
    function summ() { // Делаем функцию
        let z = 0;
         if(currency1.value === currency2.value){ // Если оба значения в селектах равны
            result.innerText = val.value; // То просто вписываем данные из поля ввода
        }   else { // Если не равны
                result.innerHTML = Math.ceil((val.value*c[currency2.value])*100)/100; // Умножаем на курс и округляем до сотых
        }
    }
    val.oninput = function () { // При вводе данных в поле вызываем функцию.
        summ();
    };
    currency1.onchange = function () { // При смене первого селекта вызываем функцию.
        summ();
    };
    currency2.onchange = function () { // При смене второго селекта вызываем функцию.
        summ();
    }
}




