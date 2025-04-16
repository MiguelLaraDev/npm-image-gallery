import type { ThumbnailClickEvent } from "..";

interface ThumbnailsProps {
  thumbs: {
    borderColor?: string;
    borderWidth?: string;
    width?: number;
    height?: number;
    useBorder?: boolean;
  };
}

type ThumbnailItem = {
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

    this.init();
  }

  private async init() {
    const { width, height, useBorder, borderWidth, borderColor } = this.props.thumbs;
    const border = useBorder ? `${borderWidth} solid ${borderColor}` : "none";

    await this.stylesheet.replace(`
      .thumbnail-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 8px;
      }
     
      .thumb {
        box-sizing: border-box;
        border: ${border};
        width: ${width}px;
        height: ${height}px;
        overflow: hidden;
        cursor: pointer;
      }

      .thumb:hover {
        opacity: 0.5;
      }

      .thumb img {
        width: ${width}px;
        height: ${height}px;
        object-fit: cover;
      }

      .selected {
        border-top: 4px solid red;
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
      thumb.className = "thumb";
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
