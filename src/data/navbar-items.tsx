import { IconHome, IconFolder, IconUser, IconBriefcaseFilled } from "@tabler/icons-react";
export const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Experience",
      link: "/experience",
      icon: (
        <IconBriefcaseFilled className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Projects",
      link: "/projects",
      icon: (
        <IconFolder className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];