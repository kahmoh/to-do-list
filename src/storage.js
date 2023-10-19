import {toDos} from "./toDos";

const storage = {
    toDoStorage: {
        setToDoList: function () {
            localStorage.setItem('toDoList',JSON.stringify(toDos.toDoArray))
        },
        getToDoList: function () {
            return JSON.parse(localStorage.getItem('toDoList'))
        }
    },
    projectStorage: {
        setProjectList: function (array) {
            localStorage.setItem('projectList',JSON.stringify(array))
        },
        getProjectList: function () {
            return JSON.parse(localStorage.getItem('projectList'))
        }
    },
}

export {storage}