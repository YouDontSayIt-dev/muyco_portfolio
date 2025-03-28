import { Socials } from "@/components/home/socials";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import { projectsData } from "@/data/static-items";

function Projects(){
    const isHome = false;
    const cards = projectsData.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
      ));
    return(
        <div className="w-full h-fit pt-20 bg-linear-to-r/hsl from-white to-[#E8E4C9]">
        <div>
        <h2 className="max-w-7xl mx-auto text-lg md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
          My projects.
        </h2>
        <Carousel items={cards} />
        </div>
        <div className="flex items-center justify-center">
        <footer className="fixed bottom-2 p-4 gap-8 text-sm">
            <div className="flex items-center justify-center p-4">
            { !isHome ? <Socials/>: "" }
            </div>
            <div className="flex gap-1">
                <p>© 2025 Mathew James</p>
                <p>This website is open source.</p>
            </div>
            
            
        </footer>
        </div>
        </div>
    )
}



export default Projects;