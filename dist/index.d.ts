declare class ImageGallery {
    #private;
    constructor(selector: string, items: ThumbnailItem[], options?: Options);
}
export default ImageGallery;

declare interface Options {
    thumbs: ThumbnailsOptions;
    slider: SliderOptions;
}

declare interface SliderOptions {
    mainColor?: string;
}

declare type ThumbnailItem = {
    id: string;
    alt: string;
    sizes: {
        thumbnail: string;
        large: string;
    };
};

declare interface ThumbnailsOptions {
    borderColor?: string;
    borderWidth?: string;
    width?: number;
    height?: number;
    useBorder?: boolean;
}

export { }
