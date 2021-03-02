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

export type CartItem = {
  amount: number,
  cartItemId: number,
  item: Item
}

export type Order = {
  orderId: number,
  createdAt: string,
  orderItems: Array<OrderItem>
}

export type OrderItem = {
  orderItemId: number,
  amount: number,
  item: Item
}

export type DetailParamsType = {
  itemId: string
}