export class NodeList {
    constructor(value, node = null) {
      this.next = node;
      this.value = value;
    }
  
    getNext() {
      return this.next;
    }
  
    getValue() {
      return this.value;
    }
  }

export default (linkedList) =>  {
    const list = [];
    const iter = (node) => {
  
      if(node.getNext() === null) {
        list.push(node.getValue())
        return list
      } else {
        list.push(node.getValue())
        return iter(node.getNext())
      }
      
    }
  
    const reversed =  iter(linkedList);
  
    function arrayToList(arr) {
      let current = null;
      for (let i = 0; i <= arr.length - 1; i++)
          current = new NodeList(arr[i], current );
      return current;
  }
    return arrayToList(reversed)
}