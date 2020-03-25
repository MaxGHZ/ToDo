export class Todo {

    static fromJson( {id, task, completed, created} ){
        const tempTodo= new Todo(task)
        tempTodo.id         =   id
        tempTodo.completed  =   completed
        tempTodo.created    =    created

        return tempTodo
    }
    constructor(task){
        this.task = task

        this.id             = new Date().getTime(); //12324545
        this.completed      = false
        this.created        = new Date()
    }
    imprimirClase() {
        console.log(`${this.task} - ${this.id}`)
    }
}