import './styles.css';
import Project from './project';
import Task from './task';
import removeAllChildren from './functions';

/**
 * Attach all project titles under the My Projects title within the DOM
 */
const myProjectsTitle = document.querySelector('#projects-title');

const todoListNode = document.querySelector('.todo-list');

const projectsList = [];

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