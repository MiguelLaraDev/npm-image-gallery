export class Thumbnails {
  private _element: HTMLDivElement;

  constructor() {
    this._element = document.createElement("div");

    this.init();
  }

  private init() {
    this.element.style.border = "thin solid blue";
    this.element.style.width = "100%";
    this.element.style.height = "100px";
  }

  get element(): HTMLDivElement {
    return this._element;
  }
}
