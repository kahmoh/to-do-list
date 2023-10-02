const pages = {
    contentContainer: document.getElementById('content'),
    initialPageLoad: function () {
        this.contentContainer.appendChild('')
    },
    toDoPage: {
        renderButton: function () {
            const newToDoButton = document.createElement('button')
            newToDoButton.textContent = 'Add to do'
            return newToDoButton
        },
        return { renderButton }
    },
}