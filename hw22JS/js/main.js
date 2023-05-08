let carInfo = {
    producer: 'Ford',
    model: 'Focus',
    "production year": 2023,
    "average speed": 80,
    "fuel tank volume": 30,
    averageFuelConsumption: 10,
    drivers: {
        driver1: "Trump",
        driver2: "Biden",
        driver3: "Obama",
    }
}
//Додавання водія
carInfo.drivers.driver4 = 'Clinton';
console.log(carInfo.drivers);
//Наявність водія
console.log(carInfo?.drivers?.driver4);
console.log(carInfo?.drivers?.driver5);



