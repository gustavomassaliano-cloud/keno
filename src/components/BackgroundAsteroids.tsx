import React, { useEffect, useRef } from 'react';

const BackgroundAsteroids: React.FC = () => {
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

    // Data Streams (Substituindo os asteroides)
    class DataStream {
      x: number;
      y: number;
      speedX: number;
      speedY: number;
      length: number;
      color: string;
      opacity: number;
      headChar: string;

      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        // Distribuição inicial por toda a tela
        this.x = Math.random() * width + (initial ? 0 : width * 0.2);
        this.y = initial ? Math.random() * height : -(Math.random() * height * 0.5);
        
        // TEMPO MAIOR: Velocidades dramaticamente reduzidas (movimento elegante)
        const baseSpeed = Math.random() * 0.4 + 0.15;
        this.speedX = -baseSpeed; // Diagonal para esquerda
        this.speedY = baseSpeed;  // Diagonal para baixo
        
        this.length = Math.random() * 120 + 40; // Caudas longas de dados
        this.opacity = Math.random() * 0.3 + 0.05; // Opacidade sutil
        
        const colors = ['#C8102E', '#D5C2A5', '#1e293b', '#64748b'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.headChar = Math.random() > 0.5 ? '1' : '0'; // 0s e 1s na ponta
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Efeito Matrix/Tech: alterna o caractere da ponta aleatoriamente
        if (Math.random() < 0.05) {
          this.headChar = this.headChar === '1' ? '0' : '1';
        }

        // Se sair da tela, reseta
        if (this.y > height + this.length || this.x < -this.length) {
          this.reset();
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        // Cria um gradiente linear para a "cauda" de dados desaparecer suavemente
        const gradient = ctx.createLinearGradient(
          this.x, this.y, 
          this.x - this.speedX * this.length, 
          this.y - this.speedY * this.length
        );
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'transparent');

        // Desenha a linha (Trilha de dados)
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x - this.speedX * this.length, this.y - this.speedY * this.length);
        
        ctx.globalAlpha = this.opacity;
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.lineCap = 'butt'; // Corte reto (Tech) ao invés de arredondado
        ctx.stroke();

        // Desenha a cabeça da linha (Bit binário ou traço brilhante)
        ctx.globalAlpha = this.opacity + 0.3; // Ponta mais brilhante
        ctx.fillStyle = this.color;
        ctx.font = '10px monospace';
        ctx.fillText(this.headChar, this.x, this.y);
        ctx.globalAlpha = 1;
      }
    }

    // Tech Nodes (Substituindo a poeira redonda por formas geométricas lentas)
    class TechNode {
      x: number;
      y: number;
      size: number;
      speedY: number;
      opacity: number;
      color: string;
      shape: 'square' | 'plus';

      constructor() {
         this.x = Math.random() * width;
         this.y = Math.random() * height;
         this.size = Math.random() * 2 + 1;
         
         // Extremamente lento para criar uma atmosfera relaxante/high-tech
         this.speedY = -(Math.random() * 0.15 + 0.05); 
         
         this.opacity = Math.random() * 0.2 + 0.02;
         const colors = ['#C8102E', '#D5C2A5', '#1e293b'];
         this.color = colors[Math.floor(Math.random() * colors.length)];
         this.shape = Math.random() > 0.5 ? 'square' : 'plus';
      }

      update() {
         this.y += this.speedY;
         // Loop quando sai por cima
         if (this.y < -10) {
            this.y = height + 10;
            this.x = Math.random() * width;
         }
      }

      draw(ctx: CanvasRenderingContext2D) {
         ctx.globalAlpha = this.opacity;
         ctx.strokeStyle = this.color;
         ctx.fillStyle = this.color;
         
         if (this.shape === 'square') {
           ctx.fillRect(this.x, this.y, this.size, this.size);
         } else {
           // Desenha uma pequena mira/cruz (+)
           ctx.beginPath();
           ctx.moveTo(this.x - this.size, this.y);
           ctx.lineTo(this.x + this.size, this.y);
           ctx.moveTo(this.x, this.y - this.size);
           ctx.lineTo(this.x, this.y + this.size);
           ctx.lineWidth = 1;
           ctx.stroke();
         }
         ctx.globalAlpha = 1;
      }
    }

    // Cria as instâncias (Menos itens para manter a cena limpa e elegante)
    const streams: DataStream[] = [];
    for (let i = 0; i < 15; i++) {
      streams.push(new DataStream());
    }

    const nodes: TechNode[] = [];
    for (let i = 0; i < 40; i++) {
       nodes.push(new TechNode());
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      nodes.forEach(node => {
         node.update();
         node.draw(ctx);
      });

      streams.forEach(stream => {
        stream.update();
        stream.draw(ctx);
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[25]"
    />
  );
};

export default BackgroundAsteroids;
