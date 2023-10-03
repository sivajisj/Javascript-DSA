class Graph{
    constructor(){
        this.adjacentList = {}
    }

    addVertex(vertex){
        if(!this.adjacentList[vertex]){
            this.adjacentList[vertex] = new Set()
        }
    }
    addEdge(vertex1, vertex2){
        if(!this.adjacentList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacentList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacentList[vertex1].add(vertex2)
        this.adjacentList[vertex2].add(vertex1)
    }
  
    hasEdge(vertex1,vertex2){
        return (
            this.adjacentList[vertex1].has(vertex2) &&   this.adjacentList[vertex2].has(vertex1)
        )
    }
    removeEdge(vertex1,vertex2){
        this.adjacentList[vertex1].delete(vertex2)
        this.adjacentList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjacentList[vertex]){
            return
        }
        for(let adjacentVertex of this.adjacentList[vertex]){
            this.removeEdge(vertex,adjacentVertex)
        }
        delete this.adjacentList[vertex]
    }
    display(){
        for(let vertex in this.adjacentList) {
           console.log(vertex + "->"+ [...this.adjacentList[vertex]])
        }
    }
}

const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addEdge("A","B")
graph.addEdge("C","B")
graph.display()
console.log(graph.hasEdge("A","C"))

graph.addEdge("C","B")
graph.display()

console.log(" =================== ")

// console.log(graph.hasEdge("A","C"))
// graph.removeVertex("A")
graph.removeEdge("A","B")
graph.display()