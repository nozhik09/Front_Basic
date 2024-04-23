const brothers = [
    { name: 'Legolas', height: 190, race: 'elf', age: 500, hasMagic: true },
    { name: 'Aragorn', height: 180, race: 'human', age: 50, hasMagic: false },
    { name: 'Gimli', height: 50, race: 'dwarf', age: 200, hasMagic: false },
    { name: 'Gendalf', height: 200, race: 'mayar', age: 2000, hasMagic: true },
    { name: 'Frodo', height: 60, race: 'hobbit', age: 30, hasMagic: false }
]

// *includes()

const names = brothers.map(el => el.name)


console.log(names.includes('Gimli' && 'Legolas'))

//* findIndex()
// не мут 
// принимает стрелечную функцию 
// возвращает первый индекс эллемента , который удовлетворяет условие 
console.log(names.findIndex(el => el === 'Gimli'))
console.log(names.findIndex(el => el === 'Gendalf'))


// напишите функцию, которая принимает массив элементов и элемент, который нужно удалить из массива
// функция должна вернуть массив без удаленного элемента
// подумайте про то, чтобы если такого элемента в массиве нет - функция работала корректно


function removeEl(array, el) {
    const numb = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== el) {
            numb.push(array[i])
        }
       if (!numb.includes(el)) {
            console.log('no such element in array')
          }
    }

    return numb
}

const array = [1,2,5,3,42,853,13,58,13]

const filter = removeEl(array,853)

console.log(filter)



function removeEllements(array, el) {

    const index = array.findIndex(name=>name ===el)
    array.splice(index , 1)
   
    return array
}
console.log(removeEllements(names,'Legolas'))