import { Slider } from "./components/Slider";
import { Thumbnails } from "./components/Thumbnails";

const items = [
  {
    id: "pic-1",
    alt: "Example pic",
    src: "https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/428224.webp",
  },
  {
    id: "pic-2",
    alt: "Example pic",
    src: "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_42/428224/17111548_800.jpg",
  },
  {
    id: "pic-3",
    alt: "Example pic",
    src: "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_42/428224/17105808_800.jpg",
  },
];

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

  constructor(selector: string) {
    this.element = document.querySelector(selector) as HTMLElement;

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

    this.slider.items = items;
    this.thumbs.items = items;
  }
}

export default ImageGallery;
