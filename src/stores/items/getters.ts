import type { ItemType } from "@/types/items"

export const itemsGetters = {
	totalIItems: (state: { items: ItemType[] }) => state.items.length,

	totalApprovedItems: (state: { items: ItemType[] }) =>
		state.items.filter((item) => item.status === "APPROVED").length,

	selectedItems: (state: { items: ItemType[] }) =>
		state.items.filter((item) => item.isSelected),
}
