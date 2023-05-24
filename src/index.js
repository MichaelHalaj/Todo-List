import './styles.css';
import { format, compareAsc } from 'date-fns';
import Project from './project';
import Task from './task';
import { removeAllChildren, createAddTaskNode, createTaskForm } from './functions';
import { ro } from 'date-fns/locale';
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

function createTaskItemNode(task, projectObj) {
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
  const dropDown = document.createElement('div');
  dropDown.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" style="width: 40px; height: 40px;" 
  viewBox="0 0 24 24">
  <title>arrow-down-drop-circle-outline</title>
  <path fill="#4b5563" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M7,10L12,15L17,10H7Z" /></svg>`
  dropDown.classList.add('task-svg');
  dropDown.classList.add('dropdown');

  const dropUp = document.createElement('div');
  dropUp.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" style="width: 40px; height: 40px;" 
  viewBox="0 0 24 24">
  <title>arrow-up-drop-circle-outline</title>
  <path fill="#4b5563" d="M12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M17,14L12,9L7,14H17Z" /></svg>`
  dropUp.classList.add('task-svg');
  dropUp.classList.add('dropdown');

  const editNode = document.createElement('div');
  editNode.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" style="width: 40px; height: 40px;"
   viewBox="0 0 24 24">
   <title>file-edit-outline</title>
   <path fill="#4b5563" d="M10 20H6V4H13V9H18V12.1L20 10.1V8L14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H10V20M20.2 13C20.3 13 20.5 13.1 20.6 13.2L21.9 14.5C22.1 14.7 22.1 15.1 21.9 15.3L20.9 16.3L18.8 14.2L19.8 13.2C19.9 13.1 20 13 20.2 13M20.2 16.9L14.1 23H12V20.9L18.1 14.8L20.2 16.9Z" /></svg>`
  editNode.classList.add('task-svg');

  const deleteNode = document.createElement('div');
  deleteNode.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" style="width: 40px; height: 40px;" 
  viewBox="0 0 24 24">
  <title>delete</title>
  <path fill="#4b5563" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>`
  deleteNode.classList.add('task-svg');
  deleteNode.addEventListener('click', () => {
    todoListNode.removeChild(taskContainer);
    // delete from project list as well
    projectObj.removeTask(task);
  });

  dueDateNode.innerText = task.getFormattedDate;
  dueDateNode.setAttribute('class', 'due-date-display');

  container.appendChild(checkMarkInput);
  container.appendChild(checkmark);
  taskNode.appendChild(container);
  row.appendChild(titleTaskNode);
  row.appendChild(dueDateNode);
  row.appendChild(dropDown);
  row.appendChild(editNode);
  row.appendChild(deleteNode);
  titleTaskNode.innerText = task.getTitle;
  taskNode.appendChild(row);
  taskNode.classList.add('task-item');
  taskContainer.appendChild(taskNode);
  if (task.getDescription.length > 0) {
    taskContainer.appendChild(descriptionContainer);
  }

  dropDown.addEventListener('click', () => {
    if (descriptionContainer.classList.contains('hide')) {
      descriptionContainer.classList.remove('hide');
      row.replaceChild(dropUp, dropDown);
    } else {
      descriptionContainer.classList.add('hide');
      row.replaceChild(dropDown, dropUp);
    }
  });
  dropUp.addEventListener('click', () => {
    if (descriptionContainer.classList.contains('hide')) {
      descriptionContainer.classList.remove('hide');
      row.replaceChild(dropUp, dropDown);
    } else {
      descriptionContainer.classList.add('hide');
      row.replaceChild(dropDown, dropUp);
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
    console.log(`Project ${newProject}`);
    console.table(newProject);
    removeAllChildren(todoListNode);
    const projectTitleContainerNode = document.createElement('div');
    projectTitleContainerNode.classList.add('todo-list-project-title');
    const projectTitleNode = document.createElement('div');
    projectTitleNode.innerText = newProject.getProjectTitle;
    projectTitleContainerNode.appendChild(projectTitleNode);
    todoListNode.appendChild(projectTitleContainerNode);
    newProject.getTaskList.forEach((task) => {
      const taskNode = createTaskItemNode(task, newProject);
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
          const taskItemNode = createTaskItemNode(task, newProject);
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
