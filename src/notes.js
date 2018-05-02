console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () =>{
    //try file isn't exist.
    try{
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }catch (e) {
        return [];
    }
}

var saveNotes = (notes) =>{
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}

//addNote
var addNote = (title, body) =>{
    var notes=fetchNotes();
    var note = {
        title,
        body
    }
    
    //check duplicateNotes.
    var duplicateNotes = notes.filter((note) => {
        return note.title===title;
    })
    //if notes isn't repeat, store note.
    if (duplicateNotes.length===0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
    
    
}

var getAll = () =>{
    return fetchNotes();
}

var getNote = (title) =>{
    var notes=fetchNotes();
    var hasNotes=notes.filter((note) =>{
        return note.title===title;
    });
    
    return hasNotes[0];
}

var removeNote = (title) =>{
    var notes=fetchNotes();
    var filterNotes=notes.filter((note) => {
        return note.title!==title;
    });
    saveNotes(filterNotes);

    return notes.length !== filterNotes.length;
}

var logNote = (note) =>{
    debugger;
    console.log('----');
    console.log('Title: ' + note.title);
    console.log('Body:' + note.body);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};