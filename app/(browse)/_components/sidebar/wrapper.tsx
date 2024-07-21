"use client"
import { useState, useEffect } from "react"
import { useIsClient } from "usehooks-ts"

import { useSidebar } from "@/store/use-sidebar"
import { cn } from "../../../../lib/utils"
import { ToggleSkeleton } from "./toggle"
import { RecommendedSkeleton } from "./recommended"
import { FollowingSkeleton } from "./following"

interface WrapperProps {
    children: React.ReactNode
}

export const Wrapper = ({ children }: WrapperProps) => {

    //C1:
    const [isClient, setIsClient] = useState(false)

    //C2:
    // const isClient = useIsClient()


    const { collapsed } = useSidebar((state) => state)

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient) {
        return (
            <aside
                className={cn(
                    "fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50",
                    collapsed && "w-[70px]"
                )}
            >
                <ToggleSkeleton />
                <FollowingSkeleton />
                <RecommendedSkeleton />
            </aside>
        )
    }

    return (
        <aside
            className={cn(
                "fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35] z-50",
                collapsed && "w-[70px]"
            )}
        >
            {children}
        </aside>
    )
}