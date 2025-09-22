import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

// Base design size (Reference: a standard mobile screen size, e.g., iPhone 11 - 375x812)
const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

// Function to scale sizes based on screen width
export const scale = (size: number) => (width / BASE_WIDTH) * size;

// Function to scale sizes based on screen height
export const verticalScale = (size: number) => (height / BASE_HEIGHT) * size;

// Function to scale text size
export const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

// Function to get percentage-based width
export const widthPercentage = (percentage: number) => (width * percentage) / 100;

// Function to get percentage-based height
export const heightPercentage = (percentage: number) => (height * percentage) / 100;
