import Image from "next/image";
import NimioraNavbar from "./components/navbar";
import NimioraHero from "./components/hero";
import NimioraSections from "./components/story";
import NimioraFinalSections from "./components/final";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <NimioraNavbar/>
      <NimioraHero/>
      <NimioraSections/>
      <NimioraFinalSections/>
    </div>
  );
}