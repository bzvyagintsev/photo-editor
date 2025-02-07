import { ReactNode } from 'react';

import { Toaster } from '@/components/ui/toaster';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto grid h-screen max-w-screen-xl grid-cols-6 grid-rows-[max-content_auto] gap-10 p-8 ">
      {children}
      <Toaster />
    </div>
  );
}
