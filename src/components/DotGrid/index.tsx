import * as React from 'react';
import { useEffect, useRef } from 'react';

const SPACING = 24;
const DOT_RADIUS = 1;
const REACH = 140; // px around the pointer that light up
const BASE_ALPHA = 0.3;

const readChannels = (name: string): string =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

export const DotGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (canvas == null || ctx == null) {
      return;
    }

    const interactive = window.matchMedia(
      '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)'
    );
    const scheme = window.matchMedia('(prefers-color-scheme: dark)');

    let width = 0;
    let height = 0;
    let pointer: { x: number; y: number } | null = null; // viewport coordinates
    let intensity = 0; // eases between 0 and 1 so the glow fades instead of snapping
    let frame = 0;
    let dotColor = '';
    let accentColor = '';

    const readColors = (): void => {
      dotColor = readChannels('--muted');
      accentColor = readChannels('--accent');
    };

    const draw = (): void => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);

      for (let y = SPACING / 2; y < height; y += SPACING) {
        for (let x = SPACING / 2; x < width; x += SPACING) {
          ctx.fillStyle = `rgb(${dotColor} / ${BASE_ALPHA})`;
          ctx.beginPath();
          ctx.arc(x, y, DOT_RADIUS, 0, Math.PI * 2);
          ctx.fill();

          if (pointer === null || intensity === 0) {
            continue;
          }
          const distance = Math.hypot(x - (pointer.x - rect.left), y - (pointer.y - rect.top));
          const glow = Math.max(0, 1 - distance / REACH) ** 2 * intensity;
          if (glow > 0.01) {
            ctx.fillStyle = `rgb(${accentColor} / ${glow})`;
            ctx.beginPath();
            ctx.arc(x, y, DOT_RADIUS + glow, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    };

    const tick = (): void => {
      const target = pointer !== null ? 1 : 0;
      intensity += (target - intensity) * 0.15;
      if (Math.abs(target - intensity) < 0.01) {
        intensity = target;
      }
      draw();
      frame = intensity !== target ? requestAnimationFrame(tick) : 0;
    };

    const requestDraw = (): void => {
      if (frame === 0) {
        frame = requestAnimationFrame(tick);
      }
    };

    const resize = (): void => {
      const dpr = Math.max(window.devicePixelRatio, 1);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    };

    const onPointerMove = (event: PointerEvent): void => {
      if (!interactive.matches) {
        return;
      }
      pointer = { x: event.clientX, y: event.clientY };
      requestDraw();
    };

    const onPointerOut = (event: PointerEvent): void => {
      if (event.relatedTarget === null) {
        pointer = null;
        requestDraw();
      }
    };

    const onScroll = (): void => {
      if (pointer !== null) {
        requestDraw();
      }
    };

    const onSchemeChange = (): void => {
      readColors();
      draw();
    };

    readColors();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('pointerout', onPointerOut);
    window.addEventListener('scroll', onScroll, { passive: true });
    scheme.addEventListener('change', onSchemeChange);

    return (): void => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerout', onPointerOut);
      window.removeEventListener('scroll', onScroll);
      scheme.removeEventListener('change', onSchemeChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[30rem] w-full [mask-image:linear-gradient(to_bottom,black_30%,transparent)]"
    />
  );
};
