import { zodResolver } from '@hookform/resolvers/zod';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { useImageById, useRandomImage } from '@/api/images';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useEditorStore } from '@/stores/editor';
import { ImageDetails } from '@/types/images';

const formSchema = z.object({
  id: z.string().min(1).max(4),
});

export function ImageSelector() {
  const [open, setOpen] = useState(false);
  const { setImageDetails } = useEditorStore();
  const { toast } = useToast();

  const getImageByIdMutation = useImageById({
    onSuccess: (data: ImageDetails) => {
      setImageDetails(data);
      setOpen(false);
      toast({
        title: 'Success',
        description: 'Image loaded successfully',
      });
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Failed to load image. Please try a different ID.',
        variant: 'destructive',
      });
    },
  });

  const getRandomImageMutation = useRandomImage({
    onSuccess: (data: ImageDetails) => {
      setImageDetails(data);
      setOpen(false);
      toast({
        title: 'Success',
        description: 'Random image loaded successfully',
      });
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Failed to load random image. Please try again.',
        variant: 'destructive',
      });
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: '',
    },
  });

  function onSubmit({ id }: z.infer<typeof formSchema>) {
    getImageByIdMutation.mutate(id);
  }

  function isLoading() {
    return getImageByIdMutation.isLoading || getRandomImageMutation.isLoading;
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <span className="hidden md:block">Choose photo</span> <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Choose photo</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="id"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex w-full items-center space-x-2">
                      <Input
                        type="number"
                        placeholder="Enter photo ID"
                        {...field}
                      />
                      <Button type="submit" disabled={isLoading()}>
                        Load
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-center">
              <Button
                type="button"
                variant="outline"
                onClick={() => getRandomImageMutation.mutate()}
                disabled={isLoading()}
              >
                Get random photo
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
