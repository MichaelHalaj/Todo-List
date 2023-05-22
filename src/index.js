import './styles.css';
import { format, compareAsc } from 'date-fns';
import Project from './project';
import Task from './task';
import { removeAllChildren, createAddTaskNode, createTaskForm } from './functions';
// import { plusSVG } from './svg';

/**
 * Attach all project titles under the My Projects title within the DOM
 */
const myProjectsTitle = document.querySelector('#projects-title');

const todoListNode = document.querySelector('.todo-list');

const addNewProjectNode = document.querySelector('#add-project');

const cancelNewProjectNode = document.querySelector('#project-cancel');

const sideBarListNode = document.querySelector('.sidebar-list');

const projectFormNode = document.querySelector('#project-form');

const addTask = document.querySelector('.add-task');

const projectsList = [];

function hideProjectForm() {
  projectFormNode.reset();
  projectFormNode.classList.add('hide');
  projectFormNode.classList.remove('col');
  addNewProjectNode.classList.remove('hide');
}

function showProjectForm() {
  projectFormNode.classList.remove('hide');
  projectFormNode.classList.add('col');
  addNewProjectNode.classList.add('hide');
}

cancelNewProjectNode.addEventListener('click', () => {
  hideProjectForm();
});

addNewProjectNode.addEventListener('click', () => {
  showProjectForm();
});

function createTaskItemNode(task) {
  const taskContainer = document.createElement('div');
  const taskNode = document.createElement('div');
  const titleTaskNode = document.createElement('div');
  const dueDateNode = document.createElement('div');
  const descriptionContainer = document.createElement('div');
  const descriptionNode = document.createElement('div');

  descriptionNode.classList.add('description-text');
  descriptionContainer.appendChild(descriptionNode);
  descriptionContainer.classList.add('description-container');
  descriptionNode.innerText = task.getDescription;
  descriptionContainer.classList.add('hide');
  const row = document.createElement('div');
  row.classList.add('task-row');

  taskContainer.classList.add('task-item-container');

  const container = document.createElement('label');
  container.classList.add('container');
  const checkMarkInput = document.createElement('input');
  checkMarkInput.setAttribute('type', 'checkbox');
  const checkmark = document.createElement('span');
  checkmark.classList.add('checkmark');
  if (task.completed) {
    checkMarkInput.setAttribute('checked', 'checked');
  }
  checkMarkInput.addEventListener('click', () => {
    if (task.completed) {
      task.setCompleted = false;
    } else {
      task.setCompleted = true;
    }
  });

  dueDateNode.innerText = task.getFormattedDate;
  dueDateNode.setAttribute('class', 'due-date-display');

  container.appendChild(checkMarkInput);
  container.appendChild(checkmark);
  taskNode.appendChild(container);
  row.appendChild(titleTaskNode);
  row.appendChild(dueDateNode);
  titleTaskNode.innerText = task.getTitle;
  taskNode.appendChild(row);
  taskNode.classList.add('task-item');
  taskContainer.appendChild(taskNode);
  if (task.getDescription.length > 0) {
    taskContainer.appendChild(descriptionContainer);
  }
  taskNode.addEventListener('click', () => {
    if (descriptionContainer.classList.contains('hide')) {
      descriptionContainer.classList.remove('hide');
    } else {
      descriptionContainer.classList.add('hide');
    }
  });
  return taskContainer;
}

function createNewProject(projectTitle) {
  const newProject = new Project(projectTitle);
  const newProjectNode = document.createElement('button');
  newProjectNode.textContent = newProject.getProjectTitle;
  newProjectNode.classList.add('project-item');
  projectsList.push(newProject);
  myProjectsTitle.appendChild(newProjectNode);
  newProjectNode.addEventListener('click', () => {
    removeAllChildren(todoListNode);
    const projectTitleContainerNode = document.createElement('div');
    projectTitleContainerNode.classList.add('todo-list-project-title');
    const projectTitleNode = document.createElement('div');
    projectTitleNode.innerText = newProject.getProjectTitle;
    projectTitleContainerNode.appendChild(projectTitleNode);
    todoListNode.appendChild(projectTitleContainerNode);
    newProject.getTaskList.forEach((task) => {
      const taskNode = createTaskItemNode(task);
      todoListNode.appendChild(taskNode);
    });
    const addTaskNode = createAddTaskNode();
    todoListNode.appendChild(addTaskNode);
    addTaskNode.addEventListener('click', () => {
      console.log('task node');
      const taskFormNode = createTaskForm();
      todoListNode.removeChild(addTaskNode);
      todoListNode.appendChild(taskFormNode);
      // todoListNode.insertBefore(taskFormNode, addTaskNode);
      taskFormNode.addEventListener('submit', (e) => {
        e.preventDefault();
        if (e.submitter.id === 'cancel-button') {
          todoListNode.removeChild(taskFormNode);
        } else {
          const title = e.target[0].value;
          const date = e.target[1].value;
          const description = e.target[2].value;
          const task = new Task(title, description, date);
          newProject.addTask(task);
          const taskItemNode = createTaskItemNode(task);
          todoListNode.appendChild(taskItemNode);
          todoListNode.removeChild(taskFormNode);
        }
        todoListNode.appendChild(addTaskNode);
      });
    });
  });
  hideProjectForm();
}

projectFormNode.addEventListener('submit', (e) => {
  e.preventDefault();
  if (e.submitter.id === 'project-cancel') {
    hideProjectForm();
  } else {
    createNewProject(e.target[0].value);
  }
});

/**
 * Set up the page with a default today project
 */
createNewProject('Today');
