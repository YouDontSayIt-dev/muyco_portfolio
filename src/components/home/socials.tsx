import Image from "next/image"

export const Socials = () => {
    return (
        <div className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/mjpmuyco/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/linkedin-logo.svg"
            alt="File icon"
            width={24}
            height={24}
          />
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/YouDontSayIt-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/git-logo.svg"
            alt="File icon"
            width={24}
            height={24}
          />
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:mjpmuyco@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/email-logo.svg"
            alt="File icon"
            width={24}
            height={24}
          />
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/resume/muyco_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/cv-logo.svg"
            alt="File icon"
            width={24}
            height={24}
          />
        </a>
      </div>
    )
}