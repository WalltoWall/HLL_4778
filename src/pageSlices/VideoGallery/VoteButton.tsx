import * as React from "react"
import clsx from "clsx"

import { UnstyledButton } from "../../components/UnstyledButton"
import { ThumbIcon } from "../../components/ThumbIcon"
import { useUser } from "../../hooks/useUser"
import { useVoteMutation } from "../../hooks/useVoteMutation"

import type { TVideo } from "./VideoGallery"
import { useInterval } from "../../hooks/useInterval"

interface VoteButtonProps {
	video: TVideo
	endDate?: Date
}

const ONE_MINUTE_IN_MS = 1000 * 60

function useCheckIfVotingEnded(
	endDate?: Date,
	checkInerval = ONE_MINUTE_IN_MS
) {
	const [hasVotingEnded, setHasVotingEnded] = React.useState(() => {
		if (!endDate) return true

		return endDate.getTime() <= Date.now()
	})

	useInterval(() => {
		if (!endDate || hasVotingEnded) return

		if (endDate.getTime() <= Date.now()) {
			setHasVotingEnded(true)
		}
	}, checkInerval)

	return hasVotingEnded
}

export const VoteButton = ({ video, endDate }: VoteButtonProps) => {
	const { user, voteForVideo } = useUser()
	const { voteMutation, isLoading } = useVoteMutation()
	const votesEnded = useCheckIfVotingEnded(endDate)

	const userHasVoted = video.uid ? user?.votedVideos.includes(video.uid) : false

	async function sendVote() {
		if (userHasVoted) return
		if (!user?.id || !video.uid || !video.submissionType) return
		if (votesEnded) return

		const success = await voteMutation({
			userId: user.id,
			videoUid: video.uid,
			videoSubmissionType: video.submissionType,
		})

		// We'll handle UI states with isError and isLoading.
		if (success) {
			voteForVideo(video.uid)
		}
	}

	const voteText = votesEnded
		? "Voting ended"
		: isLoading
		? "Voting..."
		: userHasVoted
		? "Voted!"
		: "Vote"

	return (
		<UnstyledButton
			onClick={sendVote}
			disabled={userHasVoted || votesEnded}
			className={clsx(
				"flex flex-col items-end",
				"space-y-2 md:space-y-5 lg:space-y-5",
				"text-center justify-self-end",
				(userHasVoted || votesEnded) && "cursor-not-allowed"
			)}
		>
			<ThumbIcon
				className={clsx("w-7 h-7 md:w-9 md:h-9 lg:w-12 lg:h-12")}
				filled={userHasVoted}
			/>

			<p
				className={clsx(
					"font-bold uppercase tracking-caps font-sansExt",
					"text-10 md:text-12 lg:text-14",
					"leading-1_2"
				)}
			>
				{voteText}
			</p>
		</UnstyledButton>
	)
}
