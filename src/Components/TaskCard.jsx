import { IconButton, Input, InputAdornment } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';

const TaskCard = ({oneTask, del, donee}) => {
  return (
  <div>
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
  />
  </div>
  )
};

export default TaskCard;
