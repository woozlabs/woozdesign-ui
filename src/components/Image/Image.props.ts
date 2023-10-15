import { RadiusProp } from '@/utils';

export interface ImageProps extends RadiusProp {
  src: string;
  alt: string;
  placeholder?: string; // A smaller, quickly loading version or a solid color
  className?: string;
  width?: string | number; // Width of the image container
  height?: string | number; // Height of the image container
  lazyLoad?: boolean;
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'; // CSS object-fit values
  onLoad?: () => void;
  onError?: () => void;
}
