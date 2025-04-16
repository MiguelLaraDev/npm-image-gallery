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
    container.style.background = "#f3f3f3";
    container.style.width = "100%";
    container.style.height = "auto";

    const large = new MainImage();
    const thumbs = new Thumbnails();

    container.append(large.element);
    container.append(thumbs.element);

    document.body.appendChild(container);

    thumbs.items = [
      {
        id: "pic-1",
        alt: "Example pic",
        src: "https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/428224.webp",
      },
      {
        id: "pic-2",
        alt: "Example pic",
        src: "https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/428224.webp",
      },
      {
        id: "pic-3",
        alt: "Example pic",
        src: "https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/428224.webp",
      },
    ];
  }
}

export default ImageGallery;
