import Image from 'next/image'
import Introduction from "@/components/Introduction";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24">
            <Introduction />
            <Resume />
        </main>
    )
}
