import type { NavClickEvent, ThumbnailClickEvent } from "..";
import chevronLeft from "../assets/chevron-left.svg?raw";
import chevronRight from "../assets/chevron-right.svg?raw";
import "../styles/slider.css";
import type { ThumbnailItem } from "./Thumbnails";

export class Slider {
  private _element: HTMLDivElement;
  private _items: ThumbnailItem[] = [];

  private currentIndex = 0;
  private list: HTMLDivElement;

  constructor() {
    this._element = document.createElement("div");
    this.list = document.createElement("div");

    this.init();
  }

  private init() {
    this._element.classList.add("slider");

    this.list.classList.add("list");
    this._element.append(this.list);

    this.addNavigation();

    document.addEventListener("thumbnailClick", (e: Event) => {
      const event = e as ThumbnailClickEvent;
      this.updateImage(event.detail.id);
    });
  }

  private addNavigation() {
    const left = document.createElement("button");
    left.classList.add("nav", "left");
    left.innerHTML = chevronLeft;
    left.addEventListener("click", () => this.handleNavClick("left"));

    const right = document.createElement("button");
    right.classList.add("nav", "right");
    right.innerHTML = chevronRight;
    right.addEventListener("click", () => this.handleNavClick("right"));

    this._element.append(left);
    this._element.append(right);
  }

  private handleNavClick(direction: "left" | "right") {
    this.currentIndex += direction === "right" ? 1 : -1;
    this.currentIndex = (this.currentIndex + this._items.length) % this._items.length;

    this.updateSliderPosition();
    this.dispatchNavEvent();
  }

  private dispatchNavEvent() {
    const event: NavClickEvent = new CustomEvent("navClick", {
      detail: { id: this._items[this.currentIndex].id },
      bubbles: true,
    });

    document.dispatchEvent(event);
  }

  private updateSliderPosition() {
    const width = this._element.clientWidth;

    this.list.style.transform = `translateX(${width * this.currentIndex * -1}px)`;
  }

  private updateImage(itemId: string) {
    // this.updateSliderPosition();
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

      this.list.append(slide);
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
