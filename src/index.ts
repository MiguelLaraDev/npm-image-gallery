import { MainImage } from "./components/MainImage";
import { Thumbnails } from "./components/Thumbnails";

export interface ThumbnailClickEvent extends CustomEvent {
  detail: {
    id: string;
  };
}

class ImageGallery {
  private element: HTMLElement;
  private image = new MainImage();
  private thumbs = new Thumbnails();

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

    container.append(this.image.element);
    container.append(this.thumbs.element);

    document.body.appendChild(container);

    this.thumbs.items = [
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
