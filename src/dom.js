import {toDos} from "./toDos";

const pages = {
    contentContainer: document.getElementById('content'),
    initialPageLoad: function () {
        this.contentContainer.appendChild(toDoPage.renderPage())
    },
    toDoList: document.createElement('ul'),
    renderToDos: function () {
        this.toDoList.textContent = ''
        toDos.toDoArray.forEach((toDo) => {
            const toDoElement = document.createElement('li')
            toDoElement.textContent = JSON.stringify(toDo)
            this.toDoList.appendChild(toDoElement)
        })
        this.contentContainer.appendChild(this.toDoList)
    }
}

const toDoPage = {
    toDoForm: document.getElementById('to-do-form'),
    toDoModal: document.getElementById('to-do-modal'),
    addButtonListener: function (button) {
        button.addEventListener('click', () => {
            this.toDoModal.show()
        })
    },
    renderButton: function () {
        const newToDoButton = document.createElement('button')
        newToDoButton.textContent = 'Add to do'
        this.addButtonListener(newToDoButton)
        return newToDoButton
    },
    addFormListener: function () {
        this.toDoForm.addEventListener('submit', (event) => {
            event.preventDefault()
            toDos.createToDo()
        })
    },
    renderPage: function () {
        const container = document.createElement('div')
        container.appendChild(this.renderButton())
        this.addFormListener()
        return container
    },
    getFormData: function () {
        const toDoData = new FormData(this.toDoForm)
        const dataValues = Array.from(toDoData.values())
        return {dataValues}
    },
    validateFormData: function (array){
        let alerted = false
        for (let i = 0; i < array.length; i++ ) {
            if (array[i] === '' && alerted === false) {
                alert(`${array[i]} field empty`)
                alerted = true
                return
            }
        }
        return true
    },
}

export {pages,toDoPage}