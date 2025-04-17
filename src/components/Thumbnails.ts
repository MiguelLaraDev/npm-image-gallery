import type { ThumbnailClickEvent } from "..";
import "../styles/thumbnails.css";

interface ThumbnailsProps {
  thumbs: {
    borderColor?: string;
    borderWidth?: string;
    width?: number;
    height?: number;
    useBorder?: boolean;
  };
}

export type ThumbnailItem = {
  id: string;
  alt: string;
  src: string;
};

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
  private _element: HTMLDivElement;
  private _items: ThumbnailItem[] = [];

  private stylesheet: CSSStyleSheet;
  private props: ThumbnailsProps;

  constructor(props?: ThumbnailsProps) {
    this._element = document.createElement("div");
    this._element.className = "thumbnail-container";

    this.stylesheet = new CSSStyleSheet();
    this.props = {
      ...defaultProps,
      ...props,
    };

    document.addEventListener("navClick", (e: Event) => {
      const event = e as ThumbnailClickEvent;
      this.handleThumbClick(event.detail.id);
    });

    this.init();
  }

  private async init() {
    const { width, height, useBorder, borderWidth, borderColor } = this.props.thumbs;
    const border = useBorder ? `${borderWidth} solid ${borderColor}` : "none";

    await this.stylesheet.replace(`
      .custom-thumb {
        border: ${border};
        width: ${width}px;
        height: ${height}px;
      }
    `);

    document.adoptedStyleSheets = [...document.adoptedStyleSheets, this.stylesheet];
  }

  private onItemsChange() {
    this._element.innerHTML = "";

    this._items.forEach((item, index) => {
      const image = document.createElement("img");
      image.src = item.src;

      const thumb = document.createElement("div");
      thumb.id = item.id;
      thumb.classList.add("thumb", "custom-thumb");
      thumb.append(image);
      thumb.addEventListener("click", () => this.handleThumbClick(item.id));

      if (index === 0) thumb.classList.add("selected");

      this._element.appendChild(thumb);
    });
  }

  private handleThumbClick(nextSelected: string) {
    const current = this._element.querySelector(".selected");
    current?.classList.remove("selected");

    const next = this._element.querySelector(`#${nextSelected}`);
    next?.classList.add("selected");

    const event: ThumbnailClickEvent = new CustomEvent("thumbnailClick", {
      detail: { id: nextSelected },
      bubbles: true,
    });

    document.dispatchEvent(event);
  }

  get element(): HTMLDivElement {
    return this._element;
  }

  set items(injectedItems: ThumbnailItem[]) {
    this._items = injectedItems;
    this.onItemsChange();
  }
}
