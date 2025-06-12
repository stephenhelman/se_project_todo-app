class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseButton = this._popupElement.querySelector(".popup__close");
    this._handleEscapeClose = (e) => {
      if (e.key === "Escape") {
        this.close();
      }
    };
  }

  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keydown", this._handleEscapeClose);
  }

  close() {
    this._popupElement.classList.remove("popup_visible");
    document.removeEventListener("keydown", this._handleEscapeClose);
  }

  setEventListeners() {
    this._popupElement.addEventListener("mousedown", (e) => {
      if (
        e.target === this._popupElement ||
        e.target.classList.contains("popup__close")
      ) {
        this.close();
      }
    });
  }
}

export default Popup;
