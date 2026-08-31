"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  driftX: number;
  driftY: number;
  offsetX: number;
  offsetY: number;
  radius: number;
  accent: boolean;
};

export default function WebNodes() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const LINK_DIST = 165;
    const PUSH_DIST = 200;
    const MOUSE_LINK_DIST = 200;
    const MAX_OFFSET = 52;

    let width = 0;
    let height = 0;
    let frame = 0;
    let last = 0;
    let hover = 0;
    let hoverTarget = 0;
    let nodes: Node[] = [];
    const pointer = { x: -99999, y: -99999 };

    const seed = () => {
      const total = Math.max(
        40,
        Math.min(120, Math.round((width * height) / 11000))
      );
      nodes = Array.from({ length: total }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        driftX: (Math.random() - 0.5) * 0.28,
        driftY: (Math.random() - 0.5) * 0.28,
        offsetX: 0,
        offsetY: 0,
        radius: 1.1 + Math.random() * 1.2,
        accent: Math.random() < 0.2,
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const advance = (dt: number) => {
      hover += (hoverTarget - hover) * (1 - Math.pow(0.86, dt));
      const decay = Math.pow(0.94, dt);
      for (const n of nodes) {
        n.offsetX *= decay;
        n.offsetY *= decay;

        const px = n.x + n.offsetX;
        const py = n.y + n.offsetY;
        const dx = px - pointer.x;
        const dy = py - pointer.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < PUSH_DIST * PUSH_DIST && d2 > 1) {
          const d = Math.sqrt(d2);
          const force = (1 - d / PUSH_DIST) ** 2 * 0.7 * hover;
          n.offsetX += (dx / d) * force * dt;
          n.offsetY += (dy / d) * force * dt;
        }

        const off = Math.hypot(n.offsetX, n.offsetY);
        if (off > MAX_OFFSET) {
          n.offsetX = (n.offsetX / off) * MAX_OFFSET;
          n.offsetY = (n.offsetY / off) * MAX_OFFSET;
        }

        n.x += n.driftX * dt;
        n.y += n.driftY * dt;

        if (n.x < -24) n.x += width + 48;
        else if (n.x > width + 24) n.x -= width + 48;
        if (n.y < -24) n.y += height + 48;
        else if (n.y > height + 24) n.y -= height + 48;
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1;

      const nearPointer = (x: number, y: number) => {
        if (hover < 0.02) return 0;
        const dx = x - pointer.x;
        const dy = y - pointer.y;
        const d2 = dx * dx + dy * dy;
        if (d2 >= MOUSE_LINK_DIST * MOUSE_LINK_DIST) return 0;
        return (1 - d2 / (MOUSE_LINK_DIST * MOUSE_LINK_DIST)) * hover;
      };

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        const ax = a.x + a.offsetX;
        const ay = a.y + a.offsetY;
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const bx = b.x + b.offsetX;
          const by = b.y + b.offsetY;
          const dx = ax - bx;
          const dy = ay - by;
          const d2 = dx * dx + dy * dy;
          if (d2 >= LINK_DIST * LINK_DIST) continue;
          const base = 1 - d2 / (LINK_DIST * LINK_DIST);
          const boost = Math.max(nearPointer(ax, ay), nearPointer(bx, by));
          const alpha = base * (0.26 + boost * 0.44);
          const red = Math.round(155 + boost * 100);
          ctx.strokeStyle = `rgba(${red}, ${Math.round(166 - boost * 80)}, ${Math.round(185 - boost * 110)}, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(ax, ay);
          ctx.lineTo(bx, by);
          ctx.stroke();
        }
      }

      if (hover > 0.02) {
        ctx.lineWidth = 1.2;
        for (const n of nodes) {
          const x = n.x + n.offsetX;
          const y = n.y + n.offsetY;
          const near = nearPointer(x, y);
          if (near <= 0) continue;
          ctx.strokeStyle = `rgba(255, 90, 71, ${near * 0.55})`;
          ctx.beginPath();
          ctx.moveTo(pointer.x, pointer.y);
          ctx.lineTo(x, y);
          ctx.stroke();
        }
        ctx.lineWidth = 1;
      }

      for (const n of nodes) {
        const x = n.x + n.offsetX;
        const y = n.y + n.offsetY;
        const near = nearPointer(x, y);
        if (near > 0.05) {
          ctx.beginPath();
          ctx.arc(x, y, n.radius + 3 + near * 4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 90, 71, ${near * 0.14})`;
          ctx.fill();
        }
        ctx.beginPath();
        ctx.arc(x, y, n.radius + near * 1.6, 0, Math.PI * 2);
        ctx.fillStyle =
          near > 0.05 || n.accent
            ? "rgba(255, 90, 71, 0.85)"
            : "rgba(200, 210, 226, 0.7)";
        ctx.fill();
      }

      if (hover > 0.02) {
        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 90, 71, ${0.7 * hover})`;
        ctx.fill();
      }
    };

    const loop = (now: number) => {
      const dt = Math.min((now - last) / 16.667, 3);
      last = now;
      advance(dt);
      render();
      frame = requestAnimationFrame(loop);
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const lx = e.clientX - rect.left;
      const ly = e.clientY - rect.top;
      pointer.x = lx;
      pointer.y = ly;
      hoverTarget = lx >= 0 && lx <= rect.width && ly >= 0 && ly <= rect.height ? 1 : 0;
    };
    const onPointerLeave = () => {
      hoverTarget = 0;
    };

    resize();
    window.addEventListener("resize", resize);

    if (reduced.matches) {
      render();
    } else {
      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerleave", onPointerLeave);
      last = performance.now();
      frame = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  const vignette =
    "radial-gradient(ellipse at center, black 60%, transparent 100%)";

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
      <div
        className="sticky top-0 h-screen w-full overflow-hidden"
        style={{ maskImage: vignette, WebkitMaskImage: vignette }}
      >
        <canvas
          ref={canvasRef}
          className="h-full w-full opacity-60"
        />
      </div>
    </div>
  );
}