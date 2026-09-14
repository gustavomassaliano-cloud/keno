import React, { useEffect, useRef } from 'react';

const TechParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let particles: Particle[] = [];
    let mouseX = -1000;
    let mouseY = -1000;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
      color: string;
      shape: 'circle' | 'square' | 'plus' | 'binary';
      binaryChar: string;

      constructor(x: number, y: number) {
        this.x = x + (Math.random() - 0.5) * 15;
        this.y = y + (Math.random() - 0.5) * 15;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5 - 0.5; // Upward drift
        this.maxLife = Math.random() * 40 + 30;
        this.life = this.maxLife;
        this.size = Math.random() * 2.5 + 1;
        
        // Cores da paleta: Keno Red, Light Red, Beige Gold, Navy
        const colors = ['#C8102E', '#ef4444', '#D5C2A5', '#1e293b'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        
        // Formas "Tech": Pontos, quadrados minúsculos, cruzes (+) e binários (0/1)
        const shapes: ('circle' | 'square' | 'plus' | 'binary')[] = ['circle', 'square', 'plus', 'circle', 'binary'];
        this.shape = shapes[Math.floor(Math.random() * shapes.length)];
        this.binaryChar = Math.random() > 0.5 ? '0' : '1';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const opacity = (this.life / this.maxLife) * 0.8;
        ctx.globalAlpha = opacity;
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1.5;

        if (this.shape === 'circle') {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (this.shape === 'square') {
          ctx.fillRect(this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
        } else if (this.shape === 'plus') {
          ctx.beginPath();
          ctx.moveTo(this.x - this.size * 1.5, this.y);
          ctx.lineTo(this.x + this.size * 1.5, this.y);
          ctx.moveTo(this.x, this.y - this.size * 1.5);
          ctx.lineTo(this.x, this.y + this.size * 1.5);
          ctx.stroke();
        } else if (this.shape === 'binary') {
          ctx.font = `${Math.floor(this.size * 5)}px monospace`;
          ctx.fillText(this.binaryChar, this.x, this.y);
        }
      }
    }

    let isMoving = false;
    let lastMoveTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMoving = true;
      lastMoveTime = Date.now();
      
      // Spawn particles on mouse move (limit density)
      for(let i = 0; i < 2; i++) {
         particles.push(new Particle(mouseX, mouseY));
      }
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      if (isMoving && Date.now() - lastMoveTime > 100) {
        isMoving = false;
      }

      // Draw and update particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw(ctx);
        if (p.life <= 0) {
          particles.splice(i, 1);
        }
      }
      
      // Performance safeguard: Limit max particles on screen
      if (particles.length > 200) {
        particles.splice(0, particles.length - 200);
      }
      
      ctx.globalAlpha = 1; // Reset alpha
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
    />
  );
};

export default TechParticles;
