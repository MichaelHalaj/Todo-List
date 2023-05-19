import './styles.css';
import Project from './project';
import Task from './task';
import removeAllChildren from './functions';

/**
 * Attach all project titles under the My Projects title within the DOM
 */
const myProjectsTitle = document.querySelector('#projects-title');

const todoListNode = document.querySelector('.todo-list');

const addNewProjectNode = document.querySelector('#add-project');

const sideBarListNode = document.querySelector('.sidebar-list');

const projectFormNode = document.querySelector('#project-form');

const projectsList = [];

addNewProjectNode.addEventListener('click', () => {
  projectFormNode.classList.remove('hide');
  projectFormNode.classList.add('col');
  addNewProjectNode.classList.add('hide');
});

projectFormNode.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(e.target[0].value);
  const newProject = new Project(e.target[0].value);
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
    const taskNode = document.createElement('div');
    taskNode.innerText = task
  });
  projectFormNode.classList.add('hide');
  projectFormNode.classList.remove('col');
  addNewProjectNode.classList.remove('hide');
});

/**
 * Set up the page with a default today project
 */
const todayProject = new Project('Today');
const todayProjectNode = document.createElement('button');
todayProjectNode.textContent = todayProject.getProjectTitle;
todayProjectNode.classList.add('project-item');
projectsList.push(todayProject);
myProjectsTitle.appendChild(todayProjectNode);

todayProjectNode.addEventListener('click', () => {
  removeAllChildren(todoListNode);
  todayProject.getTaskList.forEach((task) => {
    const taskNode = document.createElement('div');
    taskNode.innerText = task.title;
    todoListNode.appendChild(taskNode);
  });
});


const addTask = document.querySelector('.add-task');




console.log(addTask);
addTask.addEventListener('click', () => {
  console.log('add task');
});