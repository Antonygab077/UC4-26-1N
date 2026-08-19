//IMPORTS
import { Character } from "./Character"
import { Spell } from "./Spell"
import { Weapon } from "./Weapon"
import { Warrior } from "./Warriors"
import { Mage } from "./Mage"
import { Party } from "./Party"
import { Monster } from "./Monster"


//EXPORTS
export  const ask = require(`readline-sync`)
export const logger = console.log

// TESTS
// //Instantiating characters
// const character1 = new Character(`Washington`, 20, 100)
// const character2 = new Character(`Rapino`, 22, 80)

// //Instantiating weapons
// const weapon1 = new Weapon(`Whinchester22`, 35)
// const weapon2 = new Weapon(`Taco de baisebol`, 30)

// //Instantiating spells
// const spell1 = new Spell(`Avara Quebrada`, 40, 25)
// const spell2 = new Spell(`Torta na cara`, 35, 20)

// //Instantiating warriors
// const warrior1 = new Warrior(`Washington`, 20, 100, 40, weapon1)
// const warrior2 = new Warrior(`Claudio Vasconcelos`, 18, 100, 50, weapon2)

// //Instantiating mages
// const mage1 = new Mage(`Rapino`, 22, 80, 100, spell1)
// const mage2 = new Mage(`Bibi pirigosa`, 28, 80, 100, spell2)

// //Instantiating party
// const party1 = new Party(`Quebradinhas`, [])

// //Character methods
// character1.showInfo()
// character1.takeDamage(20)

// //Weapon methods
// weapon1.showInfo()

// //Spell methods
// spell1.showInfo()

// //Warrior methods
// warrior1.attack()
// warrior1.showInfo()

// //Mage methods
// mage1.castSpell()
// mage1.showInfo()

// //Party methods
// party1.addParty(warrior1)
// party1.addParty(warrior2)
// party1.addParty(mage1)
// party1.addParty(mage2)
// //party1.removeParty(mage1)
// party1.showMember()

//DEMONSTRATION

//Create the weapons.
const weapon1 = new Weapon(`Whinchester22`, 35)
const weapon2 = new Weapon(`Taco de baisebol`, 30)

//Create the spells.
const spell1 = new Spell(`Avara Quebrada`, 40, 25)
const spell2 = new Spell(`Torta na cara`, 35, 20)

//Create the characters.
const warrior1 = new Warrior(`Washington`, 20, 100, 40, weapon1)
const warrior2 = new Warrior(`Claudio Vasconcelos`, 18, 100, 50, weapon2)

const mage1 = new Mage(`Rapino`, 22, 80, 100, spell1)
const mage2 = new Mage(`Bibi pirigosa`, 28, 80, 100, spell2)

//Create a Party.
const party1 = new Party(`Quebradinhas`, [])

//Create a monster.
const monster1 = new Monster(`Aragorn`, 20, 130, 20)

console.clear()
//Add the characters to the Party.
party1.addParty(warrior1)
party1.addParty(warrior2)
party1.addParty(mage1)
party1.addParty(mage2)
ask.question(`Press ENTER to continue...`)
console.clear()

//Display the Party members.
party1.showMember()
ask.question(`Press ENTER to continue...`)
console.clear()

//Display the characters' information.
warrior1.showInfo()
warrior2.showInfo()

mage1.showInfo()
mage2.showInfo()
ask.question(`Press ENTER to continue...`)
console.clear()

//Make the Warriors attack.
warrior1.attack()
warrior2.attack()

//Make the Mages cast their spells.
mage1.castSpell()
mage2.castSpell()
ask.question(`Press ENTER to continue...`)
console.clear()

//Demonstrate mana consumption.
//Mana consumption is handled inside castSpell.

//Deal damage to at least one character.
warrior2.takeDamage(30)
ask.question(`Press ENTER to continue...`)
console.clear()

//Change an attribute using a setter.
warrior1.setName(`Julio Pistolada`)

//Remove a character from the Party.
party1.removeParty(mage1)

//Display the Party again after the removal.
party1.showMember()
ask.question(`Press ENTER to continue...`)
console.clear()

//Display the monster's information.
logger(`A MONSTER APPEARED!!`)
monster1.showInfo()

//Monster attacking.
monster1.attack(warrior1)
ask.question(`Press ENTER to continue...`)
console.clear()

// ---------------------------------------------------------------------------------

//NOTES
//AI was not used to write the code, only to explain what some things are used for.
//Where AI was used:
//1 - To remember Math.random and Math.floor = Line 64 of the Monster.ts file
//2 - To learn about Math.min = Line 47 of the Mage.ts file
