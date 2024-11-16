import * as React from "react"

const ContentWrapper= ({ children }: { children: React.ReactNode }) => {
    return(
        <div className="flex flex-col align-center items-center gap-y-[1.5rem] h-[80vh]">
            {children}
        </div>
    )
}

export { ContentWrapper}