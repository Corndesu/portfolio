"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <BackgroundBeams />
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Experience />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
