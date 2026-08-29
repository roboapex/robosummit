"use client";

import { useEffect, useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { EVENT_DATE } from "@/app/data/site";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-line"
    >
      <OrbitalBackdrop />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pt-36 lg:px-8 lg:pb-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 border border-line bg-panel px-4 py-2.5"
          >
            <span className="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-snow">
              <span className="h-2 w-2 animate-blink bg-red" aria-hidden />
              Mission Status: Registration Starts Soon
            </span>
            <Countdown />
          </motion.div>

          <motion.p
            variants={item}
            className="mt-10 flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.35em] text-sky"
          >
            <span className="inline-block h-px w-10 bg-red" aria-hidden />
            SST RoboSummit 2026 // Season 02
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-5 text-5xl font-bold uppercase leading-[0.95] tracking-tight text-snow sm:text-7xl lg:text-8xl"
          >
            Planetary
            <span className="block text-blue">Pioneers</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-silver sm:text-lg"
          >
            The School of Science and Technology&apos;s flagship robotics
            tournament. Six mission zones. One frontier. Build your machine,
            qualify your crew, and plant your flag on the summit leaderboard.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#registration"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-red bg-red px-8 py-4 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-snow transition-colors duration-200 hover:border-blue hover:bg-blue"
            >
              Register Now
            </motion.a>
            <motion.a
              href="#challenges"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-blue px-8 py-4 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-sky transition-colors duration-200 hover:bg-blue hover:text-snow"
            >
              View Challenges
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 grid grid-cols-2 gap-px border border-line bg-line lg:grid-cols-4"
        >
          {[
            { label: "Mission Zones", value: "06" },
            { label: "Crew Capacity", value: "48" },
            { label: "Divisions", value: "PRI 3-6" },
            { label: "Trophy", value: "UNKNOWN" },
          ].map((stat) => (
            <div key={stat.label} className="bg-panel px-5 py-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-steel">
                {stat.label}
              </p>
              <p className="mt-1 text-xl font-bold uppercase tracking-wide text-snow">
                {stat.value}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Countdown() {
  const [label, setLabel] = useState("T-MINUS --D --:--:--");

  useEffect(() => {
    const target = new Date(EVENT_DATE).getTime();
    const tick = () => {
      const diff = target - Date.now();
      if (diff <= 0) {
        setLabel("MISSION LIVE");
        return;
      }
      const d = Math.floor(diff / 86_400_000);
      const h = Math.floor((diff % 86_400_000) / 3_600_000);
      const m = Math.floor((diff % 3_600_000) / 60_000);
      const s = Math.floor((diff % 60_000) / 1000);
      const pad = (n: number) => String(n).padStart(2, "0");
      setLabel(`T-MINUS ${d}D ${pad(h)}:${pad(m)}:${pad(s)}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-sky">
      {label}
    </span>
  );
}

function OrbitalBackdrop() {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mouseX, mouseY]);

  const spring = { stiffness: 60, damping: 20, mass: 0.8 };
  const ringX = useSpring(useTransform(mouseX, [0, 1], [40, -40]), spring);
  const ringY = useSpring(useTransform(mouseY, [0, 1], [32, -32]), spring);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <svg className="absolute inset-0 h-full w-full text-line" role="presentation">
        <defs>
          <pattern id="hero-grid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M 56 0 L 0 0 0 56" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" opacity="0.45" />
      </svg>

      <ParticleNetwork />

      <motion.div
        style={{ x: ringX, y: ringY }}
        className="absolute -right-[400px] top-1/2 hidden -translate-y-1/2 md:block opacity-50"
      >
        <div className="relative h-[900px] w-[900px] animate-spin-slower">
          <svg viewBox="0 0 900 900" className="absolute inset-0 h-full w-full">
            <circle cx="450" cy="450" r="430" fill="none" stroke="var(--color-line)" strokeWidth="1" />
            <circle cx="450" cy="450" r="320" fill="none" stroke="var(--color-line-2)" strokeWidth="1" strokeDasharray="4 10" />
            <circle cx="450" cy="450" r="210" fill="none" stroke="var(--color-line)" strokeWidth="1" />
            <circle cx="450" cy="20" r="8" fill="var(--color-red)" />
            <circle cx="770" cy="450" r="7" fill="var(--color-blue)" />
            <circle cx="450" cy="660" r="6" fill="var(--color-sky)" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}

function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: any[] = [];
    const numParticles = Math.floor((width * height) / 12000); 

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        baseX: Math.random() * width,
        baseY: Math.random() * height,
        x: Math.random() * width,
        y: Math.random() * height,
        vx: 0,
        vy: 0,
        radius: Math.random() * 2 + 1.5,
        color: i % 4 === 0 ? "rgba(255, 60, 60, " : "rgba(14, 165, 233, "
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        const maxDist = 180;
        let forceX = 0;
        let forceY = 0;
        
        if (dist < maxDist) {
          const force = (maxDist - dist) / maxDist;
          forceX = (dx / dist) * force * -6;
          forceY = (dy / dist) * force * -6;
        }
        
        const sdx = p.baseX - p.x;
        const sdy = p.baseY - p.y;
        
        p.vx += forceX + sdx * 0.03;
        p.vy += forceY + sdy * 0.03;
        
        p.vx *= 0.85;
        p.vy *= 0.85;
        
        p.x += p.vx;
        p.y += p.vy;
      }

      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;
          
          if (distSq < 15000) {
            const opacity = 1 - distSq / 15000;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(100, 116, 139, ${opacity * 0.5})`; 
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + "1)";
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const onResize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full hidden lg:block opacity-75" aria-hidden />;
}
