import {pages, toDoPage} from "./dom";
import {storage} from "./storage";

const toDos = {
    currentToDo: null,
    toDoArray: (storage.toDoStorage.getToDoList() || []),
    toDo: (title, description, dueDate, priority, dataAttribute) => {
        return {title, description, dueDate, priority, dataAttribute}
    },
    createToDo: function (array) {
        const toDoValues = toDoPage.getFormData(toDoPage.toDoForm).dataValues
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
    },
    setCurrentToDo: function (toDoId) {
        for(let i = 0; i < this.toDoArray.length; i++) {
            if (toDoId == this.toDoArray[i].dataAttribute){
                this.currentToDo = this.toDoArray[i]
                toDoPage.renderSingleToDo()
            }
        }
    },
    editToDo: function () {
        const toDoValues = toDoPage.getFormData(toDoPage.toDoEditForm).dataValues
        if (toDoPage.validateFormData(toDoValues)){
            const toDo = this.toDo(...toDoValues,this.currentToDo.dataAttribute)
            this.toDoArray.splice(this.currentToDo.dataAttribute,1,toDo)
            this.currentToDo = this.toDoArray[this.currentToDo.dataAttribute]
            storage.toDoStorage.setToDoList(this.toDoArray)
        }
    }
}

export {toDos}