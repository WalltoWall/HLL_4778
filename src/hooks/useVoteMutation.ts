import * as React from "react"

import type { VoteHandlerResponseData, VoteRequestBody } from "../api/vote"

interface VoteMutationState {
	isLoading: boolean
	isError: boolean
	errors?: VoteHandlerResponseData["errors"]
	data?: VoteHandlerResponseData
}

export function useVoteMutation() {
	const [state, setState] = React.useState<VoteMutationState>({
		isError: false,
		isLoading: false,
	})

	async function voteMutation(body: VoteRequestBody): Promise<boolean> {
		setState((prev) => ({ ...prev, isLoading: true }))

		const res = await fetch("/api/vote", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		})
		const data = (await res.json()) as VoteHandlerResponseData

		if (res.status >= 300 || res.status <= 199) {
			setState({ isError: true, isLoading: false, errors: data.errors })

			return false
		}

		setState({ isLoading: false, isError: false, data })

		return true
	}

	return { voteMutation, ...state }
}
