export type ItemStatus = "PENDING" | "APPROVED" | "REJECTED"

export interface Items {
	id: number
	name: string
	type: string
	status: ItemStatus
}

export interface ItemType {
	id: number
	name: string
	type: string
	status: ItemStatus
}
export interface ApproveItemButtonProps {
	item: ItemType
	handleApprove: (itemId: number) => void
}
