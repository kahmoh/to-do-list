import {pages, toDoPage} from "./dom";
import {storage} from "./storage";

const toDos = {
    toDoArray: (storage.toDoStorage.getToDoList() || []),
    toDo: (title, description, dueDate, priority, dataAttribute) => {
        return {title, description, dueDate, priority, dataAttribute}
    },
    createToDo: function () {
        const toDoValues = toDoPage.getFormData().dataValues
        if (toDoPage.validateFormData(toDoValues)){
            const newToDo = this.toDo(...toDoValues,this.toDoArray.length)
            this.toDoArray.push(newToDo)
            storage.toDoStorage.setToDoList(this.toDoArray)
        }
    },
    setDataAttribute: function () {
        for (let i = 0; i < this.toDoArray.length; i++){
            this.toDoArray[i].dataAttribute = i
        }
    },
    deleteToDo: function (index) {
        this.toDoArray.splice(index,1)
        this.setDataAttribute()
        storage.toDoStorage.setToDoList(this.toDoArray)
    }
}

export {toDos}