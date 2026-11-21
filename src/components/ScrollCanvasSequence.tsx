"use client";

import { useEffect, useRef } from "react";

const TOTAL_FRAMES = 50;

interface ScrollCanvasSequenceProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export default function ScrollCanvasSequence({
  containerRef,
}: ScrollCanvasSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const targetFrameRef = useRef<number>(0);
  const currentFrameRef = useRef<number>(0);
  const rafIdRef = useRef<number>(0);
  const needsRedrawRef = useRef<boolean>(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Detect prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let prefersReducedMotion = mediaQuery.matches;
    const handleMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches;
    };
    mediaQuery.addEventListener("change", handleMotionChange);

    // 1. Initialize Retina / DPR Canvas Sizing
    const resizeCanvas = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      needsRedrawRef.current = true;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas, { passive: true });

    // 2. Progressive Preloading of Frames (ezgif-frame-001.png to ezgif-frame-050.png)
    const loadedImages: HTMLImageElement[] = new Array(TOTAL_FRAMES);

    const onImageLoaded = (index: number) => {

      // Draw immediately when the first frame is ready
      if (index === 0 || Math.round(currentFrameRef.current) === index) {
        needsRedrawRef.current = true;
      }
    };

    // Load Frame 1 first with highest priority
    const firstImg = new Image();
    firstImg.src = "/imagens/ezgif-frame-001.png";
    firstImg.onload = () => {
      loadedImages[0] = firstImg;
      imagesRef.current[0] = firstImg;
      onImageLoaded(0);
      needsRedrawRef.current = true;
    };

    // Progressively load frames 2 to 50
    for (let i = 1; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = String(i + 1).padStart(3, "0");
      img.src = `/imagens/ezgif-frame-${frameNum}.png`;
      img.onload = () => {
        loadedImages[i] = img;
        imagesRef.current[i] = img;
        onImageLoaded(i);
      };
    }

    imagesRef.current = loadedImages;

    // 3. Frame Rendering Function
    const drawFrame = (frameIdx: number) => {
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      ctx.save();
      ctx.scale(dpr, dpr);

      // Deep dark luxury gold background fill
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, width, height);

      // Deep gold / amber luxury ambient glow behind the subject
      const goldGlow = ctx.createRadialGradient(
        width / 2,
        height * 0.48,
        width * 0.05,
        width / 2,
        height * 0.5,
        Math.max(width, height) * 0.65
      );
      goldGlow.addColorStop(0, "rgba(95, 68, 18, 0.22)");
      goldGlow.addColorStop(0.35, "rgba(35, 24, 8, 0.14)");
      goldGlow.addColorStop(0.7, "rgba(10, 8, 4, 0.08)");
      goldGlow.addColorStop(1, "rgba(0, 0, 0, 1)");
      ctx.fillStyle = goldGlow;
      ctx.fillRect(0, 0, width, height);

      // Find the target frame image or fallback to the nearest available loaded frame
      const target = Math.max(0, Math.min(TOTAL_FRAMES - 1, frameIdx));
      let currentImg: HTMLImageElement | null = null;

      if (
        imagesRef.current[target]?.complete &&
        imagesRef.current[target]?.naturalWidth > 0
      ) {
        currentImg = imagesRef.current[target];
      } else {
        // Search outwards for nearest loaded frame
        for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
          const prev = target - offset;
          if (
            prev >= 0 &&
            imagesRef.current[prev]?.complete &&
            imagesRef.current[prev]?.naturalWidth > 0
          ) {
            currentImg = imagesRef.current[prev];
            break;
          }
          const next = target + offset;
          if (
            next < TOTAL_FRAMES &&
            imagesRef.current[next]?.complete &&
            imagesRef.current[next]?.naturalWidth > 0
          ) {
            currentImg = imagesRef.current[next];
            break;
          }
        }
      }

      // Draw the frame centered with responsive cover scaling
      if (currentImg && currentImg.naturalWidth > 0) {
        const scale = Math.max(
          width / currentImg.naturalWidth,
          height / currentImg.naturalHeight
        );
        const drawW = currentImg.naturalWidth * scale;
        const drawH = currentImg.naturalHeight * scale;
        const drawX = (width - drawW) / 2;
        const drawY = (height - drawH) / 2;

        ctx.drawImage(currentImg, drawX, drawY, drawW, drawH);

        // Subtle luxury cinematic edge vignette: seamless fade to pure black with 0 visible borders
        const vignette = ctx.createRadialGradient(
          width / 2,
          height / 2,
          Math.min(width, height) * 0.32,
          width / 2,
          height / 2,
          Math.max(width, height) * 0.72
        );
        vignette.addColorStop(0, "rgba(0, 0, 0, 0)");
        vignette.addColorStop(0.65, "rgba(0, 0, 0, 0.15)");
        vignette.addColorStop(1, "rgba(0, 0, 0, 0.88)");
        ctx.fillStyle = vignette;
        ctx.fillRect(0, 0, width, height);
      }

      ctx.restore();
    };

    // 4. Scroll Tracking
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const totalScrollable = container.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / totalScrollable, 0), 1);

      // Map progress (0.0 to 1.0) directly to frame index (0 to 49)
      targetFrameRef.current = progress * (TOTAL_FRAMES - 1);

      if (prefersReducedMotion) {
        currentFrameRef.current = targetFrameRef.current;
        needsRedrawRef.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // 5. Persistent Animation Loop (requestAnimationFrame with Lerp)
    let lastRenderedFrame = -1;

    const animateLoop = () => {
      const target = targetFrameRef.current;
      const current = currentFrameRef.current;
      const diff = target - current;

      if (prefersReducedMotion) {
        currentFrameRef.current = target;
      } else {
        // Ultra-smooth Apple-grade lerp interpolation factor (0.09)
        currentFrameRef.current += diff * 0.09;
      }

      const roundedFrame = Math.round(currentFrameRef.current);

      if (roundedFrame !== lastRenderedFrame || needsRedrawRef.current) {
        drawFrame(roundedFrame);
        lastRenderedFrame = roundedFrame;
        needsRedrawRef.current = false;
      }

      rafIdRef.current = requestAnimationFrame(animateLoop);
    };

    rafIdRef.current = requestAnimationFrame(animateLoop);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", handleScroll);
      mediaQuery.removeEventListener("change", handleMotionChange);
      cancelAnimationFrame(rafIdRef.current);
    };
  }, [containerRef]);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      />
      {/* Deep luxury gold / dark ambience subtle overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_50%,rgba(160,120,40,0.06)_0%,rgba(15,12,6,0.3)_60%,transparent_100%)]"
      />
    </>
  );
}
