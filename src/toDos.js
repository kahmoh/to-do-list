import {pages, toDoPage} from "./dom";
import {storage} from "./storage";

const toDos = {
    toDoArray: storage.toDoStorage.getToDoList(),
    toDoForm: document.getElementById('to-do-form'),
    toDo: (title, description, dueDate, project, priority, dataAttribute) => {
        return {title, description, dueDate, project, priority, dataAttribute}
    },
    createToDo: function () {
        const toDoValues = toDoPage.getFormData().dataValues
            if (toDoPage.validateFormData(toDoValues)){
                const newToDo = this.toDo(...toDoValues,this.toDoArray.length)
                this.toDoArray.push(newToDo)
                storage.toDoStorage.setToDoList()
                toDoPage.renderToDos()
            }
        }
}

export {toDos}