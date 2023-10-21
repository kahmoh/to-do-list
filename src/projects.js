import {projectPage} from "./dom";
import {storage} from "./storage";

const projects = {
    projectsArray: (storage.projectStorage.getProjectList() || []),
    project: (title,description,dueDate,toDos) => {
        return {title,description,dueDate,toDos}
    },
    createProject: function () {
        const projectValues = projectPage.getFormData().dataValues
        if (projectPage.validateFormData(projectValues)){
            const newProject = this.project(...projectValues,this.projectsArray.length)
            this.projectsArray.push(newProject)
            storage.projectStorage.setProjectList(this.projectsArray)
        }
    }
}

export {projects}