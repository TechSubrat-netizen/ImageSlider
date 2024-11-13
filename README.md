# Image Slider

This is a simple image slider application built with React. The slider allows you to navigate through a set of images using left and right arrows.

## Features

- **Next and Previous Arrows**: Use arrows to navigate through the images.
- **Looping Slider**: When the slider reaches the end of the image list, it loops back to the start, and vice versa.
- **Dynamic Image Display**: Only the current image is displayed at any time.

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites

- **Node.js** and **npm** installed on your machine.
- **React** and **Vite** (if you're using Vite for bundling, which is typical for modern React projects).


### Usage

- **Left Arrow**: Click to view the previous image.
- **Right Arrow**: Click to view the next image.

### Code Explanation

- **State Management**: The `useState` hook is used to manage the current image index.
- **nextSlide Function**: Increments the `current` index and loops back to the start if it reaches the last image.
- **prevSlide Function**: Decrements the `current` index and loops back to the last image if it reaches the start.
- **Conditional Rendering**: Only the image matching the `current` index is displayed on the screen.

### Customization

To add more images, place them in the `public` folder and add their paths to the `images` array in `App.js`.



