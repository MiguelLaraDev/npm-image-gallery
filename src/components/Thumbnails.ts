interface ThumbnailsProps {
  thumbs: {
    borderColor?: string;
    borderWidth?: string;
    width?: number;
    height?: number;
    useBorder?: boolean;
  };
}

interface ThumbProps {}

const defaultProps: ThumbnailsProps = {
  thumbs: {
    borderColor: "blue",
    borderWidth: "1px",
    width: 100,
    height: 100,
    useBorder: true,
  },
};

export class Thumbnails {
  private _element: HTMLDivElement;
  private _items: string[] = [];
  private _stylesheet: CSSStyleSheet;
  private _props: ThumbnailsProps;

  constructor(props?: ThumbnailsProps) {
    this._element = document.createElement("div");
    this._element.className = "thumbnail-container";

    this._stylesheet = new CSSStyleSheet();
    this._props = {
      ...defaultProps,
      ...props,
    };

    this.init();
  }

  private async init() {
    const { width, height, useBorder, borderWidth, borderColor } = this._props.thumbs;
    const border = useBorder ? `${borderWidth} solid ${borderColor}` : "none";

    await this._stylesheet.replace(`
      .thumbnail-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content:space-between;
        gap: 4px;
      }
     
      .thumb {
        border: ${border};
        width: ${width}px;
        height: ${height}px;
      }
    `);

    document.adoptedStyleSheets = [...document.adoptedStyleSheets, this._stylesheet];
  }

  private onItemsChange() {
    this._element.innerHTML = "";

    this._items.forEach((item) => {
      const thumb = document.createElement("div");
      thumb.className = "thumb";

      this._element.appendChild(thumb);
    });
  }

  get element(): HTMLDivElement {
    return this._element;
  }

  set items(injectedItems: string[]) {
    this._items = injectedItems;
    this.onItemsChange();
  }
}
