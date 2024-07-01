const todos = getSavedTodos()

// Create Filter
const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters)

// setup event listener
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

//  setup an submit handler and cancel the default action
document.querySelector('#new-todo').addEventListener('submit', function (e) {
    e.preventDefault()
//    Add a new item to the todos array with that text data (completed value of false)
    todos.push({
        text: e.target.elements.text.value,
        completed: false
    })
    saveTodos(todos)
    //  Rerender the application
    renderTodos(todos, filters) 
    //  clear input field value
    e.target.elements.text.value = '' // blank mean to clear the field
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {   
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})


