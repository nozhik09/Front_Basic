




function calculateTotalAge(people) {
    let total = 0
    // for ... of это спопоб итерации по массивам/ строкам, без специфичкеского выхогда из цикла
    for (let person of people) {
        const { age } = person
        total +=age
    }
    return total

}

const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];
console.log(calculateTotalAge(people));



//Задание 3
// Напишите функцию findKeyByValue, которая принимает объект и значение в качестве аргументов и возвращает первый ключ, соответствующий переданному значению. Если значение не найдено, верните null.

const magician = { name: 'Gendalf' , age: 1000, hasMagic: true}

function findKeyByValue(obj, value) {
for(const key in obj){
if(obj[key] === value){
    return key
}

}
return null

}
console.log(findKeyByValue(magician, true))


// Задание 4
// У вас есть объект productInfo с информацией о продукте, включая его наименование, цену и наличие на складе. Напишите функцию printProductDetails, которая принимает этот объект в качестве аргумента и выводит в консоль сообщение вида: "<товар> - <цена>, товар на складе: <да/нет>", где "да" или "нет" зависит от наличия товара на складе.

const printProductDetails = (productInfo)=>{
const {name: produckName , price, 'in stock' : inStock} = productInfo
let available

if(inStock===true){
available='Yes'
}
else{
    available='No'
}
}

console.log(`${produckName} - $${price} , товар на складе:${inStock}`)

const productInfo = {

    name: 'Smartphone',
    price: 699,
    'in stock' : true
}

printProductDetails(productInfo);('Smartphone - $699' , 'товар на складе:Да')





