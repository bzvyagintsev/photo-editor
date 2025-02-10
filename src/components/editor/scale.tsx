import { Scaling } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface ScaleProps {
  width: number;
  height: number;
  onChangeWidth: (value: number) => void;
  onChangeHeight: (value: number) => void;
}

export function Scale({
  width,
  height,
  onChangeWidth,
  onChangeHeight,
}: ScaleProps) {
  return (
    <Popover>
      <TooltipProvider delayDuration={300}>
        <Tooltip>
          <TooltipTrigger asChild>
            <PopoverTrigger>
              <Scaling className="size-full opacity-70 hover:opacity-100" />
            </PopoverTrigger>
          </TooltipTrigger>
          <TooltipContent sideOffset={14} side="top">
            <p>Scale</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <PopoverContent side="right" sideOffset={56} className="w-64 bg-white">
        <div className="space-y-2">
          <Label>Dimensions</Label>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label className="text-xs" htmlFor="width">
                Width
              </Label>
              <Input
                id="width"
                type="number"
                value={width}
                onChange={(e) => onChangeWidth(Number(e.target.value))}
              />
            </div>
            <div>
              <Label className="text-xs" htmlFor="height">
                Height
              </Label>
              <Input
                id="height"
                type="number"
                value={height}
                onChange={(e) => onChangeHeight(Number(e.target.value))}
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
