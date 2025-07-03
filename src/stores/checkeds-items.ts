import { defineStore } from "pinia"

export const useCheckedItemsStore = defineStore("checkedItems", {
	state: () => ({
		selectedItems: [] as number[],
	}),
	actions: {
		selectItem(itemId: number) {
			if (this.selectedItems.includes(itemId)) {
				this.selectedItems.splice(this.selectedItems.indexOf(itemId), 1)
			} else {
				this.selectedItems.push(itemId)
			}
		},
	},
})
