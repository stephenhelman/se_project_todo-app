import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    const values = {};
    [...this._popupForm.elements].forEach((element) => {
      if (element.name) {
        values[element.name] = element.value;
      }
    });
    return values;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm = this._popupElement.querySelector(".popup__form");
    this._popupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }
}

export default PopupWithForm;
