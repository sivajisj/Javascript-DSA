class circulaQueue {
    constructor(capacity){
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentlength = 0;
        this.front = -1;
        this.rear = -1;
    }
    isFull(){
        return this.capacity === this.currentlength;
    }
    isEmpty(){
        return this.currentlength === 0;
    }
    enqueue(element){
        if(!this.isFull()){
            this.rear = (this.rear+1) % this.capacity;
           
            this.items[this.rear] = element;
            this.currentlength +=1;
            if(this.front === -1){
                this.front = this.rear;
            }

        }
    }

    dequeue(){
        if(this.isEmpty()){
            return null;
        }
        const item = this.items[this.front];
        this.items[this.front] = null ;
        this.front  = (this.front +1) % this.capacity;
        this.currentlength -= 1;
        if(this.isEmpty()){
            this.front = -1
            this.rear =-1

        }
      return item;
    }
    peek(){
        if(!this.isEmpty()){
            return this.items[this.front]
        }
        return null
    }
    print(){
        if(this.isEmpty()){
            console.log("Queue is empty...")
        }else{
            let i
            let str = ""
            for(i = this.front;i!==this.rear;i = (i+1) % this.capacity){
                str+=this.items[i]+" "
            }
            str+=this.items[i]
            console.log(str)
        }
    }
}
let circulaQ = new circulaQueue(5);
circulaQ.enqueue(45)
circulaQ.enqueue(23)
circulaQ.enqueue(98)
circulaQ.enqueue(26)
circulaQ.isEmpty()
circulaQ.print()