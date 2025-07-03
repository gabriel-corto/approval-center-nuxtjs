import type { ItemStatus } from "../types/items"

export function useStatusColor() {
	function getStatusColor(status: ItemStatus) {
		switch (status) {
			case "PENDING":
				return { text: "Pendente", color: "bg-neutral-100 text-neutral-800" }
			case "APPROVED":
				return { text: "Aprovado", color: "bg-green-100 text-green-800" }
			case "REJECTED":
				return { text: "Rejeitado", color: "bg-red-100 text-red-800" }
			default:
				return { text: status, color: "bg-gray-100 text-gray-800" }
		}
	}

	return { getStatusColor }
}
