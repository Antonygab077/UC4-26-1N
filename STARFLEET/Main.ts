// IMPORTS
import { TransportShip } from "./ships/TransportShip"
import { CombatCapable } from "./interfaces/CombatCapable"
import { Spacecraft } from "./ships/Spacecraft"
import { CargoCarrier } from "./interfaces/CargoCarrier"
import { Exploratory } from "./interfaces/Exploratory"
import { Figther } from "./ships/Fighter"
import { ExplorationShip } from "./ships/ExplorationShip"
import { MultiPurposeShip } from "./ships/MultiPurposeShip"
import { Repairable } from "./interfaces/Repairable"
import { Fleet } from "./fleet/Fleet"


// LOGGER
export const logger = console.log


// FUNCTIONS
function startCombat(ship: CombatCapable, target: Spacecraft): void {
    const damage = ship.attack(target)

    logger(`The attack caused ${damage} damage.`)
}

function transportCargo(ship: CargoCarrier, amount: number): void {
    ship.loadCargo(amount)
}

function performExploration(ship: Exploratory, location: string): void {
    const exploration = ship.explore(location)
    const data = ship.collectData()

    logger(exploration)
    logger(data)
}

function repairObject(object: Repairable): void {
    object.repair()
}


// SPACECRAFTS
const fighter1 = new Figther(
    40,
    "Falcon",
    100,
    100
)

const fighter2 = new Figther(
    45,
    "Eagle",
    100,
    100
)

const transportShip1 = new TransportShip(
    "Atlas",
    100,
    100
)

const transportShip2 = new TransportShip(
    "Cargo-X",
    100,
    100
)

const explorationShip1 = new ExplorationShip(
    "Voyager",
    100,
    100
)

const explorationShip2 = new ExplorationShip(
    "Discovery",
    100,
    100
)

const multiPurposeShip1 = new MultiPurposeShip(
    35,      // weaponPower
    500,     // cargoCapacity
    0,       // currentCargo
    "Titan", // name
    100,     // fuel
    100      // health
)


// INTERFACE ARRAYS
const combatShips: CombatCapable[] = []
const explorationShips: Exploratory[] = []
const cargoShips: CargoCarrier[] = []

combatShips.push(fighter1)
combatShips.push(multiPurposeShip1)

explorationShips.push(explorationShip1)
explorationShips.push(multiPurposeShip1)

cargoShips.push(transportShip1)
cargoShips.push(multiPurposeShip1)


// FLEET
const fleet = new Fleet()

fleet.addShip(fighter1)
fleet.addShip(fighter2)
fleet.addShip(transportShip1)
fleet.addShip(transportShip2)
fleet.addShip(explorationShip1)
fleet.addShip(explorationShip2)
fleet.addShip(multiPurposeShip1)


// ========================
//       PART 19 TESTS
// ========================


// 1 - SHOW ALL SPACECRAFTS
logger(`
========================
       ALL SHIPS
========================
`)

fleet.showFleet()


// 2 - COMBAT
logger(`
========================
        COMBAT
========================
`)

startCombat(fighter1, transportShip1)
startCombat(multiPurposeShip1, fighter1)


// 3 - TRANSPORT CARGO
logger(`
========================
        CARGO
========================
`)

transportCargo(transportShip1, 50)
transportCargo(multiPurposeShip1, 100)


// 4 - EXPLORATION
logger(`
========================
      EXPLORATION
========================
`)

performExploration(explorationShip1, "Mars")
performExploration(multiPurposeShip1, "Jupiter")


// 5 - CAUSE DAMAGE
logger(`
========================
        DAMAGE
========================
`)

fighter1.takeDamage(30)


// 6 - REPAIR
logger(`
========================
        REPAIR
========================
`)

repairObject(fighter1)


// 7 - REFUEL
logger(`
========================
        REFUEL
========================
`)

explorationShip1.refuel()


// 8 - LIST COMBAT SHIPS
logger(`
========================
     COMBAT SHIPS
========================
`)

fleet.getCombatShips().forEach(ship => {
    logger((ship as Spacecraft).getName())
})


// 9 - LIST CARGO SHIPS
logger(`
========================
      CARGO SHIPS
========================
`)

fleet.getCargoShips().forEach(ship => {
    logger((ship as Spacecraft).getName())
})


// 10 - LIST EXPLORATION SHIPS
logger(`
========================
   EXPLORATION SHIPS
========================
`)

fleet.getExplorationShips().forEach(ship => {
    logger((ship as Spacecraft).getName())
})


// ========================
//       QUESTIONS
// ========================

// 1 - Por que não podemos usar new Repairable()?
// Porque interface não cria objetos, só define regras.

// 2 - Por que interface não deve criar objetos?
// Porque ela não possui implementação própria.

// 3 - Diferença entre CombatCapable e Fighter?
// CombatCapable define o que deve existir;
// Fighter implementa e executa isso.

// Qual a vantagem de exigir getId() em vez de id?
// Mantém o atributo privado e permite acesso controlado através do método.

// Por que startCombat(ship: CombatCapable, target: Spacecraft)
// é mais flexível do que startCombat(ship: Fighter, target: Spacecraft)?
// Porque CombatCapable aceita qualquer classe que saiba atacar,
// enquanto Fighter aceitaria apenas objetos da classe Fighter.