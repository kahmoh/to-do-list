import {pages, toDoPage} from "./dom";
import {storage} from "./storage";

const toDos = {
    toDoArray: storage.getToDoList(),
    toDoForm: document.getElementById('to-do-form'),
    toDo: (title, description, dueDate, dataAttribute) => {
        return {title, description, dueDate, dataAttribute}
    },
    createToDo: function () {
        const toDoValues = toDoPage.getFormData().dataValues
            if (toDoPage.validateFormData(toDoValues)){
                const newToDo = this.toDo(...toDoValues,this.toDoArray.length)
                this.toDoArray.push(newToDo)
                storage.setToDos()
                console.log(this.toDoArray)
                pages.renderToDos()
            }
        }
}

export {toDos}