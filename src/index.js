import './styles.css';
import Project from './project';
import Task from './task';
import { removeAllChildren, createAddTaskNode, createTaskForm } from './functions';

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

function createNewProject(projectTitle) {
  const newProject = new Project(projectTitle);
  const newProjectNode = document.createElement('button');
  newProjectNode.textContent = newProject.getProjectTitle;
  newProjectNode.classList.add('project-item');
  projectsList.push(newProject);
  myProjectsTitle.appendChild(newProjectNode);
  newProjectNode.addEventListener('click', () => {
    removeAllChildren(todoListNode);
    newProject.getTaskList.forEach((task) => {
      const taskNode = document.createElement('div');
      taskNode.innerText = task.title;
      todoListNode.appendChild(taskNode);
    });
    const addTaskNode = createAddTaskNode();
    todoListNode.appendChild(addTaskNode);
    addTaskNode.addEventListener('click', () => {
      console.log('task node');
      todoListNode.insertBefore(createTaskForm(), addTaskNode);
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
