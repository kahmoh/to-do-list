import {toDos} from "./toDos";
import {projects} from "./projects";

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
        setProjectList: function () {
            localStorage.setItem('projectList',JSON.stringify(projects.projectsArray))
        },
        getProjectList: function () {
            return JSON.parse(localStorage.getItem('projectList'))
        }
    },
}

export {storage}