import NoteContext from "./Context.js";
import React, { useState } from 'react'

const NoteState = (props) => {

    const [notes, setNotes] = useState([
        {
            id: 1,
            "title": "Meeting Notes",
            "content": "Discussed project roadmap and next steps.",
            "createdAt": "2025-02-04T12:00:00Z"
        },
        {
            id: 2,
            "title": "Shopping List",
            "content": "Milk, Eggs, Bread, Coffee",
            "createdAt": "2025-02-04T12:05:00Z"
        },
        {
            id: 3,
            "title": "Workout Plan",
            "content": "Monday: Chest & Triceps, Tuesday: Back & Biceps",
            "createdAt": "2025-02-04T12:10:00Z"
        },
        {
            id: 4,
            "title": "Recipe Idea",
            "content": "Try making homemade pizza with fresh ingredients.",
            "createdAt": "2025-02-04T12:15:00Z"
        },
        {
            id: 5,
            "title": "Project Deadline",
            "content": "Submit the final draft by Friday at noon.",
            "createdAt": "2025-02-04T12:20:00Z"
        },
        {
            id: 6,
            "title": "Book Recommendations",
            "content": "Atomic Habits, The Pragmatic Programmer, Clean Code",
            "createdAt": "2025-02-04T12:25:00Z"
        }
    ]);


    //#region Crud Operation

    const addNote = (data) => {

        // TODO: Call API and save
        setNotes(notes.concat(data));
    }

    // Delete Note
    const deleteNote = (id) => {
        let newNotes = notes.filter(note => note.id !== id);
        // TODO : API Call to delete
        setNotes(newNotes)
    }

    //#endregion Crud Operation

    return (
        <NoteContext.Provider value={{
            notes: notes,
            setNotes,
            addNote,
            deleteNote
        }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
