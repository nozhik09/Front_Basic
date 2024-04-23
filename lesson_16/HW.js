const heroes = [
    { hero: 'Iron Man', name: 'Tony Stark', age: 50, isAvenger: true },
    { hero: 'Captain America', name: 'Steve Rogers', age: 110, isAvenger: true },
    { hero: 'Thor', name: 'Thor Odinson', age: 1500, isAvenger: true }
];

const villains = [
    { hero: 'Thanos', name: 'Thanos', age: 1000, isAvenger: false },
    { hero: 'Loki', name: 'Loki Laufeyson', age: 1052, isAvenger: false }
];


const einheim = [...heroes, ...villains].sort((a, b) => a.age - b.age);
console.log(einheim);



const changeName = heroes.find(name => name.hero === 'Captain America');
if (changeName) {
    changeName.hero = 'The First Avenger';
    changeName.age += 10;
}
console.log(heroes)


// Создайте функцию getHeroAges(heroes), которая принимает массив героев
// Функция должна выполнить следующие действия:
// Отфильтровать героев, чьи имена начинаются с буквы "T". Отсортировать отфильтрованных героев по возрастанию их возраста. Получить массив возрастов отсортированных героев. Вывести полученный массив возрастов в обратном порядке.

const getAllHeroes = (heroes) => {
    const filterHeroes = heroes
        .filter(hero => hero.name.startsWith('T')).sort((a, b) => a.age - b.age)
        .map(hero => hero.age)

}
console.log(getAllHeroes)