import { Timeline } from "@/components/ui/timeline";
import { data } from "@/data/static-items";

function Experience() {
    return(
        <div className="w-screen h-screen bg-linear-to-r/hsl from-white to-[#E8E4C9]">
            <Timeline data={data} />
        </div>
    )
}

export default Experience;