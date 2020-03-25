import { Todo } from "./to-do.class"

export class TodoList {

    constructor() {
        
       this. loadLocalStorage()
       
    }
    newTodo(todo) {
        this.todos.push(todo)
        this.keepLocalStorage()
    }
    deleteTodo(id){

        this.todos = this.todos.filter ( todo => todo.id != id)
        this.keepLocalStorage()

    }
    checkTodo (id) {

        for (const todo of this.todos) {

            if(todo.id == id) { // == compara que solo los valores sean iguales, === compara que los valores sean iguales y que el tipo de valor tambien sea igual
                todo.completed = !todo.completed
                this.keepLocalStorage()
                break
            }
        }

    }
    deleteCompleted() {

        this.todos = this.todos.filter ( todo => !todo.comlpeted )
        this.keepLocalStorage()

    }
    
    keepLocalStorage () {
        localStorage.setItem('todo',JSON.stringify(this.todos) )
    }

    loadLocalStorage() {

        // if(localStorage.getItem('todo') ) {
        //     this.todos = JSON.parse( localStorage.getItem('todo') )
        //     console.log('loadLocalStorage', this.todos)

        // } else {          
        //     this.todos = []
        // }

        this.todos  = (localStorage.getItem('todo')) 
                    ?  JSON.parse(localStorage.getItem('todo') )
                    : [];

        
        this.todos = this.todos.map(Todo.fromJson)

    }
    checkCompleted(){
        return this.tasks.filter(task => !todo.completed).length
    }
}