import { Suspense } from "react"
import { Container } from "./_components/container"
import { Navbar } from "./_components/navbar/index"
import { Sidebar, SidebarSkeleton } from "./_components/sidebar/index"

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            <div className="flex h-full pt-20">
                <Suspense fallback={<SidebarSkeleton />}>
                    <Sidebar />
                </Suspense>
                <Container>
                    {children}
                </Container>
            </div>
        </>
    )
}

export default BrowseLayout
