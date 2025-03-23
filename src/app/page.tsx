import { FloatingDock } from "@/components/ui/floating-dock";
import { Links } from "@/data/navbar-items";
import { Socials } from "@/components/home/socials";
import { Introduction } from "@/components/home/introduction";
export default function Home() {
  const isHome = true;
  return (
    <div className="grid grid-rows-[20px_1fr_20px] bg-linear-to-r/hsl from-white to-[#E8E4C9] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <Introduction/>
          <Socials/>
      </main>
      <footer className="absolute bottom-0 p-4 flex gap-4 text-sm">
        { !isHome ? <Socials/>: "" }
        <p>© 2025 Mathew James</p>
        <p>This website is open source.</p>
      </footer>
    </div>
  );
}
