"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FcLinux } from "react-icons/fc";
import {
   SiAngular,
   SiCss3,
   SiGit,
   SiGithub,
   SiHtml5,
   SiJavascript,
   SiNextdotjs,
   SiPython,
   SiReact,
   SiTypescript,
   SiTailwindcss,
   SiVercel,
} from "react-icons/si";

function ViteIcon() {
   const id = useId().replace(/[^a-zA-Z0-9_-]/g, "");
   const backgroundGradientId = `vite-background-${id}`;
   const boltGradientId = `vite-bolt-${id}`;

   return (
      <svg
         aria-hidden="true"
         focusable="false"
         width={48}
         height={48}
         viewBox="0 0 410 404"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            d="M399.641 59.5246 215.643 388.545c-3.799 6.793-13.559 6.833-17.415.073L10.5817 59.5563c-4.20083-7.3667 2.0985-16.2896 10.4464-14.7977L205.223 77.6824c1.175.21 2.378.208 3.553-.0061l180.343-32.8705c8.32-1.5164 14.649 7.3382 10.522 14.7192Z"
            fill={`url(#${backgroundGradientId})`}
         />
         <path
            d="m292.965 1.5744-136.164 26.6808c-2.238.4385-3.895 2.3351-4.03 4.6112L144.395 174.33c-.197 3.332 2.863 5.918 6.115 5.168l37.91-8.749c3.547-.818 6.752 2.306 6.023 5.873l-11.263 55.153c-.758 3.712 2.727 6.886 6.352 5.785l23.415-7.114c3.63-1.102 7.118 2.081 6.35 5.796l-17.899 86.633c-1.12 5.419 6.088 8.374 9.094 3.728l2.008-3.103 110.954-221.428c1.858-3.707-1.346-7.9345-5.418-7.1487l-39.022 7.5312c-3.667.707-6.787-2.708-5.752-6.2957l25.469-88.29141c1.036-3.59375-2.095-7.011709-5.766-6.29209Z"
            fill={`url(#${boltGradientId})`}
         />
         <defs>
            <linearGradient
               id={backgroundGradientId}
               x1="6"
               y1="33"
               x2="235"
               y2="344"
               gradientUnits="userSpaceOnUse"
            >
               <stop stopColor="#41D1FF" />
               <stop offset="1" stopColor="#BD34FE" />
            </linearGradient>
            <linearGradient
               id={boltGradientId}
               x1="194.651"
               y1="8.81818"
               x2="236.076"
               y2="292.989"
               gradientUnits="userSpaceOnUse"
            >
               <stop stopColor="#FFEA83" />
               <stop offset="0.0833333" stopColor="#FFDD35" />
               <stop offset="1" stopColor="#FFA800" />
            </linearGradient>
         </defs>
      </svg>
   );
}

export default function MySkills() {
   const groupRef = useRef<HTMLDivElement>(null);
   const [groupWidth, setGroupWidth] = useState(0);
   const [pixelsPerSecond, setPixelsPerSecond] = useState(60);

   useEffect(() => {
      const group = groupRef.current;
      if (!group) return;

      const updateWidth = () => setGroupWidth(group.getBoundingClientRect().width);
      const observer = new ResizeObserver(updateWidth);

      updateWidth();
      observer.observe(group);

      return () => observer.disconnect();
   }, []);

   useEffect(() => {
      const smallScreen = window.matchMedia("(max-width: 639px)");
      const updateSpeed = () => setPixelsPerSecond(smallScreen.matches ? 90 : 60);

      updateSpeed();
      smallScreen.addEventListener("change", updateSpeed);

      return () => smallScreen.removeEventListener("change", updateSpeed);
   }, []);

   const skills = [
      { name: "React", icon: <SiReact color="#61DAFB" size={48} /> },
      { name: "Next.js", icon: <SiNextdotjs color="#FFFFFF" size={48} /> },
      { name: "TypeScript", icon: <SiTypescript color="#3178C6" size={48} /> },
      { name: "Tailwind", icon: <SiTailwindcss color="#06B6D4" size={48} /> },
      { name: "Vercel", icon: <SiVercel color="#FFFFFF" size={48} /> },
      { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" size={48} /> },
      { name: "Vite", icon: <ViteIcon /> },
      { name: "HTML", icon: <SiHtml5 color="#E34F26" size={48} /> },
      { name: "CSS", icon: <SiCss3 color="#1572B6" size={48} /> },
      { name: "Angular", icon: <SiAngular color="#DD0031" size={48} /> },
      { name: "Linux", icon: <FcLinux size={48} /> },
      { name: "Git", icon: <SiGit color="#F05032" size={48} /> },
      { name: "GitHub", icon: <SiGithub color="#FFFFFF" size={48} /> },
      { name: "Python", icon: <SiPython color="#3776AB" size={48} /> },
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
                  duration: groupWidth > 0 ? groupWidth / pixelsPerSecond : 0,
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
                           className="mx-4 flex w-32 shrink-0 flex-col items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-3 transition-all duration-200 hover:bg-white/10 sm:mx-8 sm:w-40 sm:gap-3 sm:px-6 sm:py-4"
                        >
                           <span className="flex h-9 w-9 shrink-0 items-center justify-center [&>svg]:h-full [&>svg]:w-full sm:h-12 sm:w-12">
                              {skill.icon}
                           </span>
                           <span className="text-sm font-medium whitespace-nowrap text-gray-200 sm:text-base">
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
