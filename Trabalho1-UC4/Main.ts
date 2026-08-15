//IMPORTS
import { Character } from "./Character"
import { Spell } from "./Spell"
import { Weapon } from "./Weapon"
import { Warrior } from "./Warriors"


//EXPORTS
export  const ask = require(`readline-sync`)
export const logger = console.log

//Instantiating characters
const character1 = new Character(`Washington`, 20, 100)

//Instantiating weapons
const weapon1 = new Weapon(`Whinchester22`, 35)

//Instantiating spells
const spell1 = new Spell(`Avara Quebrada`, 40, 20)

//Instantiating warriors
const warrior1 = new Warrior(`Washington`, 20, 100, 40, weapon1)

//Methods characters
character1.showInfo()
character1.takeDamage(20)

//Methods weapons
weapon1.showInfo()

//Methods spells
spell1.showInfo()

//Method warriors
warrior1.attack()
warrior1.showInfo()

