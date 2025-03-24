import { Socials } from "@/components/home/socials";
import { Timeline } from "@/components/ui/timeline";
import { data } from "@/data/static-items";

function Experience() {
    const isHome = false;
    return(
        <div className="w-full h-full bg-linear-to-r/hsl from-white to-[#E8E4C9]">
            <div>
            <Timeline data={data} />
            </div>
        </div>
    )
}

export default Experience;