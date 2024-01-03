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
            projectPage.renderProjectPage()
            this.currentPage = projectPage
        })
        headerContainer.append(toDoPageLink,projectPageLink)
        return headerContainer
    },
    formsWithExitButton: [],
    renderFormExitButton: function (modal,form) {
        if (!this.formsWithExitButton.includes(form.id)){
            const exitButton = document.createElement('btn')
            exitButton.textContent = 'x'
            exitButton.addEventListener('click', () => {
                modal.close()
            })
            form.append(exitButton)
        }
        this.formsWithExitButton.push(form.id)
    },
    initialPageLoad: function () {
        toDoPage.renderPage()
    },
}

const toDoPage = {
    toDoForm: document.getElementById('to-do-form'),
    toDoModal: document.getElementById('to-do-modal'),
    toDoEditForm: document.getElementById('to-do-edit-form'),
    toDoEditModal: document.getElementById('to-do-edit-modal'),
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
            toDos.createToDo(toDos.toDoArray)
            this.renderToDos()
        })
        this.formHasListener = true;
    },
    renderFormExitButtons: function () {
        pages.renderFormExitButton(this.toDoModal,this.toDoForm)
        pages.renderFormExitButton(this.toDoEditModal,this.toDoEditForm)
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
        this.renderFormExitButtons()
    },
    getFormData: function (form) {
        const toDoData = new FormData(form)
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
            toDo.addEventListener('click', (event) => {
                if (event.target.tagName !== 'BUTTON'){
                    toDos.setCurrentToDo(toDo.id)
                }
            })
            toDoDetails.append(dueDate,priority,deleteButton)
            toDo.append(titleSection,toDoDetails)
            toDo.classList.add('to-do')
            this.toDoList.appendChild(toDo)
        }
        return this.toDoList
    },
    renderSingleToDo: function () {
        pages.container.innerHTML = ''
        const editButton = document.createElement('button')
        editButton.textContent = 'edit'
        editButton.addEventListener('click',() => {
            this.toDoEditModal.show()
        })
        this.toDoEditForm.addEventListener('submit', (event) => {
            event.preventDefault()
            toDos.editToDo()
            this.toDoEditModal.close()
            this.renderSingleToDo()
        })
        pages.container.append(pages.renderHeader(),JSON.stringify(toDos.currentToDo),editButton)
    }
}

const projectPage = {
    projectModal: document.getElementById('project-modal'),
    projectForm: document.getElementById('project-form'),
    projectToDoModal: document.getElementById('project-to-do-modal'),
    projectToDoForm: document.getElementById('project-to-do-form'),
    projectEditModal: document.getElementById('project-edit-modal'),
    projectEditForm: document.getElementById('project-edit-form'),
    projectToDoEditModal: document.getElementById('project-to-do-edit-modal'),
    projectToDoEditForm: document.getElementById('project-to-do-edit-form'),
    projectList: document.createElement('div'),
    projectFormHasListener: false,
    projectToDoFormHasListener: false,
    projectEditFormHasListener: false,
    projectToDoEditFormHasListener: false,
    addProjectFormListener: function () {
        this.projectForm.addEventListener('submit', (event) => {
            event.preventDefault()
            projects.createProject()
            this.renderProjects()
        })
        this.projectFormHasListener = true;
    },
    addProjectToDoFormListener: function () {
        this.projectToDoForm.addEventListener('submit', (event) => {
            event.preventDefault()
            projects.createProjectToDo(...projects.currentProject.toDos)
            this.projectToDoModal.close()
            this.renderSingleProject()
        })
        this.projectToDoFormHasListener = true;
    },
    addProjectEditFormListener: function () {
        this.projectEditForm.addEventListener('submit', (event) => {
            event.preventDefault()
            projects.editProject()
            this.projectEditModal.close()
            this.renderSingleProject()
        })
        this.projectEditFormHasListener = true;
    },
    addProjectToDoEditFormListener: function () {
          this.projectToDoEditForm.addEventListener('submit', (event) => {
              event.preventDefault()
              projects.editProjectToDo()
              this.projectToDoEditModal.close()
          })
    },
    renderFormExitButtons: function () {
        pages.renderFormExitButton(this.projectModal,this.projectForm)
        pages.renderFormExitButton(this.projectEditModal,this.projectEditForm)
        pages.renderFormExitButton(this.projectToDoModal,this.projectToDoForm)
        pages.renderFormExitButton(this.projectToDoEditModal,this.projectToDoEditForm)
    },
    renderProjectPage: function () {
        if (projectPage.projectModal.open){
            projectPage.projectModal.close()
        }
        pages.container.innerHTML = ''
        pages.container.appendChild(pages.renderHeader())
        pages.container.appendChild(this.renderAddProjectButton())
        this.renderProjects()
        pages.container.appendChild(this.projectList)
        if (!this.projectFormHasListener){
            this.addProjectFormListener()
        }
        if (!this.projectToDoFormHasListener){
            this.addProjectToDoFormListener()
        }
        if (!this.projectEditFormHasListener){
            this.addProjectEditFormListener()
        }
        this.addProjectToDoEditFormListener()
        this.renderFormExitButtons()
    },
    renderAddProjectButton: function () {
        const newProjectButton = document.createElement('button')
        newProjectButton.textContent = 'Add Project'
        newProjectButton.addEventListener('click', () => {
            this.projectModal.show()
        })
        return newProjectButton
    },
    getFormData: function (form) {
        const projectData = new FormData(form)
        const dataValues = Array.from(projectData.values())
        return {dataValues}
    },
    validateProjectFormData: function (array){
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
                if (event.target.tagName !== 'BUTTON'){
                    projects.setCurrentProject(project.id)
                    this.renderSingleProject()
                }
            })
            project.append(title,projectDetails,deleteButton)
            project.classList.add('to-do')
            this.projectList.append(project)
        }
    },
    renderSingleProject: function () {
        pages.container.innerHTML = ''
        pages.container.append(pages.renderHeader())
        const currentProject = projects.currentProject
        const projectElement = document.createElement('div')
        const addToDoButton = document.createElement('btn')
        addToDoButton.textContent = 'Add to-do'
        addToDoButton.addEventListener('click', () => {
            this.projectToDoModal.show()
        })
        const editButton = document.createElement('button')
        editButton.textContent = 'edit'
        editButton.addEventListener('click', () => {
            this.projectEditModal.show()
        })
        const toDoContainer = document.createElement('ul')
        currentProject.toDos.forEach((toDo) => {
            const toDoElement  = document.createElement('div')
            toDoElement.id = toDo.dataAttribute
            toDoElement.textContent = JSON.stringify(toDo)
            const editButton = document.createElement('button')
            editButton.textContent = 'edit'
            editButton.setAttribute('id',toDo.dataAttribute)
            editButton.addEventListener('click', () => {
                projects.setCurrentToDo(editButton.id)
                this.projectToDoEditModal.show()
            })
            const deleteButton = document.createElement('button')
            deleteButton.textContent = 'delete'
            deleteButton.setAttribute('id',toDo.dataAttribute)
            deleteButton.addEventListener('click', () => {
                projects.deleteProjectToDo(deleteButton.id,projects.currentProject.toDos)
                this.renderSingleProject()
            })
            toDoElement.append(editButton,deleteButton)
            toDoContainer.append(toDoElement)
        })
        projectElement.append(
            currentProject.title,currentProject.dueDate,currentProject.priority,addToDoButton,editButton,toDoContainer
        )
        pages.container.appendChild(projectElement)
    }
}

export {pages,toDoPage,projectPage}