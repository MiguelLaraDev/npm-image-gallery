export class MainImage {
  private _element: HTMLDivElement;

  constructor() {
    this._element = document.createElement("div");
    this.init();
  }

  private init() {
    this._element.style.border = "thin solid green";
    this._element.style.width = "100%";
    this._element.style.height = "400px";
  }

  get element(): HTMLDivElement {
    return this._element;
  }
}
