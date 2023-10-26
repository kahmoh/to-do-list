import {toDos} from "./toDos";
import {projects} from "./projects";

const pages = {
    container: document.getElementById('content'),
    renderHeader: function () {
        const headerContainer = document.createElement('div')
        const toDoPageLink = document.createElement('button')
        toDoPageLink.textContent = 'To-do list'
        toDoPageLink.addEventListener('click', () => {toDoPage.renderPage()})
        const projectPageLink = document.createElement('button')
        projectPageLink.textContent = 'Projects'
        projectPageLink.addEventListener('click', () => {projectPage.renderPage()})
        headerContainer.append(toDoPageLink,projectPageLink)
        return headerContainer
    },
    initialPageLoad: function () {
        toDoPage.renderPage()
    },
}

const toDoPage = {
    toDoForm: document.getElementById('to-do-form'),
    toDoModal: document.getElementById('to-do-modal'),
    toDoList: document.createElement('div'),
    formHasListener: false,
    renderButton: function () {
        const newToDoButton = document.createElement('button')
        newToDoButton.textContent = 'Add to do'
        newToDoButton.classList.add('to-do-button')
        newToDoButton.addEventListener('click', () => {
            this.toDoModal.show()
        })
        return newToDoButton
    },
    addFormListener: function () {
        this.toDoForm.addEventListener('submit',  (event) => {
            event.preventDefault()
            toDos.createToDo()
            this.renderToDos()
        })
        this.formHasListener = true;
    },
    renderPage: function () {
        if (projectPage.projectModal.open){
            projectPage.projectModal.close()
        }
        pages.container.innerHTML = ''
        pages.container.appendChild(pages.renderHeader())
        pages.container.appendChild(this.renderButton())
        pages.container.appendChild(this.renderToDos())
        if (!this.formHasListener){
            this.addFormListener()
        }
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
        this.toDoModal.close()
        return true
    },
    renderToDos: function () {
        this.toDoList.classList.add('to-do-list')
        this.toDoList.innerHTML = ''
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
            const deleteButton = document.createElement('button')
            deleteButton.textContent = 'x'
            deleteButton.addEventListener('click',() => {
                toDos.deleteToDo(i)
                this.renderToDos()
            })
            toDoDetails.append(dueDate,project,priority,deleteButton)
            toDo.append(titleSection,toDoDetails)
            toDo.classList.add('to-do')
            this.toDoList.appendChild(toDo)
        }
        return this.toDoList
    }
}

const projectPage = {
    projectModal: document.getElementById('project-modal'),
    projectForm: document.getElementById('project-form'),
    projectList: document.createElement('div'),
    formHasListener: false,
    addFormListener: function () {
        this.projectForm.addEventListener('submit', (event) => {
            event.preventDefault()
            projects.createProject()
            this.renderProjects()
        })
        this.formHasListener = true;
    },
    renderPage: function () {
        if (projectPage.projectModal.open){
            projectPage.projectModal.close()
        }
        pages.container.innerHTML = ''
        pages.container.appendChild(pages.renderHeader())
        pages.container.appendChild(this.renderButton())
        this.renderProjects()
        pages.container.appendChild(this.projectList)
        if (!this.formHasListener){
            this.addFormListener()
        }
    },
    renderButton: function () {
        const newProjectButton = document.createElement('button')
        newProjectButton.textContent = 'Add Project'
        newProjectButton.addEventListener('click', () => {
            this.projectModal.show()
        })
        return newProjectButton
    },
    getFormData: function () {
        const projectData = new FormData(this.projectForm)
        const dataValues = Array.from(projectData.values())
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
        this.projectModal.close()
        return true
    },
    renderProjects: function () {
        this.projectList.innerHTML = ''
        for(let i = 0; i < projects.projectsArray.length; i++){
            const element = document.createElement('div')
            const text = document.createElement('p')
            text.textContent = JSON.stringify(projects.projectsArray[i])
            const deleteButton = document.createElement('button')
            deleteButton.textContent = 'x'
            deleteButton.addEventListener('click', () => {
                projects.deleteProject(i)
                this.renderProjects()
            })
            element.append(text,deleteButton)
            this.projectList.append(element)
        }
    }
}

export {pages,toDoPage,projectPage}