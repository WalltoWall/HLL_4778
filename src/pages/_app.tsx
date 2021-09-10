import Head from "next/head"
import { AppProps } from "next/app"

import "tailwindcss/tailwind.css"
import "@/styles/global.css"

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon-32x32.png" />
				<link rel="apple-touch-icon" href="/icons/icon-144x144.png" />
				<link rel="manifest" href="/manifest.webmanifest" />
				<title>Site Title</title>
			</Head>

			<Component {...pageProps} />
		</>
	)
}

export default App
