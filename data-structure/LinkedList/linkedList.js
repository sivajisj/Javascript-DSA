class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
  }

  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
append(value){
  let node = new Node(value);
  if(this.isEmpty()){
    this.head  = node;
  }else{
    let prev = this.head;
    while(prev.next){
      prev = prev.next
    }
    prev.next = node
  }
  this.size++;
}
  insert(value, index) {
    if (index < 0 || index > this.size) {
      console.log("not valid index");
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else if (index === this.size) {
      this.append(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }

      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }
  remove(index) {
    if (index < 0 || index > this.size) {
      return null;
    }
    let removeNode;
    if (index === 0) {
      removeNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removeNode = prev.next;
      prev.next = removeNode.head;
    }
    this.size--;
    return removeNode.value;
  }

  reverse(){
    let prev = null;
    let curr = this.head;
    while(curr){
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev
  }

  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return i;
      }
      curr = curr.next;
      i++;
    }

    return -1;
  }

  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}
const list = new LinkedList();
list.prepend(12);
list.prepend(67);
list.prepend(98);
list.append(19);
list.prepend(19);
list.insert(34, 0);
list.print();
list.reverse();
list.append(48)
list.print();
