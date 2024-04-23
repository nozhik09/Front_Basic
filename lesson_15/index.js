// 1. метод slice()

// не мутирующий , возвращает новый массив эллементов 
// принимает 2 параметра 

// 1. индекс элемента с которого отрезаеют 
// 2. индекс до которого отрезаеют 


const names = ['Frodo' , 'Sam' , 'Pipin' , 'Merry' , 'Boromir', 'Faramir']

const namesSliced = names.slice(0,3)

const merryPipin = names.slice(2,4)

console.log(merryPipin)

const boromirFarmir = names.slice(4,6)

console.log(boromirFarmir)



//* метод splice() -- (для массивов )

// мут меьтод 
// принимает два параметра 
// 1. индекс откуда 
// 2. кол-во вырезанных элементов 

// console.log(names)
// names.splice(2,3)
// console.log(names)



//  names.splice(-2)

//  console.log(names)


 // * sort()
 // сортирует эллемаенты массива 
 // мутирующий метод, но так же возвращает новый массив отсортированный эллементов 

 names.sort()
console.log(names)


const numbers = [1,3,4,6,78,96,87,5,1,1,2,3]

// ! так будет сортировать как строку
// numbers.sort()
// console.log(numbers)


// console.log(names.sort().reverse)


// сортировка с большего до мкеньшего ЧИСЛА
console.log(numbers.sort((a,b)=> a-b))

// сортировка большего до меньшего ЧИСЛА
console.log(numbers.sort((a,b)=> b-a))


//* joins()
//обьединяет эллементы массива в строку
// принимает параметр-разделитель, строковое значение 


console.log(names)


console.log(names.join(' и еще этот '))


//*Split 
//не мут элемент для строк 
// вы передаете разделитель строку аргумента 
// возвращает новый массив 

let heroes = 'Frodo , Sam, Pipin , Merry , Boromir, Faramir'

let sauron = 'Sauron'

const heroesArr = heroes.split(', ')
console.log(heroesArr)

let reverseStr = heroes.split(', ').reverse().join(', ')

console.log(reverseStr)

let reverseSauron = sauron.toLocaleLowerCase().split('').reverse().join('')
console.log(reverseSauron)

//* slice() работает для строк 
const newHeroes = heroes.slice(0 ,-5)

console.log(newHeroes)



