import "../src/styles/image-gallery.css";
import { Slider } from "./components/Slider";
import { Thumbnails } from "./components/Thumbnails";
import type { ThumbnailItem } from "./interfaces";

class ImageGallery {
  #wrapper: HTMLElement;
  #slider = new Slider();
  #thumbs = new Thumbnails();
  #items: ThumbnailItem[] = [];

  constructor(selector: string, items: ThumbnailItem[]) {
    this.#wrapper = document.querySelector(selector) as HTMLElement;
    this.#items = items;

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
