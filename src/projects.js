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
        const projectValues = projectPage.getFormData(projectPage.projectForm).dataValues
        if (projectPage.validateProjectFormData(projectValues)){
            const newProject = this.project(...projectValues,this.projectsArray.length,[])
            this.projectsArray.push(newProject)
            storage.projectStorage.setProjectList(this.projectsArray)
        }
    },
    deleteProject: function (index) {
        this.projectsArray.splice(index,1)
        this.updateProjectList()
    },
    setCurrentProject: function (projectId) {
        for (let i = 0; i < projects.projectsArray.length; i++){
            if (projectId == projects.projectsArray[i].dataAttribute){
                this.currentProject = this.projectsArray[i]
            }
        }
    },
    updateProjectList: function () {
        storage.projectStorage.setProjectList(this.projectsArray)
        this.setDataAttribute(this.projectsArray)
    },
    updateCurrenProject: function () {
        this.updateProjectList()
        this.currentProject = this.projectsArray[this.currentProject.dataAttribute]
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
        const projectValues = projectPage.getFormData(projectPage.projectEditForm).dataValues
        if (projectPage.validateProjectFormData(projectValues)){
            const newProject = this.project(...projectValues,this.currentProject.dataAttribute,this.currentProject.toDos)
            this.projectsArray.splice(this.currentProject.dataAttribute,1,newProject)
            this.setDataAttribute(this.currentProject.toDos)
            this.currentProject = this.projectsArray[this.currentProject.dataAttribute]
            storage.projectStorage.setProjectList(this.projectsArray)
        }
    },
    deleteProjectToDo: function (index,array) {
        array.splice(index,1)
        this.setDataAttribute(this.currentProject.toDos)
        this.updateCurrenProject()
    },
}

export {projects}