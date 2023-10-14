import {toDos} from "./toDos";

const storage = {
    toDoStorage: {
        initialiseToDoList: function () {
            if (this.getToDoList() !== null){
            }else {
                localStorage.setItem('toDoList',JSON.stringify([]))
            }
        },
        setToDoList: function () {
            localStorage.setItem('toDoList',JSON.stringify(toDos.toDoArray))
        },
        getToDoList: function () {
            return JSON.parse(localStorage.getItem('toDoList'))
        }
    },
    projectStorage: {
        setProjectList: function () {
            localStorage.setItem('toDoList',JSON.stringify(toDos.toDoArray))
        },
        getProjectList: function () {
            return JSON.parse(localStorage.getItem('toDoList'))
        }
    },
}

export {storage}