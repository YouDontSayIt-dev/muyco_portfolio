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
      "My passion for coding started in my teenage years, sparking a journey that led me to design and develop websites, lead development projects, and build AI models.",
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
  {
    quote:
      "Right now, I’m focused on applying what I’ve learned in college to solve real world challenges. I'm honing my skills as a .NET C# developer while continuing to explore full-stack development and DevOps. Every challenge I take on helps me grow, refine my expertise, and expand my knowledge in different areas of tech.",
    name: "Being a professional",
    designation: "C# Full Stack Developer",
    src: "https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/486475839_9787022941350292_2788867424015068537_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEdb7AVD8s0EC8l5OSOcRfgqcDADmljFOepwMAOaWMU5-GS7Mglc-gUnrhu29J89bC0HPZo1r7V2KdN_EWKI9XJ&_nc_ohc=kwu7GhaOAv8Q7kNvgG97YiC&_nc_oc=AdlMqk4F-0VrrpqJzYKjWZKUOvWmR1LYFWX6tycsNHWIoAn_NNIOjMgI3XxydT9TpUZEbYyVYMvc9WOrZPmiu8dc&_nc_zt=23&_nc_ht=scontent.fmnl4-6.fna&_nc_gid=B51BoygfiMcRNe8kYhg9Ww&oh=00_AYHxGRcQAGRiIOlZHoBw50rAQn9o2kX3PYmwQo4SFLaa4Q&oe=67EB2211",
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
        <div className="grid xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 grid-cols-1 gap-2 text-justify">
        I worked as a Full-Stack Developer at Golden Suntec, where I gained hands-on experience in enterprise development, stored procedures, and the .NET environment.
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
        <div className="grid  xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 grid-cols-1  gap-2 mb-4 leading-auto text-justify">
            At Lamina, I gained first-hand experience in production-level development using Unity Engine. It was here that I learned how to effectively collaborate with diverse individuals, leveraging our strengths and weaknesses to build innovative solutions.
        </div>
        <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-2">
          During College
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-md font-normal mb-8">
          Freelance Software Developer | Jul 2023 - Mar 2024
        </p>
        <div className="grid xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 grid-cols-1  gap-2 text-justify">
            As a freelance software developer, I built AI-based systems, as well as reservation and tracking solutions, tailored to client needs.  
            Utilizing PHP, Python, and Java, I developed scalable and efficient applications that streamlined operations and enhanced user experience.
        </div>
      </div>
    ),
  },
];

