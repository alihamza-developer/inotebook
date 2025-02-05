import React, { useEffect } from 'react'
import { useContext } from 'react'
import NoteContext from '../context/notes/Context';
import { MdOutlineEdit, MdDelete } from "react-icons/md";

const Notes = () => {

    const { notes, deleteNote, getAllNotes } = useContext(NoteContext);

    useEffect(() => {
        getAllNotes();
    }, [])


    return (
        <>
            <h3 className='mt-3'>Your Notes</h3>
            <hr className='my-3' />
            <div className='row mb-5'>
                {notes.map((note, i) => {
                    return (
                        <div className="col-md-3 mt-3" key={i}>
                            <div className="card" style={{
                                "border-radius": " 9px",
                                "overflow": "hidden",
                                "box-shadow": "0px 2px 2px 0px #ddd",
                            }}>
                                <div className="card-header bg-white border-0 text-dark d-flex justify-content-between align-items-center">
                                    <h5 className='m-0'>{note.title}</h5>
                                    <div className='d-flex' style={{ gap: "10px", cursor: "pointer" }}>
                                        <MdOutlineEdit />
                                        <MdDelete onClick={() => deleteNote(note._id)} />
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
