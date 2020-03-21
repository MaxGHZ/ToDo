export class Todo {

    constructor(tarea){
        this.tarea = tarea

        this.id         = new Date().getDate() //12324545
        this.completado = false
        this.creado     = new Date()
    }
}