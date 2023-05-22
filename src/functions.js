// import { plusSVG } from "./svg";
const removeAllChildren = (node) => {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
};
const createAddTaskNode = () => {
  const node = document.createElement('button');
  node.classList.add('add-task');
  const contain = document.createElement('div');
  contain.classList.add('add-task-container');
  const text = document.createElement('div');
  text.innerText = 'Add Task';
  const svg = document.createElement('div');
  svg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" style="width: 30px; height: 30px;" viewBox="0 0 24 24">
  <title>plus-circle-outline</title>
  <path fill="#9CA3AF" d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z" />
  </svg>`;
  svg.setAttribute('id', 'plus-svg');
  contain.appendChild(svg);
  contain.appendChild(text);
  node.appendChild(contain);
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
  title.setAttribute('placeholder', 'Enter Task Name');

  // Create description input
  const description = document.createElement('textarea');
  description.setAttribute('id', 'description');
  description.setAttribute('placeholder', 'Enter Description of Task (Optional)')

  // Create date input
  const date = document.createElement('input');
  date.setAttribute('type', 'datetime-local');
  date.setAttribute('id', 'due-date');

  // Create row
  const row = document.createElement('div');
  row.classList.add('row-task-form');
  const row2 = document.createElement('div');
  row2.classList.add('row-task-form');

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
  row2.appendChild(submit);
  row2.appendChild(cancel);
  form.appendChild(row);
  form.appendChild(description);
  form.appendChild(row2);
  return form;
};
export { removeAllChildren, createAddTaskNode, createTaskForm };
