export interface CargoCarrier {
    loadCargo(amount: number): void;
    unloadCargo(amount: number): void;
    getCargoCapacity(): number;
    getCurrentCargo(): number;
}