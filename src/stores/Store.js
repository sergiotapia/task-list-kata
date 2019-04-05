import { observable, computed, action } from "mobx";

export default class TodoStore {
  constructor(tasks) {
    this.tasks = tasks;
  }

  @observable showAllGroups = true;
  @observable pageTitle = "Things To Do";
  @observable tasks = [];

  @computed get groups() {
    return this.tasks.reduce(function(r, a) {
      r[a.group] = r[a.group] || [];
      r[a.group].push(a);
      return r;
    }, {});
  }

  @action
  viewAll = () => {
    this.pageTitle = "Things To Do";
    this.showAllGroups = true;
  };

  @action
  pickGroup = title => {
    this.pageTitle = title;
  };
}
