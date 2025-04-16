export class MainImage {
  private element: HTMLDivElement;
  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.element = document.createElement("div");
    this.container = container;

    this.init();
  }

  private init() {
    this.element.style.border = "thin solid green";
    this.element.style.width = "100%";
    this.element.style.height = "400px";

    this.container.appendChild(this.element);
  }
}
