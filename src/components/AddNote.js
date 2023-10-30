import React, {useContext, useState} from 'react'
import noteContext from '../context/notes/noteContext';
import '../styles/signup.css';
import notes from '../images/notes.jpg';



const AddNote = (props) => {
    const context = useContext(noteContext);
    const [note, setNote] = useState({title: "", description: "", tag: ""})
    const {addNote } = context; 

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""})
        props.showAlert("Added Successfully", "success");

    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <div className="container my-2">
            <h1>Add Your Notes</h1>
            <img className='notesImg' src={notes} alt="Login Form" />
            <form className='notesForm'>
                <div className="form-group"  >
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" name='title' value={note.title} placeholder="Enter Title" onChange={onChange} minLength={5} required />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description" name = "description" value={note.description} placeholder="Enter Description" onChange={onChange} minLength={5} required />
                </div>
                
                <div className="form-group">
                    <label htmlFor="title">Tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} placeholder="Enter Tags" onChange={onChange} />
                </div>
                <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary my-2 button" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote