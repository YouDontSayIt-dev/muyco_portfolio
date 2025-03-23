import { IconHome, IconTerminal2, IconUser, IconBriefcaseFilled, IconPhoneCall } from "@tabler/icons-react";
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
          <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "/projects",
    },
    {
      title: "Contact",
      icon: (
        <IconPhoneCall className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
  ];