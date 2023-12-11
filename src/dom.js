import {toDos} from "./toDos";
import {projects} from "./projects";
import {storage} from "./storage";

const pages = {
    currentPage: null,
    container: document.getElementById('content'),
    renderHeader: function () {
        const headerContainer = document.createElement('div')
        const toDoPageLink = document.createElement('button')
        toDoPageLink.textContent = 'To-do list'
        toDoPageLink.addEventListener('click', () => {
            toDoPage.renderPage()
            this.currentPage = toDoPage;
        })
        const projectPageLink = document.createElement('button')
        projectPageLink.textContent = 'Projects'
        projectPageLink.addEventListener('click', () => {
            projectPage.renderPage()
            this.currentPage = projectPage
        })
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
            if (pages.currentPage === toDoPage) {
                toDos.createToDo(toDos.toDoArray)
            }else if (pages.currentPage === projectPage){
                projects.addToDo()
                projectPage.renderSingleProject()
            }
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
            toDo.setAttribute('id',currentToDo.dataAttribute)
            const titleSection = document.createElement('div')
            const toDoTitle = document.createElement('h1')
            toDoTitle.textContent = currentToDo.title
            titleSection.appendChild(toDoTitle)
            const toDoDetails = document.createElement('div')
            toDoDetails.classList.add('to-do-details')
            const dueDate = document.createElement('p')
            dueDate.textContent = `Due date: ${currentToDo.dueDate}`
            const priority = `Priority: ${currentToDo.priority}`
            const deleteButton = document.createElement('button')
            deleteButton.textContent = 'x'
            deleteButton.addEventListener('click',() => {
                toDos.deleteToDo(i,toDos.toDoArray)
                storage.toDoStorage.setToDoList(this.toDoArray)
                this.renderToDos()
            })
            toDoDetails.append(dueDate,priority,deleteButton)
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
            const currentProject = projects.projectsArray[i]
            const project  = document.createElement('div')
            project.id = currentProject.dataAttribute;
            const title = document.createElement('h1')
            title.textContent = currentProject.title
            const description = document.createElement('p')
            description.textContent = currentProject.description
            const dueDate = document.createElement('p')
            dueDate.textContent = currentProject.dueDate
            const priority = document.createElement('p')
            priority.textContent = currentProject.priority
            const projectDetails = document.createElement('div')
            projectDetails.append(description,dueDate,priority)
            const deleteButton = document.createElement('button')
            deleteButton.textContent = 'x'
            deleteButton.addEventListener('click', () => {
                projects.deleteProject(i)
                this.renderProjects()
            })
            project.addEventListener('click', (event) => {
                projects.setCurrentProject(project.id)
            })
            project.append(title,projectDetails,deleteButton)
            project.classList.add('to-do')
            this.projectList.append(project)
        }
    },
    renderSingleProject: function () {
        pages.container.innerHTML = ''
        const currentProject = projects.currentProject
        const projectElement = document.createElement('div')
        const addToDoButton = document.createElement('btn')
        addToDoButton.textContent = 'Add to-do'
        addToDoButton.addEventListener('click', () => {
            toDoPage.toDoModal.show()
        })
        const toDoContainer = document.createElement('ul')
        currentProject.toDos.forEach((toDo) => {
            const toDoElement  = document.createElement('div')
            toDoElement.id = toDo.dataAttribute
            toDoElement.textContent = JSON.stringify(toDo)
            const deleteButton = document.createElement('button')
            deleteButton.textContent = 'delete'
            deleteButton.setAttribute('id',toDo.dataAttribute)
            deleteButton.addEventListener('click', () => {
                projects.deleteToDo(deleteButton.id)
                this.renderSingleProject()
            })
            toDoElement.appendChild(deleteButton)
            toDoContainer.append(toDoElement)
        })
        projectElement.append(
            currentProject.title,currentProject.dueDate,currentProject.priority,addToDoButton,toDoContainer
        )
        pages.container.appendChild(projectElement)
    }
}

export {pages,toDoPage,projectPage}