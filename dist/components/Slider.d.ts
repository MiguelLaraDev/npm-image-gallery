import type { SliderOptions, ThumbnailItem } from "../interfaces";
import "../styles/slider.css";
export declare class Slider {
    #private;
    constructor(options?: SliderOptions);
    get element(): HTMLDivElement;
    set items(injectedItems: ThumbnailItem[]);
}
