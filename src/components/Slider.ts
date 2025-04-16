import type { ThumbnailClickEvent } from "..";
import "../styles/slider.css";
import type { ThumbnailItem } from "./Thumbnails";

export class Slider {
  private _element: HTMLDivElement;
  private _items: ThumbnailItem[] = [];

  constructor() {
    this._element = document.createElement("div");
    this.init();
  }

  private init() {
    this._element.classList.add("slider");

    document.addEventListener("thumbnailClick", (e: Event) => {
      const event = e as ThumbnailClickEvent;
      this.updateImage(event.detail.id);
    });
  }

  private updateImage(itemId: string) {
    console.log(itemId);
  }

  private onItemsChange() {
    const image = document.createElement("img");
    image.src = this._items?.[0].src;
    image.alt = this._items?.[0].alt;

    const wrapper = document.createElement("div");
    wrapper.id = `large-image-${this._items?.[0].id}`;
    wrapper.append(image);

    this._element.append(wrapper);
  }

  get element(): HTMLDivElement {
    return this._element;
  }

  set items(injectedItems: ThumbnailItem[]) {
    this._items = injectedItems;
    this.onItemsChange();
  }
}
