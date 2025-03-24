import { IconHome, IconFolder, IconUser, IconBriefcaseFilled } from "@tabler/icons-react";
export const Links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "About",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/about",
    },
    {
      title: "Experience",
      icon: (
        <IconBriefcaseFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/experience",
    },
    {
        title: "Projects",
        icon: (
          <IconFolder className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "/projects",
    },
  ];