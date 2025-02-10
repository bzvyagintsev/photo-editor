import { describe, it, expect, vi, beforeEach } from 'vitest';

import { screen, renderApp, userEvent } from '@/testing/test-utils';

import { Scale } from '../scale';

describe('Scale', () => {
  const defaultProps = {
    width: 800,
    height: 600,
    onChangeWidth: vi.fn(),
    onChangeHeight: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('displays current dimensions', async () => {
    renderApp(<Scale {...defaultProps} />);

    await userEvent.click(screen.getByRole('button'));

    expect(screen.getByDisplayValue(defaultProps.width)).toBeInTheDocument();
    expect(screen.getByDisplayValue(defaultProps.height)).toBeInTheDocument();
  });

  it('updates width', async () => {
    renderApp(<Scale {...defaultProps} />);

    await userEvent.click(screen.getByRole('button'));

    const widthInput = screen.getByRole('spinbutton', { name: /width/i });

    await userEvent.click(widthInput);
    await userEvent.type(widthInput, '0');

    expect(defaultProps.onChangeWidth).toHaveBeenCalledWith(8000);
  });

  it('updates height', async () => {
    renderApp(<Scale {...defaultProps} />);

    await userEvent.click(screen.getByRole('button'));

    const heightInput = screen.getByRole('spinbutton', { name: /height/i });

    await userEvent.click(heightInput);
    await userEvent.type(heightInput, '0');

    expect(defaultProps.onChangeHeight).toHaveBeenCalledWith(6000);
  });
});
