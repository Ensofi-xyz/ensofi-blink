import React, { useEffect, useRef } from 'react';

const CanvasStarsBackground: React.FC<CanvasStarsBackgroundProps> = ({
  width,
  height,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvas2Ref = useRef<HTMLCanvasElement>(null);
  const hue = 217;
  const stars: any[] = [];
  const maxStars = 1400;

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;

    const canvas2 = canvas2Ref.current!;
    const ctx2 = canvas2.getContext('2d')!;
    canvas2.width = 100;
    canvas2.height = 100;
    const half = canvas2.width / 2;
    const gradient2 = ctx2.createRadialGradient(
      half,
      half,
      0,
      half,
      half,
      half,
    );
    gradient2.addColorStop(0.025, '#fff');
    gradient2.addColorStop(0.1, `hsl(${hue}, 61%, 33%)`);
    gradient2.addColorStop(0.25, `hsl(${hue}, 64%, 6%)`);
    gradient2.addColorStop(1, 'transparent');

    ctx2.fillStyle = gradient2;
    ctx2.beginPath();
    ctx2.arc(half, half, half, 0, Math.PI * 2);
    ctx2.fill();

    function random(min: number, max: number) {
      if (min > max) {
        const hold = max;
        max = min;
        min = hold;
      }

      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function maxOrbit(x: number, y: number) {
      const max = Math.max(x, y);
      const diameter = Math.round(Math.sqrt(max * max + max * max));
      return diameter / 2;
    }

    class Star {
      orbitRadius: number;
      radius: number;
      orbitX: number;
      orbitY: number;
      timePassed: number;
      speed: number;
      alpha: number;

      constructor() {
        this.orbitRadius = random(maxOrbit(width, height), 0);
        this.radius = random(60, this.orbitRadius) / 12;
        this.orbitX = width / 2;
        this.orbitY = height / 2;
        this.timePassed = random(0, maxStars);
        this.speed = random(this.orbitRadius, 0) / 50000;
        this.alpha = random(2, 10) / 10;

        stars.push(this);
      }

      draw() {
        const x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX;
        const y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY;
        const twinkle = random(10, 0);

        if (twinkle === 1 && this.alpha > 0) {
          this.alpha -= 0.05;
        } else if (twinkle === 2 && this.alpha < 1) {
          this.alpha += 0.05;
        }

        ctx.globalAlpha = this.alpha;
        ctx.drawImage(
          canvas2,
          x - this.radius / 2,
          y - this.radius / 2,
          this.radius,
          this.radius,
        );
        this.timePassed += this.speed;
      }
    }

    for (let i = 0; i < maxStars; i++) {
      new Star();
    }

    const animation = () => {
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 0.8;
      ctx.fillStyle = `hsla(${hue}, 64%, 6%, 1)`;
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = 'lighter';
      for (let i = 1, l = stars.length; i < l; i++) {
        stars[i].draw();
      }

      window.requestAnimationFrame(animation);
    };

    animation();
  }, [width, height]);

  return (
    <>
      <canvas ref={canvasRef} width={width} height={height} />
      <canvas ref={canvas2Ref} style={{ display: 'none' }} />
    </>
  );
};

export default CanvasStarsBackground;

interface CanvasStarsBackgroundProps {
  width: number;
  height: number;
}
