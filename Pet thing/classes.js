class pet {
    constructor(name) {
      this.name = name
      this.hunger = 100
      this.thirst = 100
      this.happiness = 100
      this.energy = 100
      this.toilet = 100
      this.hygiene = 100
    }
  
    sleep() {
      this.energy -= 500
    }
  
    drink() {
      this.thirst -= 15
    }
  
    feed() {
      this.hunger -= 25
    }
  
    clean() {
      this.hygiene -= 25
    }
  
    time() {
      this.thirst += 5
      this.hunger += 5
      this.energy += 5
      this.hygiene += 5
    }
  }
  
  export class Dog extends pet {
    constructor(name) {
      super(name)
      this.DogPlay = 0
      }
  }
  
  export class Cat extends pet {
    constructor(name) {
      super(name)
      this.CatChill = 0
    }
  }

  
  // export const add = (num1, num2) => {
  
  // }