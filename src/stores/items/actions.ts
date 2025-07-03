export function approveItemAction(store: any, itemId: number) {
	const item = store.items.find((item: any) => item.id === itemId)
	if (item) {
		item.status = "APPROVED"
		item.isSelected = false
	}
}

export function approveSelectedsItemsAction(store: any) {
	store.items = store.items.map((item: any) => {
		if (item.isSelected && item.status === "PENDING") {
			item.status = "APPROVED"
			item.isSelected = false
		}
		return item
	})
}

export function selectAllItemsAction(store: any) {
	store.items = store.items.map((item: any) => {
		if (item.status === "PENDING") {
			item.isSelected = true
		}
		return item
	})
}

export function selectItemAction(store: any, itemId: number) {
	const item = store.items.find((item: any) => item.id === itemId)
	if (item && item.status === "APPROVED") return

	if (item) {
		item.isSelected = !item.isSelected
	}
}
