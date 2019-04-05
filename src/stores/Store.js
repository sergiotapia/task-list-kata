import { observable, computed, action } from "mobx";

export default class TodoStore {
  constructor(tasks) {
    this.tasks = tasks;
  }

  @observable title = "Things To Do";
  @observable isGroupSelected = false;
  @observable tasks = [];

  @computed get tasksForGroup() {
    return this.groupedTasks[this.title].map(task => {
      let locked = false;

      return {
        id: task.id,
        label: task.task,
        locked: locked,
        checked: task.completedAt !== null
      };
    });
  }

  @computed get groupedTasks() {
    return this.tasks.reduce(function(r, a) {
      r[a.group] = r[a.group] || [];
      r[a.group].push(a);
      return r;
    }, {});
  }

  @computed get groupSummaries() {
    return Object.keys(this.groupedTasks).map(key => {
      return {
        title: key,
        completedCount: this.groupedTasks[key].filter(
          task => task.completedAt !== null
        ).length,
        totalCount: this.groupedTasks[key].length
      };
    });
  }

  @action
  deselectGroup = () => {
    this.title = "Things To Do";
    this.isGroupSelected = false;
  };

  @action
  pickGroup = title => {
    this.title = title;
    this.isGroupSelected = true;
  };
}
