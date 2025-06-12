import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._handleFormSubmit = handleFormSubmit;
  }

  _convertDate(date) {
    this._date = date = new Date(date);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
  }

  _getInputValues() {
    this._convertDate(this._popupForm.elements.date.value);
    this._inputObject = {
      name: this._popupForm.elements.name.value,
      date: this._date,
    };
  }

  setEventListeners() {
    this._popupForm = this._popupElement.querySelector("#add-todo-form");
    this._popupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this._getInputValues();
    });
  }
}

export default PopupWithForm;
