import React, { useState } from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Createnote from "./components/Createnote";
import Note from "./components/Note";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";



const App = () => {
    const [addItems, setItems] = useState([]);


    const addNotes = (notes) => {
        
        setItems((preVal) => {
            return [...preVal, notes];
        });
    
    }

    const noteFun = () => {
        let notes;
        if(localStorage.getItem('notes') === null){
            notes = [];
        } else {
            notes = JSON.parse(localStorage.getItem('notes'));
        }
         
        return notes;
    }
    
    const deleteNote = (id) => {
        setItems((preVal) => 
            preVal.filter((currdata, index) => {
                return index !== id
        }))
        let notes;
        if(localStorage.getItem('notes') === null){
          notes = [];
        } else {
          notes = JSON.parse(localStorage.getItem('notes'));
        }

        notes.map((note, index) => 
            id === index ?  notes.splice(index, 1) : []
        )

        localStorage.setItem('notes', JSON.stringify(notes));
    }

    return <>
        <Header />
        <Createnote passNote = {addNotes}/>
        <div className="container my-3">
            <div className="row">

                {
                    
                    noteFun().map((note,index) => {
                    return <Note  key = {index} id={index} notesItem = {note} deleteNotes={deleteNote}/>
                   })
                }

                
            </div>
        </div>
       <Footer />
    </>
}

export default App;