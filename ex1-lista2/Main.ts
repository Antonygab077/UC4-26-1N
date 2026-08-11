import { Spell } from "./Spell"
import { Wizard } from "./Wizard"
import { House } from "./House"

// HOUSES
const gryffindor = new House(`Gryffindor`, `Godric Gryffindor`)
const slytherin = new House(`Slytherin`, `Salazar Slytherin`)

// SPELLS
const avadaKedavra = new Spell(`Avada Kedavra`, 80, 35)
const alohomora = new Spell(`Alohomora`, 50, 20)
const expelliarmus = new Spell(`Expelliarmus`, 70, 25)

// WIZARDS
const wizard1 = new Wizard(`Antony`, gryffindor)
const wizard2 = new Wizard(`Hermione`, gryffindor)
const wizard3 = new Wizard(`Draco`, slytherin)

// aprendendo magias diferentes
wizard1.learnMagic(alohomora)
wizard1.learnMagic(avadaKedavra)
wizard1.learnMagic(alohomora) // tentativa de aprender de novo -> deve ser bloqueada

wizard2.learnMagic(expelliarmus)
wizard3.learnMagic(avadaKedavra)

// usando magias
wizard1.useMagic(`Alohomora`)
wizard2.useMagic(`Expelliarmus`)
wizard3.useMagic(`Avada Kedavra`)
wizard1.useMagic(`Expelliarmus`) // Antony nao conhece essa -> deve falhar

// recuperando mana
wizard1.restoreMana(20)

// alterando pontuacao das casas
gryffindor.addPoints(50)
slytherin.removePoints(20)

// estado final
console.log(`\n--- Final state ---`)
console.log(wizard1.showInformation())
console.log(wizard2.showInformation())
console.log(wizard3.showInformation())
console.log(gryffindor.showInformation())
console.log(slytherin.showInformation())