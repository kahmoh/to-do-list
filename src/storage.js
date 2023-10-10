import {toDos} from "./toDos";

const storage = {
    setToDos: function () {
        localStorage.setItem('toDoList',JSON.stringify(toDos.toDoArray))
    },
    getToDoList: function () {
        return JSON.parse(localStorage.getItem('toDoList'))
    }
}

export {storage}