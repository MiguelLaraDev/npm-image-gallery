import { MainImage } from "./components/MainImage";

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
    const mainContainer = document.createElement("div");
    mainContainer.style.border = "thin solid red";
    mainContainer.style.width = "100%";
    mainContainer.style.height = "500px";

    const mainImage = new MainImage(mainContainer);

    const thumbsContainer = document.createElement("div");
    thumbsContainer.style.border = "thin solid blue";
    thumbsContainer.style.width = "100%";
    thumbsContainer.style.height = "100px";

    mainContainer.appendChild(thumbsContainer);
    document.body.appendChild(mainContainer);
  }
}

export default ImageGallery;
