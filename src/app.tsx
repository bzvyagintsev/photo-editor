import { Layout } from '@/components/layouts/layout';
import { AppProvider } from '@/provider';

import { Download } from './components/editor/download';
import { ImageSelector } from './components/editor/image-selector';
import { MetaInfo } from './components/editor/meta-info';
import { Preview } from './components/editor/preview';
import { Sidebar } from './components/editor/sidebar';
import { Logo } from './components/ui/logo';

export default function App() {
  return (
    <AppProvider>
      <Layout>
        <header className="col-span-full flex items-center justify-between gap-1">
          <div className="flex items-center gap-4">
            <Logo />

            <ImageSelector />
          </div>

          <MetaInfo />

          <Download />
        </header>

        <Sidebar />

        <Preview />
      </Layout>
    </AppProvider>
  );
}
