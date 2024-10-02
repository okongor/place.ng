"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = () => {
  const [stats, setStats] = useState({ users: 0, projects: 0 });

  useEffect(() => {
    // Simulate fetching real-time statistics
    const interval = setInterval(() => {
      setStats((prevStats) => ({
        users: prevStats.users + Math.floor(Math.random() * 10),
        projects: prevStats.projects + Math.floor(Math.random() * 5),
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>

      <section
        className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pb-[160px] 2xl:pb-[200px] bg-cover bg-center bg-[url('/res.jpg')]"
      >

        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto text-center relative z-20">
          <h1 className="text-4xl mt-28 font-extrabold leading-tight text-white sm:text-4xl sm:leading-tight md:text-7xl md:leading-tight">
            Promoting Good Governance and Citizens Access
          </h1>
          <h2 className="text-4xl mt-4 md:text-lg md:leading-tight text-white">
            Empowering Citizens through Transparency, Accountability and Information
          </h2>
        </div>
      </section>


    </>
  );
};

export default Hero;
