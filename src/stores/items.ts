import { mockItems } from "@/mocks"
import type { ItemType } from "@/types/items"
import { defineStore } from "pinia"

export const useItemsStore = defineStore("items", {
	state: () => {
		return {
			items: mockItems,
		}
	},
	actions: {
		approveItem(itemId: number) {
			const item = this.items.find((item) => item.id === itemId)

			if (item) {
				item.status = "APPROVED"
			}
		},
		approveSelectedsItems() {
			this.items = this.items.map((item) => {
				if (item.isSelected && item.status === "PENDING") {
					item.status = "APPROVED"
					item.isSelected = false
				}
				return item
			})
		},
		selectAllItems() {
			this.items = this.items.map((item) => {
				if (item.status === "PENDING") {
					item.isSelected = true
				}

				return item
			})
		},
		selectItem(itemId: number) {
			const item = this.items.find((item) => item.id === itemId)
			if (item && item.status === "APPROVED") {
				return
			}

			if (item) {
				item.isSelected = !item.isSelected
			}
		},
	},
	getters: {
		totalIItems: (state) => state.items.length,
		totalApprovedItems: (state) => {
			const approvedItems = state.items.filter(
				(item) => item.status === "APPROVED"
			)

			return approvedItems.length
		},
		selectedItems: (state) => {
			return state.items.filter((item) => item.isSelected)
		},
	},
})
