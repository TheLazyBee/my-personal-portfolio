"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
   SiCss3,
   SiHtml5,
   SiJavascript,
   SiNextdotjs,
   SiReact,
   SiTypescript,
   SiTailwindcss,
   SiVite,
   SiVercel,
} from "react-icons/si";

export default function MySkills() {
   const groupRef = useRef<HTMLDivElement>(null);
   const [groupWidth, setGroupWidth] = useState(0);

   useEffect(() => {
      const group = groupRef.current;
      if (!group) return;

      const updateWidth = () => setGroupWidth(group.getBoundingClientRect().width);
      const observer = new ResizeObserver(updateWidth);

      updateWidth();
      observer.observe(group);

      return () => observer.disconnect();
   }, []);

   const skills = [
      { name: "React", icon: <SiReact color="#61DAFB" size={48} /> },
      { name: "Next.js", icon: <SiNextdotjs color="#FFFFFF" size={48} /> },
      { name: "TypeScript", icon: <SiTypescript color="#3178C6" size={48} /> },
      { name: "Tailwind", icon: <SiTailwindcss color="#06B6D4" size={48} /> },
      { name: "Vercel", icon: <SiVercel color="#FFFFFF" size={48} /> },
      { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" size={48} /> },
      { name: "Vite", icon: <SiVite color="#646CFF" size={48} /> },
      { name: "HTML", icon: <SiHtml5 color="#E34F26" size={48} /> },
      { name: "CSS", icon: <SiCss3 color="#1572B6" size={48} /> },
   ];

   return (
      <section className="py-16">
         <div className="mx-auto max-w-6xl px-8">
            <h2 className="mb-6 text-2xl font-light text-gray-300">
               Technologies I work with
            </h2>
         </div>

         <div className="relative overflow-hidden bg-gradient-to-r from-purple-900/30 via-purple-800/30 to-purple-900/30">
            <motion.div
               className="flex w-max items-center py-8"
               animate={groupWidth > 0 ? { x: -groupWidth } : undefined}
               transition={{
                  duration: groupWidth > 0 ? groupWidth / 60 : 0,
                  repeat: Infinity,
                  ease: "linear",
               }}
            >
               {[false, true].map((isDuplicate) => (
                  <div
                     key={isDuplicate ? "duplicate" : "skills"}
                     ref={isDuplicate ? undefined : groupRef}
                     aria-hidden={isDuplicate}
                     className="flex shrink-0 items-center"
                  >
                     {skills.map((skill) => (
                        <div
                           key={skill.name}
                           className="mx-8 flex w-40 shrink-0 flex-col items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-6 py-4 transition-all duration-200 hover:bg-white/10"
                        >
                           <span className="flex h-12 w-12 shrink-0 items-center justify-center">
                              {skill.icon}
                           </span>
                           <span className="font-medium whitespace-nowrap text-gray-200">
                              {skill.name}
                           </span>
                        </div>
                     ))}
                  </div>
               ))}
            </motion.div>
         </div>
      </section>
   );
}
