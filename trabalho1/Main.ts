//IMPORTS
import { Character } from "./Character"


//EXPORTS
export  const ask = require(`readline-sync`)
export const logger = console.log

//Instantiating characters
const character1 = new Character(`Washington`, 20, 100)

//Methods
character1.showInfo()
logger(character1.takeDamage(120))