// ====> Read existing notes from localStorage
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null ) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

// Save the notes to localStorage
const saveNotes = function (note) {
    localStorage.setItem('notes', JSON.stringify(notes)) 
}

// ====> Generate the DOM structure for a note
const generateNoteDOM = function (note) {
    const noteEl = document.createElement('div')
    const textEl = document.createElement('span')
    const button = document.createElement('button')

//  Setup the remove note button
    button.textContent = 'x'
    noteEl.appendChild(button)

//  Setup the note title text
    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Unnamed note'
    }

    noteEl.appendChild(textEl)

    return noteEl
}

// =====> Render Application Notes 
/*  -- takes all of the notes and filters and it figures out which one matches the filters  */
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    // to clear that div entirely when adding new note
    document.querySelector('#notes').innerHTML = ''
    // add filtering notes
    filteredNotes.forEach(function (note) {
        const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}