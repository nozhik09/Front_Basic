// ? Наследование
// прототипы 

const bicycle = {
    brand: 'Bergamot',
    price: 2000,
    drive() {

        console.log('Drive bicycle ...');
    }
}

const moutainBike = {
    __proto__: bicycle,
    price: 300,
    speeds: 7
}


console.log(bicycle.price)
bicycle.drive()

moutainBike.drive()

console.log(moutainBike.__proto__)

/// создайте объект vehicle с полями:

// - speed значение 40
// - capacity значение 4
// - и методом go() который выводит в консоль "Br-br-br-br!"

// создайте на основе:

// jeep() - со вместимостью 5, скорость 60
// numberOfDoors() - 2

// вызовите метод go() у jeep

const vehicle = {
    speed: 40,
    capacity: 4,
    go() {
        console.log('Br-br-br-br')
    },

    stop() {
        this.speed = 0
    },
    accelerate() {
        this.speed += 5
    }

}

const jeep = {
    proto: vehicle,
    capacity: 5,
    speed: 60,
    numberOfDoors: 2
}
jeep.accelerate()



class Alcohol {
    constructor(title, strength, volume) {
      this.title = title
      this.strength = strength
      this.volume = volume
    }
    drink() {
      console.log(`Приятно выпить ${this.title}`)
    }
    reduce() {
      this.volume -= 0.1
    }
  }
  
  class Cognac extends Alcohol {
    constructor(age, country, title, strength, volume) {
      super(title, strength, volume)
      this.age = age
      this.country = country
    }
  }
  
  class Martini extends Alcohol {
    constructor(sugarAmount, title, strength, volume) {
      super(title, strength, volume)
      this.sugarAmount = sugarAmount
    }
  }
  
  const ararat = new Cognac(8, 'Armenia', 'Ararat', 40, 0.7)
  const bianco = new Martini(5, 'Bianco', 15, 0.7)
  
  ararat.drink()
  
  bianco.reduce()
  
  console.log(bianco.volume)
