import * as React from "react"
import { usePrismicSettings } from "../hooks/usePrismicSettings"
import { BoundedBox } from "./BoundedBox"
import { HTMLContent } from "./HTMLContent"

export const NotificationBar = () => {
	const settings = usePrismicSettings()

	if (!settings.notificationBarEnabled) return null

	return (
		<BoundedBox
			variant="notification"
			width="notification"
			className="bg-beige-92"
		>
			{settings.notificationHTML && (
				<HTMLContent
					html={settings.notificationHTML}
					variant="sm"
					className="text-center text-gray-13"
				/>
			)}
		</BoundedBox>
	)
}
