import {pages, projectPage, toDoPage} from "./dom";
import {storage} from "./storage";
import {toDos} from "./toDos";

const projects = {
    currentProject: null,
    projectsArray: (storage.projectStorage.getProjectList() || []),
    toDo: (title, description, dueDate, priority, dataAttribute) => {
        return {title, description, dueDate, priority, dataAttribute}
    },
    project: (title,description,dueDate,priority,dataAttribute,toDos) => {
        return {title,description,dueDate,priority,dataAttribute,toDos}
    },
    createProject: function () {
        const projectValues = projectPage.getFormData(projectPage.projectToDoForm).dataValues
        if (projectPage.validateProjectFormData(projectValues)){
            const newProject = this.project(...projectValues,this.projectsArray.length,[])
            this.projectsArray.push(newProject)
            storage.projectStorage.setProjectList(this.projectsArray)
        }
    },
    deleteProject: function (index) {
        this.projectsArray.splice(index,1)
        storage.projectStorage.setProjectList(this.projectsArray)
    },
    setCurrentProject: function (projectId) {
        for (let i = 0; i < projects.projectsArray.length; i++){
            if (projectId == projects.projectsArray[i].dataAttribute){
                this.currentProject = this.projectsArray[i]
                projectPage.renderSingleProject()
            }
        }
    },
    createProjectToDo: function (array) {
        const toDoValues = projectPage.getFormData(projectPage.projectToDoForm).dataValues
        if (toDoPage.validateFormData(toDoValues)){
            const newToDo = this.toDo(...toDoValues,this.currentProject.toDos.length)
            this.currentProject.toDos.push(newToDo)
            storage.projectStorage.setProjectList(this.projectsArray)
        }
    },
    setDataAttribute: function (array) {
        for (let i = 0; i < array.length; i++){
            array[i].dataAttribute = i
        }
    },
    editProject: function () {
        const projectValues = projectPage.getProjectFormData().dataValues
        if (projectPage.validateProjectFormData(projectValues)){
            const newProject = this.project(...projectValues,this.projectsArray.length,[])
            this.projectsArray.splice(this.currentProject.dataAttribute,1,newProject)
            this.currentProject = this.projectsArray[this.currentProject.dataAttribute]
            storage.projectStorage.setProjectList(this.projectsArray)
        }
    }
}

export {projects}