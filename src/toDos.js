import {pages, toDoPage} from "./dom";
import {storage} from "./storage";
import {projects} from "./projects";

const toDos = {
    toDoArray: (storage.toDoStorage.getToDoList() || []),
    toDo: (title, description, dueDate, project, priority, dataAttribute) => {
        return {title, description, dueDate, project, priority, dataAttribute}
    },
    createToDo: function () {
        const toDoValues = toDoPage.getFormData().dataValues
        if (toDoPage.validateFormData(toDoValues)){
            const newToDo = this.toDo(...toDoValues,this.toDoArray.length)
            this.toDoArray.push(newToDo)
            storage.toDoStorage.setToDoList(this.toDoArray)
        }
    },
    deleteToDo: function (index) {
        this.toDoArray.splice(index,1)
        storage.toDoStorage.setToDoList(this.toDoArray)
    }
}

export {toDos}