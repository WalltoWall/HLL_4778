import * as React from "react"
import clsx from "clsx"
import { ButtonLink } from "../components/Button"

import { Gradient } from "../components/Gradient"
import { useMobileMenu } from "../components/Header/MobileMenuProvider"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"

const NotFoundGradient = () => {
	const { isOpen: isMobileMenuOpen } = useMobileMenu()

	return (
		<Gradient
			className="absolute inset-0 w-full h-full"
			shouldPlay={!isMobileMenuOpen}
		/>
	)
}

const NotFoundPage = () => {
	return (
		<Layout>
			<SEO pageTitle="Not Found" />

			<section className="relative flex flex-col items-center justify-center h-screen bg-gray-13">
				<NotFoundGradient />

				<div className="px-8 text-center text-beige-92">
					<p
						className={clsx(
							"font-bold uppercase tracking-caps font-sansExt",
							"leading-1_2",
							"text-16 md:text-18 lg:text-22",
							"mb-8 lg:mb-11"
						)}
					>
						And I Oop...
					</p>

					<h2
						className={clsx(
							"font-serif",
							"text-120 md:text-180 lg:text-242",
							"leading-1",
							"mb-11 lg:mb-23"
						)}
					>
						404
					</h2>

					<p
						className={clsx(
							"font-sans font-semibold",
							"text-18 md:text-22 lg:text-24",
							"leading-1_3",
							"mb-15 lg:mb-25"
						)}
					>
						We can't find the page you're looking for.
					</p>

					<ButtonLink href="/" color="black">
						Back to home
					</ButtonLink>
				</div>
			</section>
		</Layout>
	)
}

export default NotFoundPage
