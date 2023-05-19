import './styles.css';
import Project from './project';
import Task from './task';

/**
 * Attach all project titles under the My Projects title within the DOM
 */
const myProjectsTitle = document.querySelector('#projects-title');

const projectsList = [];

const todayProject = new Project('Today');
const todayProjectNode = document.createElement('button');
todayProjectNode.textContent = todayProject.getProjectTitle;
projectsList.push(todayProject);

myProjectsTitle.appendChild(todayProjectNode);

const addTask = document.querySelector('.add-task');




console.log(addTask);
addTask.addEventListener('click', () => {
  console.log('add task');
});