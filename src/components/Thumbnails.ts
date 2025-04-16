export class Thumbnails {
  private element: HTMLDivElement;
  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.element = document.createElement("div");
    this.container = container;

    this.init();
  }

  private init() {
    this.element.style.border = "thin solid blue";
    this.element.style.width = "100%";
    this.element.style.height = "100px";

    this.container.appendChild(this.element);
  }
}
