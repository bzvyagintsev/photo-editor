import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { ImageDetails } from '@/types/images';

export enum FilterType {
  DEFAULT = 'default',
  GRAYSCALE = 'grayscale',
  SEPIA = 'sepia',
}

interface EditorState {
  imageDetails: ImageDetails | null;
  settings: {
    width: number;
    height: number;
    filter: FilterType;
    blur: number;
  };
  canvasRef: React.RefObject<HTMLCanvasElement> | null;
  setImageDetails: (details: ImageDetails) => void;
  setCanvasRef: (ref: React.RefObject<HTMLCanvasElement>) => void;
  updateSettings: (settings: Partial<EditorState['settings']>) => void;
  resetSettings: () => void;
}

const DEFAULT_SETTINGS = {
  width: 800,
  height: 600,
  filter: FilterType.DEFAULT,
  blur: 0,
};

export const useEditorStore = create<EditorState>()(
  persist(
    (set) => ({
      imageDetails: null,
      settings: DEFAULT_SETTINGS,
      canvasRef: null,
      setImageDetails: (details) =>
        set(() => ({
          imageDetails: details,
          settings: {
            ...DEFAULT_SETTINGS,
            width: details.width,
            height: details.height,
          },
        })),
      setCanvasRef: (ref) => set(() => ({ canvasRef: ref })),
      updateSettings: (newSettings) =>
        set((state) => ({
          settings: { ...state.settings, ...newSettings },
        })),
      resetSettings: () =>
        set((state) => ({
          settings: {
            ...DEFAULT_SETTINGS,
            width: state.imageDetails?.width || DEFAULT_SETTINGS.width,
            height: state.imageDetails?.height || DEFAULT_SETTINGS.height,
          },
        })),
    }),
    {
      name: 'editor-storage',
      partialize: (state) => ({
        imageDetails: state.imageDetails,
        settings: state.settings,
      }),
    },
  ),
);
