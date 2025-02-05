import React, { useEffect, useRef, useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import NoteContext from '../context/notes/Context';
import { MdOutlineEdit, MdDelete } from "react-icons/md";

const Notes = () => {

    const { notes, deleteNote, getAllNotes, editNote } = useContext(NoteContext),
        navigate = useNavigate(),
        modalRef = useRef(null),
        [noteForEdit, setNoteForEdit] = useState({
            title: "",
            content: "",
            _id: ""
        });

    useEffect(() => {
        if (localStorage.getItem("auth-token"))
            getAllNotes();
        else {
            navigate("/login");
        }
    }, []);


    const updateNote = (note) => {
        modalRef.current.click();
        setNoteForEdit(note);
    }

    // On Change Listener
    const onChange = (e) => {
        setNoteForEdit({ ...noteForEdit, [e.target.name]: e.target.value });
    }

    // Handle Save Changes
    const handleSaveChanges = async (e) => {
        await editNote(noteForEdit);
        setNoteForEdit({
            title: "",
            content: "",
            _id: ""
        });
        modalRef.current.click();
    }

    return (
        <>
            {/* Update Note */}
            <button type="button" className="d-none" ref={modalRef} data-bs-toggle="modal" data-bs-target="#updateNote"></button>

            <div className="modal fade" id="updateNote" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <span className="label">Title</span>
                                        <input type="text" name="title" onChange={onChange} value={noteForEdit.title} placeholder='Enter your title here...' className='form-control mt-2' />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <span className="label">Content</span>
                                        <textarea name="content" onChange={onChange} value={noteForEdit.content} rows="3" placeholder='Content here...' className="form-control mt-2"></textarea>
                                    </div>
                                </div>
                                <input type="hidden" name="_id" onChange={onChange} value={noteForEdit._id} />
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={handleSaveChanges}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* All Notes */}
            <h3 className='mt-3'>Your Notes</h3>
            <hr className='my-3' />
            {!notes.length && <h5 className='m-auto text-center'>You don't have any notes yet 😢</h5>}

            <div className='row mb-5 w-100'>
                {notes.map((note, i) => {
                    return (
                        <div className="col-md-3 mt-3" key={i}>
                            <div className="card" style={{
                                borderRadius: "9px",
                                overflow: "hidden",
                                boxShadow: "0px 2px 2px 0px #ddd",
                            }}>
                                <div className="card-header bg-white border-0 text-dark d-flex justify-content-between align-items-center">
                                    <h5 className='m-0'>{note.title}</h5>
                                    <div className='d-flex' style={{ gap: "10px", cursor: "pointer" }}>
                                        <MdOutlineEdit onClick={() => updateNote(note)} />
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
