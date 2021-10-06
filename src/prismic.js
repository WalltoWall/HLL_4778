exports.linkResolver = (doc) => {
	if (doc.uid === "home") return "/"

	switch (doc.type) {
		case "navigation":
		case "settings":
		case "sponsor":
		case "spnsors_list":
		case "submission_type":
		case "video_submission":
			return "/"
	}

	return `/${doc.uid}`
}
