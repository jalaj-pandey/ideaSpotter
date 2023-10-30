import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
import '../styles/signup.css';


const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className="col-md-3">
            <div className="card" style={{"margin-bottom":"10px"}}>
                <div className="cardImg" >
                <div className="card-body" style={{"padding-top": "20px"}}>
                    
                    <div className='d-flex align-items-center justify-content-end'>
                        <i data-bs-toggle="modal" data-bs-target="#exampleModal" className="fa-solid fa-pen-to-square mx-2" onClick={() => { updateNote(note) }}></i>
                        <i className="fa-solid fa-trash mx-2" onClick={() => {
                            deleteNote(note._id);}} ></i>
                    </div>
                    <h5 className="card-title">{note.title}</h5>

                    <p className="card-text">{note.description}</p>
                    <p className="card-text">Tags: {note.tag}</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Noteitem