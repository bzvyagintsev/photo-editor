import { describe, it, expect, vi, beforeEach } from 'vitest';

import { useEditorStore } from '@/stores/editor';
import { generateImageDetails } from '@/testing/data-generators';
import { screen, renderApp, act } from '@/testing/test-utils';

import { Preview } from '../preview';

describe('Preview', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders no content when no image is loaded', () => {
    renderApp(<Preview />);
    expect(
      screen.getByText(/Choose photo to start editing/i),
    ).toBeInTheDocument();
  });

  it('renders canvas when image is loaded', () => {
    act(() => {
      useEditorStore.getState().setImageDetails(generateImageDetails());
    });

    renderApp(<Preview />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('updates canvas when settings change', async () => {
    const image2 = generateImageDetails();

    act(() => {
      useEditorStore.getState().setImageDetails(generateImageDetails());
    });

    const { rerender } = renderApp(<Preview />);

    act(() => {
      useEditorStore.getState().setImageDetails(image2);
    });

    rerender(<Preview />);

    expect(
      screen.getByText(`${image2.width} x ${image2.height}`),
    ).toBeInTheDocument();
  });

  it('sets canvas ref on mount', () => {
    const spy = vi.spyOn(useEditorStore.getState(), 'setCanvasRef');

    renderApp(<Preview />);

    expect(spy).toHaveBeenCalled();
  });
});
