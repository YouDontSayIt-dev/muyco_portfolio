import Image from "next/image"

export const Words = ["Full-Stack Developer", "DevOps Engineer", "Machine Learning Engineer ", "Computer Hobbyist"];

export const Content = [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
          Collaborative Editing
        </div>
      ),
    },
    {
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
          Version control
        </div>
      ),
    },
    {
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
          Running out of content
        </div>
      ),
    },
  ];

export const testimonials = [
  {
    quote:
      "My passion for coding started in my teenage years, sparking a journey that led me to design and develop websites, lead development projects, and build AI models. These days, I focus on building scalable web applications using .NET Core, React, and TailwindCSS.",
    name: "Hey there! I'm Mathew James.",
    designation: "Welcome to my Portfolio",
    src: "https://media.licdn.com/dms/image/v2/D5603AQFIIvsrEOON3A/profile-displayphoto-shrink_800_800/B56ZVvkY_kHQAc-/0/1741333565808?e=1748476800&v=beta&t=mUJN1C6qBppGtkXI04rbmB_WSxXrLNNx4aoKJJoibN0",
  },
  {
    quote:
      "As a Computer Science graduate from Polytechnic University of the Philippines, I developed strong problem-solving skills, explored full-stack development, database management, and DevOps, and gained real-world experience through client projects. I continue to expand my expertise and work on innovative solutions in the evolving tech industry.",
    name: "My Academic Journey",
    designation: "Graduated with a Bachelor's in Computer Science",
    src: "https://scontent.fcrk1-4.fna.fbcdn.net/v/t39.30808-6/461959885_8723399931045937_4544978952185310409_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGn3TWxqYnW6G5GaR7wWHgJuJecAJleKEG4l5wAmV4oQQ0jK0a_V3r0me2bv3PRFFQnNMw222pq35GivUe2kiA8&_nc_ohc=eeOd_x7H--4Q7kNvgGp82j6&_nc_oc=Adnl9vpskvKUqzOcmhjOeFux8wA2b-X0G7siXYfg6Wp_jrK2OR5WEniWrgmYr21MBWM&_nc_zt=23&_nc_ht=scontent.fcrk1-4.fna&_nc_gid=7CjL9qKvSt1NaPAqYzzDvg&oh=00_AYHKeq_K0o-054YS3W_JTfr5seIsTxcg3AhgFKbyt6o4rg&oe=67E6030E",
  },
];

export const data = [
  {
    title: "Present",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-2">
          Golden Suntec Solutions Inc. 
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-md font-normal mb-8">
          C# Developer | Jul 2024 - Present
        </p>
        <div className="grid grid-cols-2 gap-2 text-justify">
        Before graduating, I worked as a Full-Stack Developer at Golden Suntec, where I gained hands-on experience in enterprise development, stored procedures, and the .NET environment.
        <br/>During my time here, I learned invaluable lessons from my senior mentors, who introduced me to best coding practices for writing readable, maintainable, and scalable code. This experience significantly shaped my approach to software development and problem-solving.
        </div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-2">
          Lamina Studios LLC.
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-md font-normal mb-8">
          C# Game Developer | Aug 2023 - Sep 2023
        </p>
        <div className="grid grid-cols-2 gap-2 mb-4 leading-auto text-justify">
            At Lamina, I gained first-hand experience in production-level development using Unity Engine. It was here that I learned how to effectively collaborate with diverse individuals, leveraging our strengths and weaknesses to build innovative solutions.
        </div>
        <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-2">
          During College
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-md font-normal mb-8">
          Freelance Software Developer | Jul 2023 - Mar 2024
        </p>
        <div className="grid grid-cols-2 gap-2 text-justify">
            As a freelance software developer, I built AI-based systems, as well as reservation and tracking solutions, tailored to client needs.  
            Utilizing PHP, Python, and Java, I developed scalable and efficient applications that streamlined operations and enhanced user experience.
        </div>
      </div>
    ),
  },
];