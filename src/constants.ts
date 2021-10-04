/* eslint-disable @typescript-eslint/no-non-null-assertion */

export const PRISMIC_REPOSITORY_NAME =
	process.env.GATSBY_PRISMIC_REPOSITORY_NAME!
if (!PRISMIC_REPOSITORY_NAME)
	throw new Error("PRISMIC_REPOSITORY_NAME must be defined.")
