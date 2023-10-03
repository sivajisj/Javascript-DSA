class Node{
    constructor(value){
        this.value = value;
        this.next = null;

    }
}

class likedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;

    }
  
    isEmpty(){
        return this.size === 0
    }
    
    getSize(){
        return this.size
    }
   
    print(){
        if(this.isEmpty()){
            console.log("List is Empty")
        }else{
            let curr = this.head
            let listValues = ``
            while(curr){
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues)
        }
    }

    prepend(value){
       const node = new Node(value);
       if(this.isEmpty()){
        this.head = node
        this.tail = node
       }else{
        node.next = this.head
        this.head = node
       }
       this.size++
    }

    append(value){
    const node = new Node(value);
    if(this.isEmpty()){
        this.head = node
        this.tail = node
    }  else{
        this.tail.next = node
        this.tail = node
    }
    this.size++
    }

    removeFromFront(){
      if(this.isEmpty()){
        return null
      }else{
        const value = this.head.value;
        this.head = this.head.next;
        this.size--
        return value
      }

    }
    removeFromEnd() {
        if (this.isEmpty()) {
          return null;
        }
        const value = this.tail.value;
        if (this.size === 1) {
          this.head = null;
          this.tail = null;
        } else {
          let prev = this.head;
          while (prev.next !== this.tail) {
            prev = prev.next;
          }
          prev.next = null;
          this.tail = prev;
        }
        this.size--;
        return value;
      }
}

const list = new likedList();

console.log(list.getSize())
console.log(list.isEmpty())
list.print()
list.prepend(1)
list.prepend(2)
list.prepend(3)
list.prepend(4)
list.prepend(5)
list.append(1)
list.removeFromFront()
list.removeFromEnd()
console.log(list.getSize())
console.log(list.isEmpty())
list.print()