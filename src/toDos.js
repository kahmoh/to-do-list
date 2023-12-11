import {pages, toDoPage} from "./dom";
import {storage} from "./storage";

const toDos = {
    currentToDo: null,
    toDoArray: (storage.toDoStorage.getToDoList() || []),
    toDo: (title, description, dueDate, priority, dataAttribute) => {
        return {title, description, dueDate, priority, dataAttribute}
    },
    createToDo: function (array) {
        const toDoValues = toDoPage.getFormData().dataValues
        if (toDoPage.validateFormData(toDoValues)){
            const newToDo = this.toDo(...toDoValues,array.length)
            array.push(newToDo)
            storage.toDoStorage.setToDoList(this.toDoArray)
        }
    },
    setDataAttribute: function (array) {
        for (let i = 0; i < array.length; i++){
            array[i].dataAttribute = i
        }
    },
    deleteToDo: function (index,array) {
        array.splice(index,1)
        this.setDataAttribute(this.toDoArray)
    }
}

export {toDos}