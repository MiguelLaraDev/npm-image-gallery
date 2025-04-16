import type { ThumbnailClickEvent } from "..";

export class MainImage {
  private _element: HTMLDivElement;

  constructor() {
    this._element = document.createElement("div");
    this.init();
  }

  private init() {
    this._element.style.width = "100%";
    this._element.style.height = "400px";

    document.addEventListener("thumbnailClick", (e: Event) => {
      const event = e as ThumbnailClickEvent;
      this.updateImage(event.detail.id);
    });
  }

  private updateImage(itemId: string) {
    console.log(itemId);
  }

  get element(): HTMLDivElement {
    return this._element;
  }
}