const aiContentData = [
  {
    id: 1,
    title: "Automated Railway Crack Detection Web Application",
    description:
      "Inspired by an existing study on railway crack detection in the Philippines, our thesis team proposed and developed an improved system capable of automatic detection using mounted cameras. As Project Lead, I spearheaded the development of a machine learning-based web application that detects railway track cracks in real time, helping prevent accidents and enhance railway safety.",
    techStack: "React, Python, Pytorch, Computer Vision, YOLOv8 Model",
    imageUrl: "https://scontent.fcrk1-5.fna.fbcdn.net/v/t39.30808-6/487327392_9793490680703518_4976920340789858197_n.jpg?stp=c482.0.944.944a_dst-jpg_s206x206_tt6&_nc_cat=104&ccb=1-7&_nc_sid=714c7a&_nc_eui2=AeGOGM4tsu9yVoh1TfhgtbOV-lOn9q34BwT6U6f2rfgHBGVrRp30AX4oIxucRaM2JT2rt-j0_f-xTX3Axt2qh-WH&_nc_ohc=8gW65YpsJ9cQ7kNvgEEM97P&_nc_oc=Adng4lvV_sLuq2QgXA7-W-eYWV2tj24eHAa0YwRVbZy0R5nw4qOzz7HNzxwmi0osXx4&_nc_zt=23&_nc_ht=scontent.fcrk1-5.fna&_nc_gid=kF131s2UP8ZK8w9W67xSpg&oh=00_AYEHL_GnA8X0TNYj3G0MjTx34QdlisPhdeh_zde5FPyB_Q&oe=67EC7966",
    githubUrl: "https://github.com/YouDontSayIt-dev/Detection-of-Breakages-Over-Railway-Tracks-Using-YOLOv8-Model"
  },
  {
    id: 2,
    title: "Hotel Booking with Facial Detection Functionality",
    description:
      "Developed an AI-powered hotel booking system that integrates facial recognition for automated check-in and check-out. Leveraging YOLOv8 object detection, the system achieves 98% facial recognition accuracy, enhancing security and streamlining hotel operations.",
    techStack: "PHP, MySQL, Pytorch, Computer Vision, YOLOv8 Model",
    imageUrl: "https://assets.aceternity.com/macbook.png",
    githubUrl: ""
    
  },
  {
    id: 3,
    title: "Investor Article Summarization Mobile Application",
    description:
      "For this one, I became inspired by a Michael Reeves video on Youtube using Sentiment Analysis for his Twitter Bot, as Sentiment Analysis uses words to represent positive and negative, I've comed up a way to utilize this in a business setting wherein an investor can input the article to the application, reducing article consumption time to give near instant feedback on possible investment ventures",
    techStack: "Java, Kotlin, Natural Langunage Processing(NLP), Sentiment Analysis, Firebase NoSQL Database",
    imageUrl: "https://scontent.fcrk1-5.fna.fbcdn.net/v/t39.30808-6/487327392_9793490680703518_4976920340789858197_n.jpg?stp=c482.0.944.944a_dst-jpg_s206x206_tt6&_nc_cat=104&ccb=1-7&_nc_sid=714c7a&_nc_eui2=AeGOGM4tsu9yVoh1TfhgtbOV-lOn9q34BwT6U6f2rfgHBGVrRp30AX4oIxucRaM2JT2rt-j0_f-xTX3Axt2qh-WH&_nc_ohc=8gW65YpsJ9cQ7kNvgEEM97P&_nc_oc=Adng4lvV_sLuq2QgXA7-W-eYWV2tj24eHAa0YwRVbZy0R5nw4qOzz7HNzxwmi0osXx4&_nc_zt=23&_nc_ht=scontent.fcrk1-5.fna&_nc_gid=kF131s2UP8ZK8w9W67xSpg&oh=00_AYEHL_GnA8X0TNYj3G0MjTx34QdlisPhdeh_zde5FPyB_Q&oe=67EC7966",
    githubUrl: "https://github.com/YouDontSayIt-dev/Investor-Article-Summarization-Program"
  },
];

const AIContent = () => {
  return (
    <>
      {aiContentData.map((item) => (
        <div
          key={item.id}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              {item.title}
            </span>{""}
            <br/>
            <span className="text-sm">
              Stack Used: {item.techStack}
            </span>
            <br/>
            <span className="text-sm text-justify">
            {item.description}
            </span>
            
          </p>
          <div>
           <a
                    className="flex justify-end gap-2 hover:underline hover:underline-offset-4 w-auto h-auto"
                    href={item.githubUrl}
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
          </div>
        </div>
      ))}
    </>
  );
};

const netContentData = [
  {
    id: 1,
    title: "Job Tracking Management Web Application",
    description:
      "Developed a web-based job tracking management system to streamline project workflows, monitor task progress, and enhance team productivity. The application features role-based access control, task assignments, and real-time status updates, improving efficiency in project management.",
    techStack: "React, .NET Core, SQL Server",
    imageUrl: "https://scontent.fcrk1-5.fna.fbcdn.net/v/t39.30808-6/487327392_9793490680703518_4976920340789858197_n.jpg?stp=c482.0.944.944a_dst-jpg_s206x206_tt6&_nc_cat=104&ccb=1-7&_nc_sid=714c7a&_nc_eui2=AeGOGM4tsu9yVoh1TfhgtbOV-lOn9q34BwT6U6f2rfgHBGVrRp30AX4oIxucRaM2JT2rt-j0_f-xTX3Axt2qh-WH&_nc_ohc=8gW65YpsJ9cQ7kNvgEEM97P&_nc_oc=Adng4lvV_sLuq2QgXA7-W-eYWV2tj24eHAa0YwRVbZy0R5nw4qOzz7HNzxwmi0osXx4&_nc_zt=23&_nc_ht=scontent.fcrk1-5.fna",
    githubUrl: "https://github.com/YouDontSayIt-dev/Job-Watch"
  },
  {
    id: 2,
    title: "Quality Assurance Testing & Project Management Application",
    description:
      "Developed a web application designed to facilitate quality assurance testing and project management. This tool enables testers and project managers to track software defects, manage test cases, and monitor project progress through an intuitive dashboard, improving software quality and development efficiency.",
    techStack: "React, Redux, TailwindCSS, .NET Core, SignalR, SQL Server",
    imageUrl: "https://assets.aceternity.com/macbook.png",
    githubUrl: ""
  },
];

