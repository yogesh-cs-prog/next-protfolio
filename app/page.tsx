'use client';
import { FloatingNav } from '@/components/ui/floating-navbar';
import Hero from '../components/hero'
import Grid from '../components/grid'
import Footer from '../components/footer'
import RecentProjects from '../components/recentprojects'
import { FaHome } from "react-icons/fa";
import { navItems } from '@/data';


export default function Home() {
  
  return (
   <main className="relative bg-black-100 justify-center items-center overflow-hidden flex-col px-5 sm:px-11 no-scrollbar">
    <div className="w-full">
      <FloatingNav 
      navItems={navItems} />
      <Hero />
      <Grid />
      <RecentProjects />
      <Footer />
    </div>
   </main>
  );
}
