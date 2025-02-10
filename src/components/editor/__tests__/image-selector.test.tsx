import nock from 'nock';
import { describe, it, expect, vi, beforeEach } from 'vitest';

import { API_URL } from '@/lib/api-client';
import { useEditorStore } from '@/stores/editor';
import { generateImageDetails } from '@/testing/data-generators';
import {
  screen,
  renderApp,
  userEvent,
  within,
  waitFor,
} from '@/testing/test-utils';

import { ImageSelector } from '../image-selector';

describe('ImageSelector', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('opens dialog when clicked', async () => {
    renderApp(<ImageSelector />);

    await userEvent.click(screen.getByRole('button'));

    const dialog = screen.getByRole('dialog');

    expect(dialog).toBeInTheDocument();
    expect(within(dialog).getByText('Choose photo')).toBeInTheDocument();
  });

  it('should load image by ID successfully', async () => {
    const spy = vi.spyOn(useEditorStore.getState(), 'setImageDetails');

    const imageDetails = generateImageDetails();
    const imageId = '1234';

    nock(API_URL).get(`/id/${imageId}/info`).reply(200, imageDetails);

    renderApp(<ImageSelector />);

    await userEvent.click(screen.getByRole('button'));
    await userEvent.type(screen.getByRole('spinbutton'), imageId);
    await userEvent.click(screen.getByRole('button', { name: /load/i }));

    await waitFor(() => expect(spy).toHaveBeenCalledWith(imageDetails));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('should load random image successfully', async () => {
    const spy = vi.spyOn(useEditorStore.getState(), 'setImageDetails');

    const imageDetails = generateImageDetails();

    nock(API_URL).get(`/seed/editor/info`).reply(200, imageDetails);

    renderApp(<ImageSelector />);

    await userEvent.click(screen.getByRole('button'));
    await userEvent.click(
      screen.getByRole('button', { name: /get random photo/i }),
    );

    await waitFor(() => expect(spy).toHaveBeenCalledWith(imageDetails));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('shows error toast on failed image load', async () => {
    nock(API_URL).get(`/seed/editor/info`).reply(500);

    renderApp(<ImageSelector />);

    await userEvent.click(screen.getByRole('button'));
    await userEvent.type(screen.getByRole('spinbutton'), '123');
    await userEvent.click(screen.getByRole('button', { name: /load/i }));

    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
});
