import Image from "next/image"

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

export const PersonalProjects = [
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