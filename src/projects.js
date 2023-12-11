import {pages, projectPage} from "./dom";
import {storage} from "./storage";
import {toDos} from "./toDos";

const projects = {
    currentProject: null,
    projectsArray: (storage.projectStorage.getProjectList() || []),
    project: (title,description,dueDate,priority,dataAttribute,toDos) => {
        return {title,description,dueDate,priority,dataAttribute,toDos}
    },
    createProject: function () {
        const projectValues = projectPage.getFormData().dataValues
        if (projectPage.validateFormData(projectValues)){
            const newProject = this.project(...projectValues,this.projectsArray.length,[])
            this.projectsArray.push(newProject)
            storage.projectStorage.setProjectList(this.projectsArray)
        }
    },
    deleteProject: function (index) {
        this.projectsArray.splice(index,1)
        storage.projectStorage.setProjectList(this.projectsArray)
    },
    setCurrentProject: function (project) {
        projects.currentProject = project;
        console.log(this.currentProject.toDos)
    },
    addToDo: function () {
        const currentProjectArray = this.currentProject.toDos
        toDos.createToDo(currentProjectArray)
        this.projectsArray.splice(projects.currentProject,1)
        storage.projectStorage.setProjectList(this.projectsArray)
    },
    setDataAttribute: function (array) {
        for (let i = 0; i < array.length; i++){
            array[i].dataAttribute = i
        }
    },
    deleteToDo: function (index) {
        this.currentProject.toDos.splice(index,1)
        this.setDataAttribute(this.currentProject.toDos)
        this.projectsArray.splice(this.currentProject.dataAttribute,1,this.currentProject)
        storage.projectStorage.setProjectList(this.projectsArray)
    }
}

export {projects}