export type ItemStatus = "PENDING" | "APPROVED" | "REJECTED"

export interface ProcessItem {
	id: number
	name: string
	type: string
	status: ItemStatus
}

export interface ProccessItemType {
	id: number
	name: string
	type: string
	status: ItemStatus
}
