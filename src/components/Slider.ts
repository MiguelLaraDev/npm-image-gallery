import type { NavClickEvent, ThumbnailClickEvent } from "..";
import chevronLeft from "../assets/chevron-left.svg?raw";
import chevronRight from "../assets/chevron-right.svg?raw";
import "../styles/slider.css";
import type { ThumbnailItem } from "./Thumbnails";

export class Slider {
  #currentIndex = 0;
  #element: HTMLDivElement;
  #items: ThumbnailItem[] = [];
  #list: HTMLDivElement;

  constructor() {
    this.#element = document.createElement("div");
    this.#list = document.createElement("div");

    this.#init();
  }

  #init() {
    this.#element.classList.add("slider");

    this.#list.classList.add("list");
    this.#element.append(this.#list);

    this.#addNavigation();

    document.addEventListener("thumbnailClick", (e: Event) => {
      const event = e as ThumbnailClickEvent;
      this.#updateImage(event.detail.id);
    });
  }

  #addNavigation() {
    const left = document.createElement("button");
    left.classList.add("nav", "left");
    left.innerHTML = chevronLeft;
    left.addEventListener("click", () => this.#handleNavClick("left"));

    const right = document.createElement("button");
    right.classList.add("nav", "right");
    right.innerHTML = chevronRight;
    right.addEventListener("click", () => this.#handleNavClick("right"));

    this.#element.append(left);
    this.#element.append(right);
  }

  #handleNavClick(direction: "left" | "right") {
    this.#currentIndex += direction === "right" ? 1 : -1;
    this.#currentIndex = (this.#currentIndex + this.#items.length) % this.#items.length;

    this.#updateSliderPosition();
    this.#dispatchNavEvent();
  }

  #dispatchNavEvent() {
    if (!this.#items.length) return;

    const event: NavClickEvent = new CustomEvent("navClick", {
      detail: { id: this.#items[this.#currentIndex].id },
      bubbles: true,
    });

    document.dispatchEvent(event);
  }

  #updateSliderPosition() {
    const width = this.#element.clientWidth;
    this.#list.style.transform = `translateX(${width * this.#currentIndex * -1}px)`;
  }

  #updateImage(itemId: string) {
    // this.updateSliderPosition();
  }

  #onItemsChange() {
    const fragment = document.createDocumentFragment();

    this.#items.forEach((item) => {
      const slide = document.createElement("div");
      slide.innerHTML = `<img src="${item.src}" alt="${item.alt}">`;
      slide.id = `slide-${item.id}`;
      slide.classList.add("slide");
      fragment.append(slide);
    });

    this.#list.replaceChildren(fragment); // Single DOM update
  }

  get element(): HTMLDivElement {
    return this.#element;
  }

  set items(injectedItems: ThumbnailItem[]) {
    this.#items = injectedItems;
    this.#currentIndex = 0;
    this.#onItemsChange();
  }
}
