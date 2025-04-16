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
    this.addNavigation();

    document.addEventListener("thumbnailClick", (e: Event) => {
      const event = e as ThumbnailClickEvent;
      this.updateImage(event.detail.id);
    });
  }

  private addNavigation() {
    const leftNav = document.createElement("button");
    leftNav.classList.add("nav", "left");
    leftNav.textContent = "<";
    leftNav.addEventListener("click", () => this.handleNavClick());
    this._element.append(leftNav);

    const rightNav = document.createElement("button");
    rightNav.classList.add("nav", "right");
    rightNav.textContent = ">";
    rightNav.addEventListener("click", () => this.handleNavClick());
    this._element.append(rightNav);
  }

  private handleNavClick() {
    const current = 0; // TODO: Set it as a class member.

    console.log(current + 1, this._items.length);

    const nextIndex = current + 1 === this._items.length ? 0 : current + 1;
    const nextSelected = this._items[nextIndex].id;

    // TODO: Create a Navigation event.
    const event: ThumbnailClickEvent = new CustomEvent("thumbnailClick", {
      detail: { id: nextSelected },
      bubbles: true,
    });

    document.dispatchEvent(event);

    // TODO: move the slider x position...
  }

  private updateImage(itemId: string) {
    console.log(itemId);
  }

  private onItemsChange() {
    this._items?.forEach((item) => {
      const image = document.createElement("img");
      image.src = item.src;
      image.alt = item.alt;

      const slide = document.createElement("div");
      slide.id = `slide-${item.id}`;
      slide.classList.add("slide");
      slide.append(image);

      this._element.append(slide);
    });
  }

  get element(): HTMLDivElement {
    return this._element;
  }

  set items(injectedItems: ThumbnailItem[]) {
    this._items = injectedItems;
    this.onItemsChange();
  }
}
