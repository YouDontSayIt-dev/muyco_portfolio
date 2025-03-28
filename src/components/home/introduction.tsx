import { ColourfulText } from "@/components/ui/colourful-text"

export const Introduction = () => {
    return (
        <div className="flex flex-col flex-auto gap-2 text-black ">
        <div className="text-4xl">
          <h1 className="flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-col">
              Hi there, my name is <div className="font-bold"><ColourfulText text=" Mathew James."></ColourfulText></div>
          </h1>
        </div>
        <div className="leading-auto text-lg">
          <p> I&apos;m a Full-Stack Developer & DevOps Engineer based in the Philippines. <br/> Passionate about creating, automating, and always working on exciting side projects.</p>
        </div>
      </div>
    )
}