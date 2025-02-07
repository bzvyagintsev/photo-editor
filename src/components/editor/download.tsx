import { Download as DownloadIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useEditorStore } from '@/stores/editor';

export function Download() {
  const { imageDetails, canvasRef } = useEditorStore();

  function onDownloadClick() {
    if (!imageDetails || !canvasRef?.current) return;

    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.download = `edited_${imageDetails.id}.jpg`;
    link.href = canvas.toDataURL('image/jpeg', 0.8);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  if (!imageDetails || !canvasRef?.current) {
    return null;
  }

  return (
    <Button variant="outline" onClick={onDownloadClick}>
      <span className="hidden md:block">Export</span> <DownloadIcon />
    </Button>
  );
}
