import {toDos} from "./toDos";

const storage = {
    setToDoList: function () {
        localStorage.setItem('toDoList',JSON.stringify(toDos.toDoArray))
    },
    getToDoList: function () {
        return JSON.parse(localStorage.getItem('toDoList'))
    }
}

export {storage}