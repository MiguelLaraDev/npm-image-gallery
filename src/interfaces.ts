export interface ThumbnailsProps {
  thumbs: {
    borderColor?: string;
    borderWidth?: string;
    width?: number;
    height?: number;
    useBorder?: boolean;
  };
}

export type ThumbnailItem = {
  id: string;
  alt: string;
  sizes: {
    thumbnail: string;
    large: string;
  };
};
