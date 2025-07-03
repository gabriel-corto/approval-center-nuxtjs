import type { ItemType } from "@/types/items"
import { defineStore } from "pinia"

export const useItemsStore = defineStore("items", {
	state: () => {
		return {
			items: [
				{ id: 1, name: "Empresa A", type: "Startup", status: "PENDING" },
				{ id: 2, name: "Empresa B", type: "ONG", status: "PENDING" },
				{ id: 3, name: "Empresa C", type: "Privada", status: "APPROVED" },
			] as ItemType[],
		}
	},
	actions: {
		approveItem(itemId: number) {
			const item = this.items.find((item) => item.id === itemId)

			if (item) {
				item.status = "APPROVED"
			}
		},
		approveSelectedsItems(itemsIdToApprove: number[]) {
			console.log("Items to approve:", itemsIdToApprove)
			this.items = this.items.map((item) => {
				if (itemsIdToApprove.includes(item.id) && item.status === "PENDING") {
					item.status = "APPROVED"
				}
				return item
			})
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
	},
})
