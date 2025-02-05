import NoteContext from "./Context.js";
import React, { useState } from 'react'

const NoteState = (props) => {
    const [notes, setNotes] = useState([]),
        API_URL = `http://localhost:8000/api`,
        AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YTEwNDM4ODk2MjQyZWI5Yjc5ZmFhYiIsImlhdCI6MTczODcxMjg4MX0.6acz1l99Yq1GmbdQpyN0OvPld862shjDCbkc_3m_xKQ";


    //#region Crud Operation

    const addNote = async (data) => {
        // Add Note
        let response = await fetch(`${API_URL}/notes/add`, {
            method: 'POST',
            headers: {
                'auth-token': AUTH_TOKEN,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        });

        response = await response.json();
        if (response.status === 'error') return false;
        data._id = response.id;

        // Make Deep Copy
        let newNotes = JSON.stringify(notes);
        newNotes = JSON.parse(newNotes);
        newNotes.unshift(data);


        // TODO: Call API and save
        setNotes(newNotes);
    }

    // Delete Note
    const deleteNote = (id) => {
        let newNotes = notes.filter(note => note._id !== id);
        setNotes(newNotes);

        // Delete
        fetch(`${API_URL}/notes/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'auth-token': AUTH_TOKEN
            }
        });
    }

    // Get All Notes
    const getAllNotes = async () => {
        let response = await fetch(`${API_URL}/notes/getall`, {
            method: 'GET',
            headers: {
                'auth-token': AUTH_TOKEN
            }
        });

        let data = await response.json();
        setNotes(data.notes.reverse());
        return data;
    }

    // Edit Note
    const editNote = async (data) => {
        let { title, content, _id } = data;
        if (!_id) return true;

        let notes_ = JSON.parse(JSON.stringify(notes));

        for (let i = 0; i < notes_.length; i++) {
            const note = notes_[i];
            if (note._id === _id) {
                note.title = title;
                note.content = content;
                break;
            }
        }

        setNotes(notes_);

        await fetch(`${API_URL}/notes/update`, {
            method: 'PUT',
            headers: {
                'auth-token': AUTH_TOKEN,
                'Content-Type': "application/json"
            },
            body: JSON.stringify(data)
        });
    };

    //#endregion Crud Operation

    return (
        <NoteContext.Provider value={{
            notes: notes,
            setNotes,
            getAllNotes,
            editNote,
            addNote,
            deleteNote
        }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
