import "../src/styles/image-gallery.css";
import type { Options, ThumbnailItem } from "./interfaces";
declare class ImageGallery {
    #private;
    constructor(selector: string, items: ThumbnailItem[], options?: Options);
}
export default ImageGallery;
