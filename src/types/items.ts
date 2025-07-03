export type ItemStatus = "PENDING" | "APPROVED" | "REJECTED"

export interface ItemType {
	id: number
	name: string
	type: string
	status: ItemStatus
	isSelected?: boolean
}
export interface ApproveItemButtonProps {
	item: ItemType
	handleApprove: (itemId: number) => void
}
