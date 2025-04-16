import type { NavClickEvent, ThumbnailClickEvent } from "..";
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
    this.currentIndex === this._items.length - 1 ? (this.currentIndex = 0) : this.currentIndex++;

    const event: NavClickEvent = new CustomEvent("navClick", {
      detail: { id: this._items[this.currentIndex].id },
      bubbles: true,
    });

    document.dispatchEvent(event);

    this.updateSliderPosition();
  }

  private updateSliderPosition() {
    const width = this._element.clientWidth;

    console.log(
      "currentIndex:",
      this.currentIndex,
      "width:",
      width,
      "x:",
      this.currentIndex * width,
      `translateX(${width * this.currentIndex}px);`
    );

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
