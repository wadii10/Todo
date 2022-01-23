import { IconButton, InputAdornment, OutlinedInput, } from '@mui/material';
import Icon from '@mui/material/Icon';
import React from 'react';

const AddTodo = ({ newAction, change, add }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.random(),
      text: newAction,
      isDone: false
    };
    add(newTodo);
  }
  return <div>
    {/* <form onSubmit={handleSubmit}>
      <input type="text" value={newAction} onChange={change} />
      <button type='submit' >add</button>
    </form> */}
    <form onSubmit={handleSubmit} >
      <OutlinedInput
        label='text'
        value={newAction}
        onChange={change}

        endAdornment={
          <InputAdornment position="end">
            <IconButton
              edge="end"
              type='submit'
            >
              <Icon color="primary">+</Icon>
            </IconButton>
          </InputAdornment>
        }

      />
    </form>

  </div>;
};

export default AddTodo;
