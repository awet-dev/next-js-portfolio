import Experience from "@/components/Experience";
import Study from "@/components/Study";
import Achievements from "@/components/Achievements";
import Summary from "@/components/Summary";
import Projects from "@/components/Projects";

const Resume = () => {
    return (
        <div className='rounded-lg shadow-2xl p-6'>
            <Summary />
            <Achievements />
            <Study />
            <Experience />
            <Projects />
        </div>
    )
}

export default Resume