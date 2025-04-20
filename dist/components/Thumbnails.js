import "../styles/thumbnails.css";
const defaultOptions = {
    borderColor: "grey",
    borderWidth: "1px",
    width: 100,
    height: 100,
    useBorder: true,
};
export class Thumbnails {
    #element;
    #items = [];
    #options;
    constructor(options) {
        this.#element = document.createElement("div");
        this.#element.className = "thumbnail-container";
        this.#options = { ...defaultOptions, ...options };
        document.addEventListener("navClick", (e) => {
            const event = e;
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
            if (index === 0)
                thumb.classList.add("selected");
            this.#element.appendChild(thumb);
        });
    }
    #handleThumbClick(nextSelected, index) {
        const current = this.#element.querySelector(".selected");
        current?.classList.remove("selected");
        const next = this.#element.querySelector(`#${nextSelected}`);
        next?.classList.add("selected");
        const event = new CustomEvent("thumbnailClick", {
            detail: { item: { id: nextSelected, index } },
            bubbles: true,
        });
        document.dispatchEvent(event);
    }
    get element() {
        return this.#element;
    }
    set items(injectedItems) {
        this.#items = injectedItems;
        this.#onItemsChange();
    }
}
//# sourceMappingURL=Thumbnails.js.map