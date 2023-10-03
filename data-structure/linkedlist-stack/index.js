const { stat } = require("fs")
const LinkedList = require("./linked-list-tail")

class LinkedListStack{
    constructor(){
        this.list = new LinkedList()
    }

    push(value){
        this.list.prepend(value)

    }

    pop(){
      return this.list.removeFromEnd()
    }

    print(){
      return this.list.print()
    }

    getSize(){
       return this.list.getSize()
    }

    isEmpty(){
     return this.list.isEmpty()
    }

    peek(){
       return this.list.head.value
    }
}

const stack = new LinkedListStack()

stack.push(34)
stack.push(323)
stack.push(56)
stack.push(398)
stack.push(12)
stack.push(768)
stack.push(213)
console.log(stack.getSize())
console.log(stack.isEmpty())
stack.print()
console.log(stack.peek())
console.log(stack.pop())