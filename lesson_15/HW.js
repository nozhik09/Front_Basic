const cars = [
    { brand: 'Tesla', model: 'Model S', year: 2022, color: 'red', isElectric: true },
    { brand: 'Toyota', model: 'Camry', year: 2018, color: 'blue', isElectric: false },
    { brand: 'BMW', model: 'X5', year: 2020, color: 'black', isElectric: false },
    { brand: 'Nissan', model: 'Leaf', year: 2021, color: 'green', isElectric: true },
    { brand: 'Ford', model: 'Mustang', year: 2019, color: 'yellow', isElectric: false }
  ];

const electricCars = cars
.filter(car=>car.isElectric)
.map(car=> `${car.model} , ${car.color}`)

console.log(electricCars)


// Задание 2
// Создайте новый массив, содержащий машины, отсортированные по году выпуска в порядке убывания. Объедините модели и бренды каждой машины в одну строку, разделенную дефисом. Переставьте машины в строке в обратном порядке.

// const reversedCars = cars.sort((a,b) => b.year - a.year).map(car=> )







// Задание 3
// Напишите функцию, она будет принимать массив строк, приводить каждую строку к нижнему регистру, сортировать, а затем переворачивать каждое слово в строке задом наперед, и наконец делать первую букву в строке заглавной.

// для того, чтобы сделать первую букву заглавной используйте charAt()

