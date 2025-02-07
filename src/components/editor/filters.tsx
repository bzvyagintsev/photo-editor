import { Blend } from 'lucide-react';

import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { FilterType } from '@/stores/editor';

interface FiltersProps {
  value: FilterType;
  onChange: (value: FilterType) => void;
}

export function Filters({ value, onChange }: FiltersProps) {
  return (
    <Popover>
      <TooltipProvider delayDuration={300}>
        <Tooltip>
          <TooltipTrigger asChild>
            <PopoverTrigger>
              <Blend className="size-full opacity-70 hover:opacity-100" />
            </PopoverTrigger>
          </TooltipTrigger>
          <TooltipContent sideOffset={14} side="top">
            <p>Filters</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <PopoverContent side="right" sideOffset={56} className="w-32 bg-white">
        <RadioGroup
          defaultValue={FilterType.DEFAULT}
          value={value}
          onValueChange={onChange}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value={FilterType.DEFAULT}
              id={FilterType.DEFAULT}
            />
            <Label htmlFor={FilterType.DEFAULT}>Default</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value={FilterType.GRAYSCALE}
              id={FilterType.GRAYSCALE}
            />
            <Label htmlFor={FilterType.GRAYSCALE}>Grayscale</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value={FilterType.SEPIA} id={FilterType.SEPIA} />
            <Label htmlFor={FilterType.SEPIA}>Sepia</Label>
          </div>
        </RadioGroup>
      </PopoverContent>
    </Popover>
  );
}
