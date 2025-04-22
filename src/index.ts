import css from "@styles/image-gallery.css?inline";
import { Slider } from "./components/Slider";
import { Thumbnails } from "./components/Thumbnails";
import type { Options, ThumbnailItem } from "./interfaces";

class ImageGallery {
  #wrapper: HTMLElement;
  #slider;
  #thumbs;
  #items: ThumbnailItem[] = [];

  constructor(selector: string, items: ThumbnailItem[], options?: Options) {
    this.#wrapper = document.querySelector(selector) as HTMLElement;
    this.#items = items;
    this.#slider = new Slider(options?.slider);
    this.#thumbs = new Thumbnails(options?.thumbs);

    if (!this.#wrapper) {
      throw new Error(`Element with selector "${selector}" not found`);
    }

    this.#init();
  }

  async #init() {
    const stylesheet = new CSSStyleSheet();
    await stylesheet.replace(css);
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, stylesheet];

    const container = document.createElement("div");
    container.id = "mlaradev-image-gallery";
    container.className = "image-gallery";

    container.append(this.#slider.element);
    container.append(this.#thumbs.element);

    this.#wrapper.appendChild(container);

    this.#slider.items = this.#items;
    this.#thumbs.items = this.#items;
  }
}

export default ImageGallery;
