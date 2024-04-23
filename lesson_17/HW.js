<<<<<<< HEAD
class Plant {
    constructor(age, height) {
        this.age = age
        this.height = height
    }

    grow(){
        this.height+= 10  
    }



}
class Rose extends Plant {
constructor(age, height,numberOfFlowers){
    super(age, height)
    this.numberOfFlowers=numberOfFlowers
}
}

const rose  = new Rose(1,90,1)

rose.grow()
=======
class Plant {
    constructor(age, height) {
        this.age = age
        this.height = height
    }

    grow(){
        this.height+= 10  
    }



}
class Rose extends Plant {
constructor(age, height,numberOfFlowers){
    super(age, height)
    this.numberOfFlowers=numberOfFlowers
}
}

const rose  = new Rose(1,90,1)

rose.grow()
>>>>>>> abeddd2f92fbdafe75eb4de99329dd9003024421
console.log(rose)