const NETContent = () => {
  return (
    <>
      {netContentData.map((item) => (
        <div
          key={item.id}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              {item.title}
            </span>{" "}
            <br/>
            <span className="text-sm">
              Stack Used: {item.techStack}
            </span>
            <br/>
            <span className="text-sm text-justify">
            {item.description}
            </span>
            
          </p>
          <div>
           <a
                    className="flex justify-end gap-2 hover:underline hover:underline-offset-4 w-auto h-auto"
                    href={item.githubUrl}
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
          </div>
        </div>
      ))}
    </>
  );
};

const phpContentData = [
  {
    id: 1,
    title: "Resort Booking & Reservation Application",
    description:
      "Developed a web-based resort booking and reservation system that allows customers to check room availability, make reservations, and manage bookings online. The system includes an admin panel for managing reservations, pricing, and customer details, enhancing the efficiency of resort operations.",
    techStack: "PHP, MySQL, TailwindCSS",
    imageUrl: "https://scontent.fcrk1-5.fna.fbcdn.net/v/t39.30808-6/487327392_9793490680703518_4976920340789858197_n.jpg?stp=c482.0.944.944a_dst-jpg_s206x206_tt6&_nc_cat=104&ccb=1-7&_nc_sid=714c7a&_nc_eui2=AeGOGM4tsu9yVoh1TfhgtbOV-lOn9q34BwT6U6f2rfgHBGVrRp30AX4oIxucRaM2JT2rt-j0_f-xTX3Axt2qh-WH&_nc_ohc=8gW65YpsJ9cQ7kNvgEEM97P&_nc_oc=Adng4lvV_sLuq2QgXA7-W-eYWV2tj24eHAa0YwRVbZy0R5nw4qOzz7HNzxwmi0osXx4&_nc_zt=23&_nc_ht=scontent.fcrk1-5.fna",
    githubUrl: ""
  },
  {
    id: 2,
    title: "Hospital Portal & Patient Tracking Application",
    description:
      "Developed a hospital portal and patient tracking system to streamline patient management, appointment scheduling, and medical record access. The system features real-time patient status tracking, role-based access for doctors and staff, and an intuitive dashboard for improved healthcare administration.",
    techStack: "PHP, MySQL, TailwindCSS",
    imageUrl: "https://assets.aceternity.com/macbook.png",
    githubUrl: "https://github.com/YouDontSayIt-dev/Hospital-Portal"
  },
];


const PHPContent = () => {
  return (
    <>
      {phpContentData.map((item) => (
        <div
          key={item.id}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              {item.title}
            </span>{" "}
            <br/>
            <span className="text-sm">
              Stack Used: {item.techStack}
            </span>
            <br/>
            <span className="text-sm text-justify">
            {item.description}
            </span>
            
          </p>
          <div>
           <a
                    className="flex justify-end gap-2 hover:underline hover:underline-offset-4 w-auto h-auto"
                    href={item.githubUrl}
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
          </div>
        </div>
      ))}
    </>
  );
};

export const projectsData = [
  {
    category: "AI/ML Development",
    title: "Working with AI is Fun.",
    src: "https://images.pexels.com/photos/6153345/pexels-photo-6153345.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: <AIContent />,
  },
  {
    category: ".NET Core",
    title: "Applying What I've Learned in Enterprise Development.",
    src: "https://images.pexels.com/photos/9683980/pexels-photo-9683980.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: <NETContent />,
  },
  {
    category: "PHP",
    title: "PHP has been my stack from my early days in college",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <PHPContent />,
  },
];