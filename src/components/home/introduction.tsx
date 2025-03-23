import { ColourfulText } from "@/components/ui/colourful-text"

export const Introduction = () => {
    return (
        <div className="flex flex-col flex-auto gap-2">
        <div className="text-4xl">
          <h1>
              Hello there, my name is <ColourfulText text="Mathew James."></ColourfulText>
          </h1>
        </div>
        <div className="leading-auto text-lg">
          <p> I&apos;m a Full-Stack Developer & DevOps Engineer based in the Philippines. <br/> Passionate about creating, automating, and always working on exciting side projects.</p>
        </div>
      </div>
    )
}