# Photo Editor

Web-based photo editing application built with React, TypeScript and Canvas. This application allows users to edit images from the Lorem Picsum API and to download the results.

## Features

- **Image Selection**: Enter specific image IDs from Lorem Picsum to edit
- **Image Editing Capabilities**:
  - Adjust image dimensions (width and height)
  - Toggle grayscale and sepia filters
  - Apply blur effect (levels 1-10)
  - Real-time image preview
- **Persistent State**: Maintain editing state across page refreshes
- **Download**: Save edited images locally

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Image rendering**: Canvas
- **Styling**: Tailwind CSS
- **UI Components**: ShadcnUI (Radix UI)
- **State Management**: Zustand
- **API Client**: Axios + React Query
- **Form Management**: React Hook Form
- **Data validation**: Zod
- **Testing**: Vitest, React Testing Library, Nock and Falso
- **Code Quality**: ESLint + Prettier

## Reasoning for the Chosen Solution

While the provided image API offers raw images and applies effects server-side, I chose to handle the image rendering and effects locally within the app. This approach provides a more authentic image editing experience, allowing users to interactively apply filters like grayscale, blur, and resizing directly on the canvas. By leveraging the HTML `<canvas>` element, the app can easily apply these effects in real-time, and users can download the edited images directly. This solution avoids relying on an external service for effects, providing more control and flexibility for a true image editing workflow.

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and configure environment variables
4. Start the development server:
   ```bash
   npm run dev
   ```

## How to Use

1. Enter an image ID from Lorem Picsum (e.g., 1-1000) or a random image
2. Use the editing controls to:
   - Adjust image dimensions
   - Toggle grayscale mode
   - Set blur intensity (1-10)
3. Preview your changes in real-time
4. Click the download button to save your edited image

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run lint` - Run ESLint

## Project Structure

- `/src` - Application source code
  - `/api` - Lorem Picsum API integration
  - `/components` - Reusable UI components
  - `/hooks` - Custom React hooks
  - `/lib` - Utility functions and configurations
  - `/stores` - Zustand state stores
  - `/types` - TypeScript type definitions

## API Documentation

This project uses the Lorem Picsum API for image processing. For more information, visit:
[https://picsum.photos/](https://picsum.photos/)
