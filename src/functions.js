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

  form.appendChild(title);
  form.appendChild(description);
  form.appendChild(date);
  return form;
};
export { removeAllChildren, createAddTaskNode, createTaskForm };
