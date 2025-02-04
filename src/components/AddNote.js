import React, { useState, useContext } from 'react'
import NoteContext from "../context/notes/Context.js";

const AddNote = () => {

    const NOTE = useContext(NoteContext);

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const handleForm = (e) => {
        e.preventDefault();

        NOTE.addNote(note);
        setNote({
            title: "",
            content: ""
        })
    }


    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: [e.target.value] });
    }


    return (
        <>
            <h3>Add Note</h3>
            <form onSubmit={handleForm}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" value={note.title} name="title" onChange={onChange} placeholder="Title here..." />
                </div>

                <div className="mb-3">
                    <label className="form-label">Content</label>
                    <textarea className="form-control" name='content' value={note.content} onChange={onChange} placeholder='Your content here...' rows="3"></textarea>
                </div>
                <button className='btn btn-secondary btn-sm mt-2' >Save</button>
            </form>
        </>
    )
}

export default AddNote
