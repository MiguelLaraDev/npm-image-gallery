import { Slider } from "./components/Slider";
import { Thumbnails, type ThumbnailItem } from "./components/Thumbnails";

export interface ThumbnailClickEvent extends CustomEvent {
  detail: {
    id: string;
  };
}

export interface NavClickEvent extends CustomEvent {
  detail: {
    id: string;
  };
}

class ImageGallery {
  private element: HTMLElement;
  private slider = new Slider();
  private thumbs = new Thumbnails();
  private items: ThumbnailItem[] = [];

  constructor(selector: string, items: ThumbnailItem[]) {
    this.element = document.querySelector(selector) as HTMLElement;
    this.items = items;

    if (!this.element) {
      throw new Error(`Element with selector "${selector}" not found`);
    }

    this.init();
  }

  private init() {
    const container = document.createElement("div");
    container.style.width = "100%";
    container.style.height = "auto";

    container.append(this.slider.element);
    container.append(this.thumbs.element);

    document.body.appendChild(container);

    this.slider.items = this.items;
    this.thumbs.items = this.items;
  }
}

export default ImageGallery;
