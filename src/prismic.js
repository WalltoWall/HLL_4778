exports.linkResolver = (doc) => {
	if (doc.uid === "home") return "/"

	return `/${doc.uid}`
}
