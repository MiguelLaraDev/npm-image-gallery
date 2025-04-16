class ImageGallery {
    constructor(selector) {
        this.element = document.querySelector(selector);
        if (!this.element) {
            throw new Error(`Element with selector "${selector}" not found`);
        }
    }
}
export default ImageGallery;
//# sourceMappingURL=index.js.map