import { format, compareAsc } from 'date-fns';

class Task {
  constructor(title, description, dueDate, taskID, priority = 'none', completed = false) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
    const dateFNS = new Date(dueDate);
    this.formattedDate = format(dateFNS, 'H:mma MM/dd/yyyy');
    this.taskID = taskID;
  }

  get getFormattedDate() {
    return this.formattedDate;
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

  get getTaskID() {
    return this.taskID;
  }

  set setTitle(title) {
    this.title = title;
  }

  set setDescription(description) {
    this.description = description;
  }

  set setDueDate(dueDate) {
    this.dueDate = dueDate;
    const dateFNS = new Date(this.dueDate);
    this.formattedDate = format(dateFNS, 'H:mma MM/dd/yyyy');
  }

  set setPriority(priority) {
    this.priority = priority;
  }

  set setCompleted(completed) {
    this.completed = completed;
  }

  set setTaskID(taskID) {
    this.taskID = taskID;
  }
}
/*
const Task = (title, description, dueDate, priority, completed = false) => ({
  title, description, dueDate, priority, completed,
}); */

export default Task;
