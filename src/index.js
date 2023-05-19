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
  addNewProjectNode.classList.add('hide');
});
/* const projectFormNode = document.createElement('form');
const projectFormInputNode = document.createElement('input');
projectFormInputNode.setAttribute('type', 'text');
projectFormInputNode.setAttribute('maxlength', '20');
projectFormNode.appendChild(projectFormInputNode);
const projectFormSubmitNode = document.createElement('input');
projectFormSubmitNode.setAttribute('type', 'submit');
projectFormSubmitNode.setAttribute('value', 'Add');
projectFormNode.appendChild(projectFormSubmitNode);
addNewProjectNode.addEventListener('click', () => {
  sideBarListNode.insertBefore(projectFormNode, addNewProjectNode);
}); */

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