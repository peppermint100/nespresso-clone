export enum CupSize {
  ESPRESSO, LUNGO
}

export enum MachineType {
  ORIGINAL, VERTUO
}

export type Item = {
  itemId: number,
  itemName: string,
  price: number,
  itemImage: string,
  itemDetailImage: string,
  description: string
}
export type Capsule = Item & {
  intensity: number,
  cupSize: CupSize,
  profile: string,
  note: string,
  origin: string
}

export type Machine = Item & {
  machineType: MachineType
}

export enum ItemType {
  MACHINE, CAPSULE
}