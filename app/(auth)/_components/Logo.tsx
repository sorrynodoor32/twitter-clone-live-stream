import Image from "next/image"
import { Poppins } from "next/font/google"

import { cn } from '@/lib/utils'

const font = Poppins({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"]
})

const Logo = () => {
    return (
        <div className="flex flex-col items-center gap-y-4">
            <div className="bg-white w-[80px] h-[80px] rounded-full p-1 relative">
                <Image
                    src='/spooky.svg'
                    alt="logo"
                    fill
                />

            </div>
            <div className={cn("flex flex-col items-center", font.className)}>
                <p className="text-xl font-semibold">
                    Gamehub
                </p>
                <p
                    className="text-sm text-muted-foreground"
                >
                    Let's play
                </p>
            </div>
        </div>
    )
}

export default Logo
