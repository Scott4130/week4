// Let’s create a class for cars with manufacturer, model and colour constructors and create 3 instances of it. The car should have functions for accelerate, brake, turning and beeping!


class Car {
    constructor(make, model, manu) {
        this.make = make
        this.model = model
        this.manu = manu
    }

    accelerating() {
        console.log("speeding up")
    }
    turning (direction){
        if (direction === "left") {
            console.log("turning left")
        } else {
            console.log("turning right")
        }
    }
}

let polo = new Car ("black", "polo", "vw")

polo.accelerating()

// cpet
// HTML to be updated
    // function updatePetInfoInHtml() {
    //     $('.name').text(pet_info.name);
    //     $('.weight').text(pet_info.weight);
    //     $('.happiness').text(pet_info.happiness);
    //   }