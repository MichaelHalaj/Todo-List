class Project {
  constructor(projectTitle) {
    this.projectTitle = projectTitle;
    this.taskList = [];
  }

  get getProjectTitle() {
    return this.projectTitle;
  }

  /**
     * @param {string} projectTitle
     */
  set setProjectTitle(projectTitle) {
    this.projectTitle = projectTitle;
  }

  addTask(taskObj) {
    this.taskList.push(taskObj);
  }

  set setTaskList(taskList) {
    this.setTaskList = taskList;
  }

  get getTaskList() {
    return this.taskList;
  }

  removeTask(taskObj) {
    this.taskList = this.taskList.filter((el) => el.getTitle !== taskObj.getTitle);
  }
}

export default Project;
