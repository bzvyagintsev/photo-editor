import { RotateCcw } from 'lucide-react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface ResetProps {
  onReset: () => void;
}

export function Reset({ onReset }: ResetProps) {
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button onClick={onReset}>
            <RotateCcw className="size-full opacity-70 hover:opacity-100" />
          </button>
        </TooltipTrigger>
        <TooltipContent sideOffset={14} side="top">
          <p>Reset</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
