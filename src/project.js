class Project {
  constructor(projectTitle, projectID) {
    this.projectTitle = projectTitle;
    this.projectID = projectID;
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

  get getProjectID() {
    return this.projectID;
  }

  set setProjectID(projectID) {
    this.projectID = projectID;
  }

  removeTask(taskObj) {
    this.taskList = this.taskList.filter((el) => el.getTaskID !== taskObj.getTaskID);
  }
}

export default Project;
