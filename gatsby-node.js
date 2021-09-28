/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path")

exports.createPages = async (gatsbyContext) => {
	const { actions, reporter, graphql } = gatsbyContext
	const { createPage, createRedirect } = actions

	/**
	 * Create pages for all Page documents in Prismic. The document's UID is
	 * passed as context here to allow the template to query for the specific document.
	 *
	 * If a page defines a redirect in its Main tab, a redirect is created instead.
	 *
	 * @see https://www.gatsbyjs.org/docs/node-apis/#createPages
	 * @see https://www.gatsbyjs.org/docs/actions/#createRedirect
	 */
	const pageResult = await graphql(`
		query {
			allPrismicPage {
				nodes {
					uid
					url
					data {
						redirect_to {
							url
						}
						redirect_is_permanent
					}
				}
			}
		}
	`)
	const pageNodes = pageResult.data.allPrismicPage.nodes

	for (const page of pageNodes) {
		if (page.data.redirect_to.url) {
			createRedirect({
				fromPath: page.url,
				toPath: page.data.redirect_to.url,
				isPermanent: page.data.redirect_is_permanent,
				redirectInBrowser: true,
				force: true,
			})
			continue
		}

		createPage({
			path: page.url,
			component: path.resolve(__dirname, "src/templates/page.tsx"),
			context: { uid: page.uid },
		})
	}

	/**
	 * Create pages for all Event documents in Prismic. The document's UID is
	 * passed as context here to allow the template to query for the specific document.
	 *
	 * @see https://www.gatsbyjs.org/docs/node-apis/#createPages
	 */
	const eventResult = await graphql(`
		query {
			allPrismicEvent {
				nodes {
					uid
					url
				}
			}
		}
	`)
	const eventNodes = eventResult.data.allPrismicEvent.nodes

	for (const event of eventNodes) {
		createPage({
			path: event.url,
			component: path.resolve(__dirname, "src/templates/event.tsx"),
			context: { uid: event.uid },
		})
	}

	/**
	 * Create global redirects defined in the Settings document.
	 *
	 * @see https://www.gatsbyjs.org/docs/actions/#createRedirect
	 */
	const settingsResult = await graphql(`
		query {
			prismicSettings {
				data {
					redirects {
						from_path
						is_permanent
						to_path
					}
				}
			}
		}
	`)
	const redirects = settingsResult.data.prismicSettings.data.redirects

	for (const redirect of redirects)
		if (redirect.from_path && redirect.to_path)
			createRedirect({
				fromPath: redirect.from_path,
				toPath: redirect.to_path,
				isPermanent: redirect.is_permanent,
				redirectInBrowser: true,
				force: true,
			})

	/**
	 * Create a redirect from /admin to Prismic.
	 *
	 * @see https://www.gatsbyjs.org/docs/actions/#createRedirect
	 */
	{
		const url = `https://${process.env.GATSBY_PRISMIC_REPOSITORY_NAME}.prismic.io`
		reporter.info(`created /admin redirect to ${url}`)
		createRedirect({
			fromPath: "/admin",
			toPath: url,
			redirectInBrowser: true,
			force: true,
		})
	}

	/**
	 * Create a redirect from /docs to client documentation.
	 *
	 * @see https://www.gatsbyjs.org/docs/actions/#createRedirect
	 */
	{
		const url = process.env.CLIENT_DOCS_URL
		if (url) {
			reporter.info(`created /docs redirect to ${url}`)
			createRedirect({
				fromPath: "/docs",
				toPath: url,
				redirectInBrowser: true,
				force: true,
			})
		}
	}
}

exports.createResolvers = async ({ createResolvers }) => {
	const resolvers = {
		PrismicSubmissionType: {
			submissions: {
				type: ["PrismicVideoSubmission"],
				resolve: (source, args, context, _info) => {
					return context.nodeModel.runQuery({
						query: {
							filter: {
								data: {
									type: {
										uid: { eq: source.uid },
									},
								},
							},
						},
						type: "PrismicVideoSubmission",
						firstOnly: false,
					})
				},
			},
		},
	}

	createResolvers(resolvers)
}
