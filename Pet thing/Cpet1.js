import inquirer from "inquirer"

import { initQuestions, gameQuestion } from "./questions.js"
import { Cat, Dog } from "./classes.js"

let myPet
let ui = new inquirer.ui.BottomBar()

const init = async () => {
  let response = await inquirer.prompt(initQuestions)

  if (response.type === "Dog") {
    myPet = new Dog(response.name)
  } else if (response.type === "Cat") {
    myPet = new Cat(response.name)
  } else if (response.type === "") {
    myPet = new (response.name)
    

  ui.log.write(
    `${myPet.name} | Hunger: ${myPet.hunger} | Thirst: ${myPet.thirst} | Energy: ${myPet.energy} | Hygiene: ${myPet.hygiene}`
  )

  gameLoop()
}
}

const gameLoop = async () => {
  try {
    myPet.time()
    let response = await inquirer.prompt(gameQuestion)

    if (response.action === "drink") {
      myPet.drink()
    } else if (response.action === "feed") {
      myPet.feed()
    } else if (response.action === "sleep") {
      myPet.sleep()
    } else if (response.action === "clean") {
      myPet.clean()
    }

    ui.log.write(
      `${myPet.name} | Hunger: ${myPet.hunger} | Thirst: ${myPet.thirst} | Energy: ${myPet.energy} | Hygiene: ${myPet.hygiene}`
    )

    gameLoop()
  } catch (error) {
    console.log(error)
  }
}

init()