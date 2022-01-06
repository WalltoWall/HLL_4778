import * as React from "react"
import clsx from "clsx"
import { Popover } from "@headlessui/react"

interface Color {
	bgClassName: string
	label: string
	hex: string
}

interface SwatchProps {
	color: Color
}

const Swatch = ({ color }: SwatchProps) => {
	return (
		<Popover className="relative">
			<Popover.Button
				className={clsx(
					"rounded-full w-14 h-14 block",
					"focus:outline-none focus:ring-2 focus:ring-offset-2",
					color.bgClassName
				)}
			/>

			<Popover.Panel
				className={clsx(
					"absolute z-10 px-5 py-3 bg-white rounded-lg shadow-md left-[50%]",
					"transform translate-x-[-50%]",
					"text-center space-y-1.5"
				)}
			>
				<p className="font-semibold text-14 text-docsGray-900 leading-1 whitespace-nowrap">
					{color.label}
				</p>
				<p className="font-medium leading-1 text-14 text-docsGray-500">
					{color.hex}
				</p>
			</Popover.Panel>
		</Popover>
	)
}

interface ColorGroupProps {
	label: string
	colors: Color[]
}

const ColorGroup = ({ label, colors }: ColorGroupProps) => {
	return (
		<div className="space-y-1">
			<h2 className="font-bold text-24 text-docsGray-900">{label}</h2>
			<div className="flex space-x-8">
				{colors.map((c) => (
					<Swatch key={c.hex} color={c} />
				))}
			</div>
		</div>
	)
}

export const Colors = () => {
	return (
		<div className="mt-8 space-y-6">
			<ColorGroup
				label="Red"
				colors={[{ bgClassName: "bg-red-45", label: "Red 45", hex: "#C83228" }]}
			/>
			<ColorGroup
				label="Orange"
				colors={[
					{ bgClassName: "bg-orange-55", label: "Orange 45", hex: "#EB5A32" },
				]}
			/>
			<ColorGroup
				label="Yellow"
				colors={[
					{ bgClassName: "bg-yellow-50", label: "Yellow 50", hex: "#FFAB00" },
				]}
			/>
			<ColorGroup
				label="Green"
				colors={[
					{ bgClassName: "bg-green-27", label: "Green 27", hex: "#6D8E00" },
				]}
			/>
			<ColorGroup
				label="Blue"
				colors={[
					{ bgClassName: "bg-blue-31", label: "Blue 31", hex: "#007CA0" },
				]}
			/>
			<ColorGroup
				label="Beige"
				colors={[
					{ bgClassName: "bg-beige-92", label: "Beige 92", hex: "#F7F2E2" },
				]}
			/>
			<ColorGroup
				label="Gray"
				colors={[
					{ bgClassName: "bg-gray-13", label: "Gray 13", hex: "#241F20" },
					{ bgClassName: "bg-gray-23", label: "Gray 23", hex: "#3f3738" },
				]}
			/>
		</div>
	)
}
