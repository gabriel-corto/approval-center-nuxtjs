import { mockItems } from "@/mocks"
import { defineStore } from "pinia"

import {
	approveItemAction,
	approveSelectedsItemsAction,
	selectAllItemsAction,
	selectItemAction,
} from "./actions"
import { itemsGetters } from "./getters"

export const useItemsStore = defineStore("items", {
	state: () => {
		return {
			items: mockItems,
		}
	},
	actions: {
		approveItem(itemId: number) {
			approveItemAction(this, itemId)
		},
		approveSelectedsItems() {
			approveSelectedsItemsAction(this)
		},
		selectAllItems() {
			selectAllItemsAction(this)
		},
		selectItem(itemId: number) {
			selectItemAction(this, itemId)
		},
	},
	getters: itemsGetters,
})
