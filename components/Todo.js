class Todo {
  constructor(data, selector) {
    this._data = data;
    this._templateElement = document.querySelector(selector);
  }
  _setEventListeners() {
    this._todoCheckboxElement.addEventListener("change", () => {
      this._data.completed = !this._data.completed;
    });

    this._todoDeleteBtn.addEventListener("click", () => {
      this._todoElement.remove();
      this._todoElement = null;
    });
  }

  _generateCheckbox() {
    this._todoCheckboxElement =
      this._todoElement.querySelector(".todo__completed");
    this._todoLabel = this._todoElement.querySelector(".todo__label");
    this._todoCheckboxElement.checked = this._data.completed;
    this._todoCheckboxElement.id = `todo-${this._data.id}`;
    this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
  }

  _generateTodoDate() {
    this._todoDateElement = this._todoElement.querySelector(".todo__date");
    const dueDate = new Date(this._data.date);
    if (!isNaN(dueDate)) {
      this._todoDateElement.textContent = `Due: ${dueDate.toLocaleString(
        "en-US",
        {
          year: "numeric",
          month: "short",
          day: "numeric",
        }
      )}`;
    }
  }

  _generateTodoName() {
    this._todoNameElement = this._todoElement.querySelector(".todo__name");
    this._todoNameElement.textContent = this._data.name;
  }

  setTodoId(id) {
    this._data.id = id;
  }

  getView() {
    this._todoElement = this._templateElement.content
      .querySelector(".todo")
      .cloneNode(true);

    this._todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");

    this._generateTodoName();
    this._generateTodoDate();
    this._generateCheckbox();
    this._setEventListeners();

    return this._todoElement;
  }
}

export default Todo;
