import './styles.css'
import {Todo,TodoList} from './js/classes'
import {createHtmlTodo} from './js/components.js'

export const todoList = new TodoList()

todoList.todos.forEach( createHtmlTodo)



// localStorage.setItem('my-key','MAX123') //aqui la informacion dura mucho mas, hasta puedes reiniciar la pc y la info seguiria ahi
// // sessionStorage.setItem('my-key','MAX123') Es lo mismo pero si se cierra el navegador se borra


