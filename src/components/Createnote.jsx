import React, { useState } from 'react'

const Createnote = (props) => {
    const [currInput, setInputVal] = useState({
        title : '',
        content : ''
    });
    const handleInput = (e) => {
        const {name, value} = e.target
        setInputVal((preVal) => {
            return {...preVal, [name] : value}
        })
    }

    const addNotes = (e) => {
        if(currInput.title !=="" && currInput.content !== "" ){
            props.passNote(currInput);
            let tasks;
            if(localStorage.getItem('notes') === null){
                tasks = [];
            } else {
                tasks = JSON.parse(localStorage.getItem('notes'));
            }

            tasks.push(currInput);

            localStorage.setItem('notes', JSON.stringify(tasks));
            setInputVal({
                title : '',
                content : ''
            })
            document.getElementById("textareaId").style.display = "none";
            document.getElementById("addNotesBtn").style.display = "none";
        } else {
            alert("please insert notes");
        }
        
    }

    const handleFormBehaviour = (e) => {
        e.preventDefault()
    }

    const showInput = (e) => {
        document.getElementById("textareaId").style.display = "block";
        document.getElementById("addNotesBtn").style.display = "block";

    }

    
    return <>
        <div className="container my-3">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <form onSubmit = {handleFormBehaviour} className="mt-3">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Title" value={currInput.title} name="title" onChange={handleInput} onClick={showInput}/>
                        </div>
                        <div className="form-group" id="textareaId" style={{ display:"none" }}>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Take a note..." value={currInput.content} name="content" onChange={handleInput}></textarea>
                        </div>
                        <button type="button" style={{ display:"none" }} className="btn btn-primary text-center float-right" id="addNotesBtn" onClick={addNotes}>Add</button>
                    </form> 
                </div>
                <div className="col-3"></div>
            </div>
        </div>
      
    </>
}

export default Createnote;