import { MainImage } from "./components/MainImage";
import { Thumbnails } from "./components/Thumbnails";

class ImageGallery {
  private element: HTMLElement;

  constructor(selector: string) {
    this.element = document.querySelector(selector) as HTMLElement;

    if (!this.element) {
      throw new Error(`Element with selector "${selector}" not found`);
    }

    this.init();
  }

  private init() {
    const container = document.createElement("div");
    container.style.border = "thin solid red";
    container.style.width = "100%";
    container.style.height = "auto";

    const large = new MainImage();
    const thumbs = new Thumbnails();

    container.append(large.element);
    container.append(thumbs.element);

    document.body.appendChild(container);

    thumbs.items = [
      "a",
      "b",
      "c",
      "a",
      "b",
      "c",
      "a",
      "b",
      "c",
      "a",
      "b",
      "c",
      "a",
      "b",
      "c",
      "a",
      "b",
      "c",
    ];
  }
}

export default ImageGallery;
