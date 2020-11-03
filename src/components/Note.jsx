import React from 'react'


const Note = (props) => {
    
    const deleteNotes = () => {
        props.deleteNotes(props.id);
    }
    
    return <>
            <div className="col-md-3 m-3">
                <div className="card"  style={{width: "18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">{props.notesItem.title}</h5>
                        <p className="card-text">{props.notesItem.content}</p>
                        <button type="button" className="btn btn-primary text-center float-right" onClick={deleteNotes}>Delete</button>
                    </div>
                </div>
            </div>
            
    </>
}

export default Note;