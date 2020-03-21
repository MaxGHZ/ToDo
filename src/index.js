import './styles.css'
import {Todo,TodoList} from './js/classes'

const todoList = new TodoList()

const tarea1 = new Todo('Aprender Js')
const tarea2 = new Todo('Aprender Js + react')

todoList.newTodo(tarea1)
todoList.newTodo(tarea2)

console.log(todoList)