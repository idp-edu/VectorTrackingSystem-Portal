//* Limita a página em um Width Max *

import { cn } from "@/app/lib/utils"
import { ReactNode } from "react"

type MaxWidthWrapperType = {
    className?: string,
    children: ReactNode
}

const MaxWidthWrapper = ({ className, children }: MaxWidthWrapperType) => {
    return (
        <div className={cn("mx-auto w-full max-w-sreen-xl px-2.5 md:px-20", className)}>
            {children}
        </div>
    )
}

export default MaxWidthWrapper