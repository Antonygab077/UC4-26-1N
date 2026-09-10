export interface Repairable {
    repair(): void
    getRepairCost(): number
}