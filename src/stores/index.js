import { observable, action } from 'mobx';

class ListStore {

  @observable list = [];

  @action addListItem = (item) => {
    this.list.push(item);
  }

}

export default new ListStore();