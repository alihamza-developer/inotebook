import NoteContext from "./Context.js";
import React, { useState } from 'react'

const NoteState = (props) => {

    const [notes, setNotes] = useState([
        {
            "title": "Meeting Notes",
            "content": "Discussed project roadmap and next steps.",
            "createdAt": "2025-02-04T12:00:00Z"
        },
        {
            "title": "Shopping List",
            "content": "Milk, Eggs, Bread, Coffee",
            "createdAt": "2025-02-04T12:05:00Z"
        },
        {
            "title": "Workout Plan",
            "content": "Monday: Chest & Triceps, Tuesday: Back & Biceps",
            "createdAt": "2025-02-04T12:10:00Z"
        },
        {
            "title": "Recipe Idea",
            "content": "Try making homemade pizza with fresh ingredients.",
            "createdAt": "2025-02-04T12:15:00Z"
        },
        {
            "title": "Project Deadline",
            "content": "Submit the final draft by Friday at noon.",
            "createdAt": "2025-02-04T12:20:00Z"
        },
        {
            "title": "Book Recommendations",
            "content": "Atomic Habits, The Pragmatic Programmer, Clean Code",
            "createdAt": "2025-02-04T12:25:00Z"
        },
        {
            "title": "Event Reminder",
            "content": "Attend the tech conference on February 10th.",
            "createdAt": "2025-02-04T12:30:00Z"
        },
        {
            "title": "Bug Fix Log",
            "content": "Resolved issue with user authentication in the API.",
            "createdAt": "2025-02-04T12:35:00Z"
        },
        {
            "title": "Daily Journal",
            "content": "Had a productive day working on new features.",
            "createdAt": "2025-02-04T12:40:00Z"
        },
        {
            "title": "Travel Plans",
            "content": "Visit Dubai in March, book hotel and flights.",
            "createdAt": "2025-02-04T12:45:00Z"
        }
    ]);

    return (
        <NoteContext.Provider value={{
            notes,
            setNotes
        }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
