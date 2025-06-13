class TodoCounter {
  constructor(todos, selector) {
    this._element = document.querySelector(selector);
    this._completed = todos.filter((todo) => todo.completed).length;
    this._total = todos.length;
    this._updateText();
  }

  // Call this when a checkbox is clicked, and when a completed
  // to-do is deleted.
  updateCompleted = (increment) => {
    increment ? this._completed++ : this._completed--;
    this._updateText();
  };

  // Call this when a to-do is deleted, or when a to-do is
  // created via the form.
  updateTotal = (status) => {
    status ? this._total++ : this._total--;
    if (this._completed > this._total) {
      this._completed = this._total;
    }
    this._updateText();
  };

  // Call the method to update the text content
  _updateText() {
    this._element.textContent = `Showing ${this._completed} out of ${this._total} completed`;
  }
}

export default TodoCounter;
