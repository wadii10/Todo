import { IconButton, Input, InputAdornment } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import React from 'react';
import './TaskCard.css'

const TaskCard = ({oneTask, del, donee}) => {
  return (
  <div className='oneTask'>
  {/* <h3>{oneTask.text}</h3>
  <div className="todo">
  <button onClick={()=>del(oneTask.id)}>remove</button>
  <button onClick={()=>donee(oneTask.id)} > {oneTask.isDone ?"undo" : "complete"} </button>
  </div> */}
  <Input disabled defaultValue={oneTask.text} 
     endAdornment={
      <InputAdornment position="end">
        <IconButton
          edge="end"
          onClick={()=>del(oneTask.id)}
        >
          <DeleteIcon />
        </IconButton>
      </InputAdornment>
    }

    startAdornment={
      <InputAdornment position="start">
        <IconButton
          edge="start"
          onClick={()=>donee(oneTask.id)}
        >
          { oneTask.isDone?<CheckCircleOutlineIcon sx={{ color: "green" }} /> :<CheckCircleOutlineIcon /> }
        </IconButton>
      </InputAdornment>
    } 
  />
  </div>
  )
};

export default TaskCard;
