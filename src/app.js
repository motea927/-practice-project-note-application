console.log('Starting app');

const fs = require('fs');
const _ = require('lodash');
const notes = require('./notes.js');
const yargs = require('yargs');
const titleOption={

    describe:'Title of note',
    demand: true,
    alias: 't'

};

const bodyOption = {

    describe:'Body of note',
    demand:true,
    alias:'b'

};

const argv=yargs.command('add', 'Add a new note',{

    title:titleOption,
    body:bodyOption

})
.command('list', 'List all notes')
.command('read', 'Read a note', {

    title:titleOption

})
.command('remove', 'Remove a note', {

    title:titleOption

})
.help()
.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add'){

    var note = notes.addNote(argv.title, argv.body);

    if(note){

        console.log('Note creat');
        notes.logNote(note);

    }else{

        console.log('Note title taken');

    }
} else if (command === 'list'){

    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);

    allNotes.forEach((note) => {

        notes.logNote(note);

    });
} else if (command ==='read'){

    var note=notes.getNote(argv.title);
    if (note) {

        console.log('Note found!');
        notes.logNote(note);

    }else {

        console.log('Note was not found');

    }

} else if (command ==='remove'){

    var noteRemove = notes.removeNote(argv.title);
    var message = noteRemove ? 'Note was remove.' : 'Note not found';
    console.log(message);

} else{
    
    console.log('Command not recognized');
}