import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }, handleAddOrDelete) {
    super({ popupSelector });
    this._handleFormSubmit = handleFormSubmit;
    this._handleAddOrDelete = handleAddOrDelete;
  }

  _convertDate(date) {
    this._date = date = new Date(date);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
  }

  _getInputValues() {
    this._convertDate(this._popupForm.elements.date.value);
    return {
      name: this._popupForm.elements.name.value,
      date: this._date,
    };
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm = this._popupElement.querySelector("#add-todo-form");
    this._popupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const values = this._getInputValues();
      this._handleAddOrDelete(true);
      this._handleFormSubmit(values);
    });
  }
}

export default PopupWithForm;
