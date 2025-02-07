import { Settings2 } from 'lucide-react';

import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Slider } from '@/components/ui/slider';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface BlurProps {
  value: number;
  onChange: (value: number) => void;
}

export function Blur({ value, onChange }: BlurProps) {
  return (
    <Popover>
      <TooltipProvider delayDuration={300}>
        <Tooltip>
          <TooltipTrigger asChild>
            <PopoverTrigger>
              <Settings2 className="size-full opacity-70 hover:opacity-100" />
            </PopoverTrigger>
          </TooltipTrigger>
          <TooltipContent sideOffset={14} side="top">
            <p>Blur</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <PopoverContent side="right" sideOffset={56} className="w-32 bg-white">
        <div className="space-y-2">
          <Label>Blur</Label>
          <Slider
            min={0}
            max={10}
            step={1}
            value={[value]}
            onValueChange={([value]) => onChange(value)}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
