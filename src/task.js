class Task {
  constructor(title, description, dueDate, priority = 'none', completed = false) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
  }

  get getTitle() {
    return this.title;
  }

  get getDescription() {
    return this.description;
  }

  get getDueDate() {
    return this.dueDate;
  }

  get getPriority() {
    return this.priority;
  }

  get getCompleted() {
    return this.completed;
  }

  set setTitle(title) {
    this.title = title;
  }

  set setDescription(description) {
    this.description = description;
  }

  set setDueDate(dueDate) {
    this.dueDate = dueDate;
  }

  set setPriority(priority) {
    this.priority = priority;
  }

  set setCompleted(completed) {
    this.completed = completed;
  }
}
/*
const Task = (title, description, dueDate, priority, completed = false) => ({
  title, description, dueDate, priority, completed,
}); */

export default Task;
