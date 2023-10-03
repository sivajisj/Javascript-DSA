const LinkedList = require("./linkedList")

class LinkedListQueue{
    constructor(){
        this.list = new LinkedList;
    }

    enqueue(value){
        this.list.append(value)
        
    }
  dequeue(value){
      return this.list.removeFromFront()
    }

    peek(){
    return this.list.head.value;
    }

    isEmpty(){
      return this.list.isEmpty()
    }

    getSize(){
     return this.list.getSize()
    }

    print(){
     return this.list.print()
    }

}

const queue = new LinkedListQueue()
console.log(queue.isEmpty())
queue.enqueue(45)
queue.enqueue(78)
queue.enqueue(287)
queue.enqueue(95)
queue.enqueue(25)
queue.enqueue(8)
queue.print()
queue.dequeue()
console.log(queue.peek())

console.log(queue.getSize())


queue.print()