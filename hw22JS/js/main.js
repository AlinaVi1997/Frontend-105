//Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії)
let carInfo = {
  producer: 'Ford',
  model: 'Focus',
  "production year": 2023,
  "average speed": 80, //km/h
  "fuel tank volume": 30, //liters
  averageFuelConsumption: 10, //l/100km
  drivers: {
    driver1: 'Trump',
    driver2: 'Biden',
    driver3: 'Obama',
  },
  // інфо машини
  showInfo() {
    console.log(`Car ${this.producer}, model ${this.model}, ${this['production year']} year. Average speed: ${this["average speed"]} km/h. Fuel tank volume: ${this["fuel tank volume"]} liters. Average fuel consumption: ${this.averageFuelConsumption} liters/100km`);
  }
}
  carInfo.showInfo();
//Додавання ім’я водія у список
carInfo.drivers.driver4='Clinton';
console.log(carInfo.drivers);
//Перевірка водія на наявність його ім’я у списку
console.log(carInfo?.drivers?.driver4);
console.log(carInfo?.drivers?.driver5);
//Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину
let distance = 500; // km
let travelTime = 0;
let fuelNeeded = 0;
let restTime = 0;
let time = 0;
let speed = carInfo['average speed'];
let fuelConsumption = carInfo.averageFuelConsumption;
while (distance > 0) {
  if (distance >= (4 * speed)) {
    travelTime += 4;
    distance -= (4 * speed);
    restTime += 1;
  } else {
    travelTime += distance / speed;
    distance = 0;
  }
}
fueTotal = (carInfo['fuel tank volume'] * fuelConsumption * travelTime) / 100;
timeTotal = travelTime + restTime;
console.log(`Total travel time is ${timeTotal} hours`);
console.log(`Total consumption of fuel is: ${fueTotal} l`);

//норма 
const day = new Date();
document.querySelector('.time__display').innerHTML = day;
let changedMinutes = 6;
let changedSeconds = 8;
let changedHours = 2;

document.querySelector('.change__seconds').onclick = () => {
    getTimeWithChangedSeconds(); 
}
function getTimeWithChangedSeconds() {
    let t = new Date(Date.now() + (changedSeconds * 1000))
    document.querySelector('.time__display').innerHTML = t;
}
document.querySelector('.change__minutes').onclick = () => {
    getTimeWithChangedMinutes();  
}
function getTimeWithChangedMinutes() {
    let t = new Date(Date.now() + (changedMinutes * 1000) * 60)
    document.querySelector('.time__display').innerHTML = t;
}
document.querySelector('.change__hours').onclick = () => {
    getTimeWithChangedHours();
}
function getTimeWithChangedHours() {
    let t = new Date(Date.now() + (changedHours * 1000) * 3600); 
    document.querySelector('.time__display').innerHTML = t;
}

