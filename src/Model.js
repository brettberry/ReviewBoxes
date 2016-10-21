import { Map } from 'immutable';

class Model {
  constructor(data) {
    this.data = new Map(data);
  }

  get(key) {
    return this.data.get(key);
  }

  set(key, value) {
    return this.data.set(key, value);
  }
}

export default Model;
