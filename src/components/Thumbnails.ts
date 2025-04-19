import type { NavClickEvent, ThumbnailClickEvent } from "../events";
import type { ThumbnailItem, ThumbnailsProps } from "../interfaces";
import "../styles/thumbnails.css";

const defaultProps: ThumbnailsProps = {
  thumbs: {
    borderColor: "grey",
    borderWidth: "1px",
    width: 100,
    height: 100,
    useBorder: true,
  },
};

export class Thumbnails {
  #element: HTMLDivElement;
  #items: ThumbnailItem[] = [];
  #props: ThumbnailsProps;
  #stylesheet: CSSStyleSheet;

  constructor(props?: ThumbnailsProps) {
    this.#element = document.createElement("div");
    this.#element.className = "thumbnail-container";

    this.#stylesheet = new CSSStyleSheet();
    this.#props = { ...defaultProps, ...props };

    document.addEventListener("navClick", (e: Event) => {
      const event = e as NavClickEvent;
      const { id, index } = event.detail.item;
      this.#handleThumbClick(id, index);
    });

    this.#init();
  }

  async #init() {
    const { width, height, useBorder, borderWidth, borderColor } = this.#props.thumbs;
    const border = useBorder ? `${borderWidth} solid ${borderColor}` : "none";

    await this.#stylesheet.replace(`
      .custom-thumb {
        border: ${border};
        width: ${width}px;
        height: ${height}px;
      }
    `);

    document.adoptedStyleSheets = [...document.adoptedStyleSheets, this.#stylesheet];
  }

  #onItemsChange() {
    this.#element.innerHTML = "";

    const { width, height } = this.#props.thumbs;

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
