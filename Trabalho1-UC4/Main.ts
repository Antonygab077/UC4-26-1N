//IMPORTS
import { Character } from "./Character"
import { Spell } from "./Spell"
import { Weapon } from "./Weapon"
import { Warrior } from "./Warriors"
import { Mage } from "./Mage"
import { Party } from "./Party"


//EXPORTS
export  const ask = require(`readline-sync`)
export const logger = console.log

//TESTS
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

// //Methods characters
// character1.showInfo()
// character1.takeDamage(20)

// //Methods weapons
// weapon1.showInfo()

// //Methods spells
// spell1.showInfo()

// //Methods warriors
// warrior1.attack()
// warrior1.showInfo()

// //Methods mages
// mage1.castSpell()
// mage1.showInfo()

// //Methods party
// party1.addParty(warrior1)
// party1.addParty(warrior2)
// party1.addParty(mage1)
// party1.addParty(mage2)
// //party1.removeParty(mage1)
// party1.showMember()

//DEMONSTRATION

//Criar as armas.
const weapon1 = new Weapon(`Whinchester22`, 35)
const weapon2 = new Weapon(`Taco de baisebol`, 30)

//Criar as magias.
const spell1 = new Spell(`Avara Quebrada`, 40, 25)
const spell2 = new Spell(`Torta na cara`, 35, 20)

//Criar os personagens.
const warrior1 = new Warrior(`Washington`, 20, 100, 40, weapon1)
const warrior2 = new Warrior(`Claudio Vasconcelos`, 18, 100, 50, weapon2)

const mage1 = new Mage(`Rapino`, 22, 80, 100, spell1)
const mage2 = new Mage(`Bibi pirigosa`, 28, 80, 100, spell2)

//Criar uma Party.
const party1 = new Party(`Quebradinhas`, [])

console.clear()
//Adicionar os personagens à Party.
party1.addParty(warrior1)
party1.addParty(warrior2)
party1.addParty(mage1)
party1.addParty(mage2)
ask.question(`Press ENTER to continue...`)
console.clear()

//Adicionar os personagens à Party.
party1.showMember()
ask.question(`Press ENTER to continue...`)
console.clear()

//Exibir as informações dos personagens.
warrior1.showInfo()
warrior2.showInfo()

mage1.showInfo()
mage2.showInfo()
ask.question(`Press ENTER to continue...`)
console.clear()

//Fazer os Warriors atacarem.
warrior1.attack()
warrior2.attack()

//Fazer os Mages lançarem suas magias.
mage1.castSpell()
mage2.castSpell()
ask.question(`Press ENTER to continue...`)
console.clear()

//Demonstrar o consumo de mana.
//Consumo de mana ta junto no castSpell

//Causar dano a pelo menos um personagem.
warrior2.takeDamage(30)
ask.question(`Press ENTER to continue...`)
console.clear()

//Alterar algum atributo utilizando um setter.
warrior1.setName(`Julio Pistolada`)

//Remover um personagem da Party.
party1.removeParty(mage1)

//Exibir novamente a Party após a remoção.
party1.showMember()
