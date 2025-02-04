import React from 'react'
import { useContext } from 'react'
import NoteContext from '../context/notes/Context';
import { MdOutlineEdit, MdDelete } from "react-icons/md";

const Notes = () => {

    const { notes, deleteNote } = useContext(NoteContext);
    return (
        <>

            <h3 className='mt-3'>Your Notes</h3>
            <hr className='my-3' />
            <div className='row mb-5'>
                {notes.map((note, i) => {
                    return (
                        <div className="col-md-3 mt-3" key={i}>
                            <div className="card">
                                <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
                                    <div className="title">{note.title}</div>
                                    <div className='d-flex' style={{ gap: "10px", cursor: "pointer" }}>
                                        <MdOutlineEdit />
                                        <MdDelete onClick={() => deleteNote(note.id)} />
                                    </div>
                                </div>
                                <div className="card-body">
                                    {note.content}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </>
    )
}

export default Notes
