import {
  initialTodos,
  validationConfig,
  addTodoButton,
} from "../utils/constants.js";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";

import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";

const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template", handleCheck, handleAddOrDelete);
  todo.setTodoId(uuidv4());
  const todoElement = todo.getView();
  return todoElement;
};

const renderTodo = (todo) => {
  const todoToRender = generateTodo(todo);
  section.addItem(todoToRender);
};

const handleCheck = (completed) => {
  todoCounter.updateCompleted(completed);
};

const handleAddOrDelete = (status) => {
  todoCounter.updateTotal(status);
};

const section = new Section({
  items: initialTodos,
  renderer: (item) => {
    renderTodo(item);
  },
  containerSelector: ".todos__list",
});

const popupWithForm = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (values) => {
    renderTodo(values);
    handleAddOrDelete(true);
    popupWithForm.close();
    validator.resetValidation();
  },
});

const todoCounter = new TodoCounter(initialTodos, ".counter__text");

const validator = new FormValidator(validationConfig);

popupWithForm.setEventListeners();

addTodoButton.addEventListener("click", () => {
  popupWithForm.open();
});

validator.enableValidation();

section.renderItems();
