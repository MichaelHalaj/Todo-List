const removeAllChildren = (node) => {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
};
const createAddTaskNode = () => {
  const node = document.createElement('button');
  node.classList.add('add-task');
  node.innerText = 'Add Task';
  return node;
};
const createTaskForm = () => {
  // Create form element
  const form = document.createElement('form');
  form.setAttribute('id', 'task-form');

  // Create title of task element
  const title = document.createElement('input');
  title.setAttribute('id', 'title');
  title.setAttribute('type', 'text');
  title.setAttribute('maxlength', '30');

  // Create description input
  const description = document.createElement('textarea');
  description.setAttribute('id', 'description');

  // Create date input
  const date = document.createElement('input');
  date.setAttribute('type', 'datetime-local');
  date.setAttribute('id', 'due-date');

  // Create row
  const row = document.createElement('div');
  row.classList.add('row-task-form');

  // Create submit
  const submit = document.createElement('input');
  submit.setAttribute('type', 'submit');
  submit.setAttribute('id', 'add-task-button');
  submit.setAttribute('value', 'Add');

  // Create cancel
  const cancel = document.createElement('button');
  cancel.setAttribute('id', 'cancel-button');
  cancel.innerText = 'Cancel';

  row.appendChild(title);
  row.appendChild(date);
  form.appendChild(row);
  form.appendChild(description);
  form.appendChild(submit);
  form.appendChild(cancel);
  return form;
};
export { removeAllChildren, createAddTaskNode, createTaskForm };
