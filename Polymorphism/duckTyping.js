import _ from 'lodash';
class InMemoryKV {
    constructor(db = {}) {
  
      this.db = _.cloneDeep(db)
    }
  
    set(key, value) {
      const data = this.db;
      this.db = { ...data, [key]: value }
    }
    unset(key) {
      const data = this.db;
      this.db = _.omit(data, key);
  
    }
  
    get(key, defaultValue = null) {
      const data = this.db;
      return _.get(data, key, defaultValue);
    }
  
    toObject() {
      const data = _.cloneDeep(this.db);
      return data;
    }
  }
  export default InMemoryKV

  export const swapKeyValue = (database) => {
    const object = database.toObject();
    const array = Object.keys(object);
    const swapped = array.reduce((acc, key) => {
  
      const value = database.get(key);
      acc = { ...acc, [value]: key }
      database.unset(key);
  
      return acc
    }, {})
  
    Object.entries(swapped).map(([key, value]) => {
      database.set(key, value)
    })
  
  
  }