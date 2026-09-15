import React, { useRef, useEffect } from "react";

function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width, height;
    let particles = [];
    let mouse = { x: null, y: null, radius: 120 };
    let animationFrameId;

    const particleColor = { r: 226, g: 232, b: 240 };

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = document.documentElement.scrollHeight;
    }

    function lerp(a, b, t) {
      return a + (b - a) * t;
    }

    class Particle {
      constructor() {
        this.baseX = Math.random() * width;
        this.baseY = Math.random() * height;
        this.x = this.baseX;
        this.y = this.baseY;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.size = Math.random() * 1.5 + 1;
      }

      update() {
        this.baseX += this.vx;
        this.baseY += this.vy;

        if (this.baseX < 0 || this.baseX > width) this.vx *= -1;
        if (this.baseY < 0 || this.baseY > height) this.vy *= -1;

        let dx = this.baseX - (mouse.x ?? -9999);
        let dy = this.baseY - (mouse.y ?? -9999);
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          this.x = this.baseX + Math.cos(angle) * force * 25;
          this.y = this.baseY + Math.sin(angle) * force * 25;
        } else {
          this.x = lerp(this.x, this.baseX, 0.08);
          this.y = lerp(this.y, this.baseY, 0.08);
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleColor.r}, ${particleColor.g}, ${particleColor.b}, 0.7)`;
        ctx.fill();
      }
    }

    function initParticles() {
      particles = [];
      const count = Math.floor((width * height) / 15000);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    }

    function connectParticles() {
      const maxDist = 120;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const opacity = 1 - dist / maxDist;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${particleColor.r}, ${particleColor.g}, ${particleColor.b}, ${opacity * 0.3})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      connectParticles();

      animationFrameId = requestAnimationFrame(animate);
    }

    function handleResize() {
      resize();
      initParticles();
    }

    function handleMouseMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY + window.scrollY;
    }

    function handleMouseLeave() {
      mouse.x = null;
      mouse.y = null;
    }

    resize();
    initParticles();
    animate();

    const remeasure = setTimeout(() => {
      resize();
      initParticles();
    }, 400);

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(remeasure);
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

return (
  <canvas
    ref={canvasRef}
    className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
  />
);
}

export default ParticleBackground;