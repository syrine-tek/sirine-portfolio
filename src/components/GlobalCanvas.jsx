import { useEffect, useRef } from "react";

/**
 * GlobalCanvas — renders a fixed, full-viewport circuit-board
 * particle network behind the entire site. One canvas, zero overhead.
 */
function GlobalCanvas() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    // Generate particles — square nodes + dot particles
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      r: Math.random() * 1.6 + 0.4,
      alpha: Math.random() * 0.35 + 0.06,
      isNode: Math.random() > 0.65,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Circuit traces between close particles (right-angle style)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const alpha = 0.07 * (1 - dist / 140);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(178,124,30,${alpha})`;
            ctx.lineWidth = 0.55;
            // Orthogonal "circuit trace" path
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw each particle
      for (const p of particles) {
        ctx.beginPath();
        if (p.isNode) {
          // Square PCB solder pad
          ctx.rect(p.x - p.r * 1.5, p.y - p.r * 1.5, p.r * 3, p.r * 3);
          ctx.fillStyle = `rgba(178,124,30,${p.alpha})`;
        } else {
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${p.alpha * 0.45})`;
        }
        ctx.fill();

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;
      }

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", onResize);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="global-circuit-canvas" aria-hidden="true" />;
}

export default GlobalCanvas;
