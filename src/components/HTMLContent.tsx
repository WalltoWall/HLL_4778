import React from "react"

interface Props extends React.ComponentPropsWithoutRef<"div"> {
  tag?: keyof JSX.IntrinsicElements
  html: string
}

export const HTMLContent = React.forwardRef<HTMLElement, Props>(
  ({ tag: Comp = "button", html, ...props }) => {
    //@ts-expect-error - Complex polymorphic type
    return <Comp dangerouslySetInnerHTML={{ __html: html }} {...props} />
  }
)

HTMLContent.displayName = "HTMLContent"
