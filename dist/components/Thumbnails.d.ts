import type { ThumbnailItem, ThumbnailsOptions } from "../interfaces";
import "../styles/thumbnails.css";
export declare class Thumbnails {
    #private;
    constructor(options?: ThumbnailsOptions);
    get element(): HTMLDivElement;
    set items(injectedItems: ThumbnailItem[]);
}
