import React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

export const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <Button
                className={cn(
                    "relative inline-block px-14 py-4 pb-8 font-bold group",
                    "bg-transparent hover:bg-transparent",
                    className
                )}
                ref={ref}
                {...props}
            >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-0 translate-y-0 bg-primary group-hover:translate-x-1 group-hover:translate-y-1"></span>
                <span className="absolute inset-0 w-full h-full border-2 border-[#191b1e] bg-[#212529] group-hover:bg-[#212529]"></span>
                <span className="relative text-white">{children}</span>
            </Button>
        )
    }
)

CustomButton.displayName = "CustomButton"

