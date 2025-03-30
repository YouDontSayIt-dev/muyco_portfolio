import { Socials } from "@/components/home/socials";
import { testimonials } from "@/data/static-items";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
function About(){
    const isHome = false;
    return (
        <div className="grid grid-rows-[20px_1fr_20px] bg-linear-to-r/hsl from-white to-[#E8E4C9] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
              <div className="w-full py-4">
              <AnimatedTestimonials testimonials={testimonials} />
            </div>
            </main>
            <footer className="absolute bottom-2 p-4 gap-8 text-sm">
            <div className="flex items-center justify-center p-4">
            { !isHome ? <Socials/>: "" }
            </div>
            <div className="flex gap-2">
                <p>© 2025 Mathew James</p>
                <p>This website is open source.</p>
            </div>
            
            
            </footer>
        </div>
    )
}

export default About;