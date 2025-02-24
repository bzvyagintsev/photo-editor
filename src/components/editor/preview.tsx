import { useCallback, useEffect, useRef } from 'react';

import { FilterType, useEditorStore } from '@/stores/editor';

import { NoContent } from './no-content';

export function Preview() {
  const { imageDetails, settings, setCanvasRef } = useEditorStore();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const renderCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const img = imageRef.current;

    if (!canvas || !ctx || !img) return;

    canvas.width = settings.width;
    canvas.height = settings.height;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.filter = [
      settings.filter === FilterType.GRAYSCALE && 'grayscale(1)',
      settings.filter === FilterType.SEPIA && 'sepia(1)',
      settings.blur && `blur(${settings.blur}px)`,
    ]
      .filter(Boolean)
      .join(' ');

    ctx.drawImage(img, 0, 0, settings.width, settings.height);
  }, [settings]);

  useEffect(() => {
    if (!imageDetails) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageDetails.download_url;
    img.onload = () => {
      imageRef.current = img;
      renderCanvas();
    };
  }, [imageDetails, renderCanvas]);

  useEffect(() => {
    renderCanvas();
  }, [settings, renderCanvas]);

  useEffect(() => {
    setCanvasRef(canvasRef);
  }, [setCanvasRef, imageDetails]);

  if (!imageDetails) {
    return <NoContent />;
  }

  return (
    <main className="relative col-span-4 overflow-hidden sm:col-span-5">
      <canvas
        role="img"
        className="size-full object-contain object-top"
        ref={canvasRef}
      />
      <p className="-mt-8 text-right text-sm text-muted-foreground">
        {settings.width} x {settings.height}
      </p>
    </main>
  );
}
