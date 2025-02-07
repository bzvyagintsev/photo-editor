// import { screen, fireEvent } from '@testing-library/react';
// import { describe, it, expect, vi } from 'vitest';

// import { useEditorStore } from '@/stores/editor';
// import { renderApp } from '@/testing/test-utils';

// import { Preview } from '../preview';

// vi.mock('canvas', () => ({
//   getContext: vi.fn(() => ({
//     drawImage: vi.fn(),
//     clearRect: vi.fn(),
//   })),
// }));

// const mockImageDetails = {
//   id: '1',
//   author: 'Test Author',
//   width: 800,
//   height: 600,
//   url: 'https://test.com/image',
//   download_url: 'https://test.com/image/download',
// };

// describe('ImageEditor', () => {
//   it('shows placeholder when no image is selected', () => {
//     renderApp(<Preview />);
//     expect(
//       screen.getByText('Select an image to start editing'),
//     ).toBeInTheDocument();
//   });

//   it('displays image details when image is loaded', () => {
//     useEditorStore.setState({
//       imageDetails: mockImageDetails,
//       settings: {
//         width: 800,
//         height: 600,
//         grayscale: false,
//         blur: 0,
//       },
//     });

//     renderApp(<Preview />);
//     expect(
//       screen.getByText(`Photo by ${mockImageDetails.author}`),
//     ).toBeInTheDocument();
//     expect(screen.getByText(`ID: ${mockImageDetails.id}`)).toBeInTheDocument();
//   });

//   it('updates settings when controls are changed', () => {
//     useEditorStore.setState({
//       imageDetails: mockImageDetails,
//       settings: {
//         width: 800,
//         height: 600,
//         grayscale: false,
//         blur: 0,
//       },
//     });

//     renderApp(<Preview />);

//     // Test grayscale toggle
//     const grayscaleSwitch = screen.getByRole('switch');
//     fireEvent.click(grayscaleSwitch);

//     const state = useEditorStore.getState();
//     expect(state.settings.grayscale).toBe(true);
//   });
// });
