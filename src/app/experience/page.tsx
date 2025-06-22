import { Socials } from "@/components/home/socials";
import { Timeline } from "@/components/ui/timeline";
import { WorkExperiences as Data } from "./statis-data";

function Experience() {
    const isHome = false;
    return(
        <div className="w-full h-full bg-linear-to-r/hsl from-white to-[#E8E4C9]">
            <div>
            <Timeline data={Data} />
            </div>
            <footer className=" bottom-2 p-4 gap-8 text-sm">
                <div className="flex items-center justify-center p-4">
                { !isHome ? <Socials/>: "" }
                </div>
                <div className="flex gap-2 justify-center">
                    <p>© 2025 Mathew James</p>
                    <p>This website is open source.</p>
                </div>      
            </footer>
        </div>
    )
}

export default Experience;