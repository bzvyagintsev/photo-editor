import { describe, it, expect, vi } from 'vitest';

import { FilterType } from '@/stores/editor';
import { screen, renderApp, userEvent } from '@/testing/test-utils';

import { Filters } from '../filters';

describe('Filters', () => {
  const defaultProps = {
    value: FilterType.DEFAULT,
    onChange: vi.fn(),
  };

  it('shows filter options when clicked', async () => {
    renderApp(<Filters {...defaultProps} />);

    await userEvent.click(screen.getByRole('button'));

    expect(screen.getByLabelText('Default')).toBeInTheDocument();
    expect(screen.getByLabelText('Grayscale')).toBeInTheDocument();
    expect(screen.getByLabelText('Sepia')).toBeInTheDocument();
  });

  it('calls onChange when a filter is selected', async () => {
    const onChange = vi.fn();

    renderApp(<Filters value={FilterType.DEFAULT} onChange={onChange} />);

    await userEvent.click(screen.getByRole('button'));
    await userEvent.click(screen.getByLabelText('Grayscale'));

    expect(onChange).toHaveBeenCalledWith(FilterType.GRAYSCALE);
  });

  it('shows currently selected filter', async () => {
    renderApp(<Filters value={FilterType.SEPIA} onChange={vi.fn()} />);

    await userEvent.click(screen.getByRole('button'));

    const sepiaRadio = screen.getByLabelText('Sepia');

    expect(sepiaRadio).toBeChecked();
  });
});
