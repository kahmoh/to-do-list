import {toDos} from "./toDos";
import {storage} from "./storage";

const pages = {
    container: document.getElementById('content'),
    initialPageLoad: function () {
        toDoPage.renderPage()
        storage.toDoStorage.initialiseToDoList()
        toDoPage.renderToDos()
    },
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
        newToDoButton.classList.add('to-do-button')
        this.addButtonListener(newToDoButton)
        return newToDoButton
    },
    addFormListener: function () {
        this.toDoForm.addEventListener('submit', (event) => {
            event.preventDefault()
            toDos.createToDo()
            this.toDoModal.close()
        })
    },
    renderPage: function () {
        pages.container.appendChild(this.renderButton())
        this.addFormListener()
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
    renderToDos: function () {
        const toDoList = document.createElement('div')
        toDoList.classList.add('to-do-list')
        toDoList.innerHTML = ''
        for (let i = 0; i < toDos.toDoArray.length; i++) {
            const currentToDo = toDos.toDoArray[i]
            const toDo = document.createElement('div')
            const titleSection = document.createElement('div')
            const toDoTitle = document.createElement('h1')
            toDoTitle.textContent = currentToDo.title
            titleSection.appendChild(toDoTitle)
            const toDoDetails = document.createElement('div')
            toDoDetails.classList.add('to-do-details')
            const dueDate = document.createElement('p')
            dueDate.textContent = `Due date: ${currentToDo.dueDate}`
            const project = document.createElement('p')
            project.textContent = `Project: ${currentToDo.project}`
            const priority = `Priority: ${currentToDo.priority}`
            toDoDetails.append(dueDate,project,priority)
            toDo.append(titleSection,toDoDetails)
            toDo.classList.add('to-do')
            const toDoo = document.createElement('div')
            toDoList.appendChild(toDoo)
            toDoList.appendChild(toDo)
        }
        pages.container.appendChild(toDoList)
    }
}

export {pages,toDoPage}