import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import TextField from '@mui/material/TextField';
import { updateNotesAPI } from '../Services/allAPI';

function EditNote({notes,getAllNotes}) {
  // const [editNotes,setEditNotes]=useState([])
    const [show, setShow] = useState(false);
    const [addNotes,setAddNotes]=useState({title:notes.title,notes:notes.notes})
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(()=>{
      // setEditNotes(notes)
      
    },[addNotes])
    // console.log(editNotes);
    const updateNote=async(id)=>{
        await updateNotesAPI(id,addNotes)
        handleClose()
        getAllNotes()
      }
    return (
        <div>
            <button onClick={handleShow} className='btn mt-1'><i class="fa-solid fa-pen-to-square"></i></button>

            <Modal centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-center w-100'>UPDATE NOTE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
      <TextField className='w-100' id="outlined-basic" label="Title" variant="outlined" value={addNotes.title}  onChange={e=>setAddNotes({...addNotes,title:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
      <TextField className='w-100'
          id="outlined-multiline-static"
          label="Notes" value={addNotes.notes}  onChange={e=>setAddNotes({...addNotes,notes:e.target.value})}
          multiline
          rows={4}
        />
      </Form.Group>
    
    </Form>
    <div className='w-100 text-center'>
          <Button onClick={()=>updateNote(notes.id)} className='w-25 fw-bolder border shadow' variant="info" >
            UPDATE
          </Button>
     </div>
        </Modal.Body>
      </Modal>
        </div>
    )
}

export default EditNote