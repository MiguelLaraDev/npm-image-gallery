import "../src/styles/image-gallery.css";
import { Slider } from "./components/Slider";
import { Thumbnails } from "./components/Thumbnails";
class ImageGallery {
    #wrapper;
    #slider;
    #thumbs;
    #items = [];
    constructor(selector, items, options) {
        this.#wrapper = document.querySelector(selector);
        this.#items = items;
        this.#slider = new Slider(options?.slider);
        this.#thumbs = new Thumbnails(options?.thumbs);
        if (!this.#wrapper) {
            throw new Error(`Element with selector "${selector}" not found`);
        }
        this.#init();
    }
    #init() {
        const container = document.createElement("div");
        container.className = "image-gallery";
        container.append(this.#slider.element);
        container.append(this.#thumbs.element);
        this.#wrapper.appendChild(container);
        this.#slider.items = this.#items;
        this.#thumbs.items = this.#items;
    }
}
export default ImageGallery;
//# sourceMappingURL=index.js.map