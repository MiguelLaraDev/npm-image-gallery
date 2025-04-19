import type { NavClickEvent, ThumbnailClickEvent } from "../events";
import type { ThumbnailItem, ThumbnailsOptions } from "../interfaces";
import "../styles/thumbnails.css";

const defaultOptions: ThumbnailsOptions = {
  borderColor: "grey",
  borderWidth: "1px",
  width: 100,
  height: 100,
  useBorder: true,
};

export class Thumbnails {
  #element: HTMLDivElement;
  #items: ThumbnailItem[] = [];
  #options: ThumbnailsOptions;

  constructor(options?: ThumbnailsOptions) {
    this.#element = document.createElement("div");
    this.#element.className = "thumbnail-container";
    this.#options = { ...defaultOptions, ...options };

    document.addEventListener("navClick", (e: Event) => {
      const event = e as NavClickEvent;
      const { id, index } = event.detail.item;
      this.#handleThumbClick(id, index);
    });

    this.#init();
  }

  async #init() {
    const stylesheet = new CSSStyleSheet();
    const { width, height, useBorder, borderWidth, borderColor } = this.#options;
    const border = useBorder ? `${borderWidth} solid ${borderColor}` : "none";

    await stylesheet.replace(`
      .custom-thumb {
        border: ${border};
        width: ${width}px;
        height: ${height}px;
      }
      .selected {
        border-top: 4px solid ${borderColor} !important;
      }
    `);

    document.adoptedStyleSheets = [...document.adoptedStyleSheets, stylesheet];
  }

  #onItemsChange() {
    this.#element.innerHTML = "";

    const { width, height } = this.#options;

    this.#items.forEach((item, index) => {
      const thumb = document.createElement("div");
      thumb.id = item.id;
      thumb.classList.add("thumb", "custom-thumb");
      thumb.innerHTML = `<img src="${item.sizes.thumbnail}" alt="${item.alt}" width="${width}" height="${height}">`;
      thumb.addEventListener("click", () => this.#handleThumbClick(item.id, index));

      if (index === 0) thumb.classList.add("selected");

      this.#element.appendChild(thumb);
    });
  }

  #handleThumbClick(nextSelected: string, index: number) {
    const current = this.#element.querySelector(".selected");
    current?.classList.remove("selected");

    const next = this.#element.querySelector(`#${nextSelected}`);
    next?.classList.add("selected");

    const event: ThumbnailClickEvent = new CustomEvent("thumbnailClick", {
      detail: { item: { id: nextSelected, index } },
      bubbles: true,
    });

    document.dispatchEvent(event);
  }

  get element(): HTMLDivElement {
    return this.#element;
  }

  set items(injectedItems: ThumbnailItem[]) {
    this.#items = injectedItems;
    this.#onItemsChange();
  }
}
