import * as React from "react"
import clsx from "clsx"

const variants = {
  white: {
    bg: "bg-white",
  },
}

interface Props extends React.ComponentPropsWithoutRef<"button"> {
  variant: keyof typeof variants
}

export const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ variant, children, className, ...props }, ref) => {
    const variantStyles = variants[variant]

    return (
      <button
        ref={ref}
        className={clsx(
          "inline-flex items-center justify-center",
          variantStyles.bg,
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"
