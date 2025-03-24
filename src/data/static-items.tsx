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
    name: "I'm Mathew James.",
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

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
               Lorem Ipsum Header
              </span>{" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
            <div className="flex">
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
             <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
            </div>
           
          </div>
        );
      })}
    </>
  );
};

export const projectsData = [
  {
    category: "AI/ML Development",
    title: "Working with AI is fun, here are few examples of my work.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: ".NET Core",
    title: "Enterprise Development with .NET",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "PHP ",
    title: "PHP has been my stack from my early days in college",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
 
  {
    category: "Javascript & Typescript",
    title: "React Projects Mostly",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Mobile Development",
    title: "Kotlin as my primary tech",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Work in Progress",
    title: "Always keeping my skills sharp",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
];