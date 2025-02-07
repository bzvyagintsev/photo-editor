import { Blur } from '@/components/editor/blur';
import { Filters } from '@/components/editor/filters';
import { Reset } from '@/components/editor/reset';
import { Scale } from '@/components/editor/scale';
import { useEditorStore } from '@/stores/editor';

export function Sidebar() {
  const { imageDetails, settings, updateSettings, resetSettings } =
    useEditorStore();

  if (!imageDetails) {
    return null;
  }

  const details = imageDetails;
  const aspectRatio = details.width / details.height;

  function updateWidth(width: number) {
    if (width < 1 || width > details.width) return;

    updateSettings({
      width,
      height: Math.round(width / aspectRatio),
    });
  }

  function updateHeight(height: number) {
    if (height < 1 || height > details.height) return;

    updateSettings({
      width: Math.round(height * aspectRatio),
      height,
    });
  }

  return (
    <aside className="z-10 col-span-2 sm:col-span-1">
      <div className="my-auto flex w-20 flex-col items-center justify-center gap-6 rounded-[16px] bg-white py-6 shadow-[0_20px_44px_0_hsla(0,0%,0%,0.1)]">
        <Blur
          value={settings.blur}
          onChange={(blur) => updateSettings({ blur })}
        />

        <Filters
          value={settings.filter}
          onChange={(filter) => updateSettings({ filter })}
        />

        <Scale
          width={settings.width}
          height={settings.height}
          onChangeWidth={updateWidth}
          onChangeHeight={updateHeight}
        />

        <Reset onReset={resetSettings} />
      </div>
    </aside>
  );
}
