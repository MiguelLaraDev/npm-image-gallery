export interface Options {
    thumbs: ThumbnailsOptions;
    slider: SliderOptions;
}
export interface ThumbnailsOptions {
    borderColor?: string;
    borderWidth?: string;
    width?: number;
    height?: number;
    useBorder?: boolean;
}
export interface SliderOptions {
    mainColor?: string;
}
export type ThumbnailItem = {
    id: string;
    alt: string;
    sizes: {
        thumbnail: string;
        large: string;
    };
};
