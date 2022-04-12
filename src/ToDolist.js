import React from "react";

const ToDolist = (props) => {
     
    return (
    <>
    <div className='todo_style'>
    <li> {props.text} </li>
    
     <p className='delete_list' onClick={ () =>
      {props.onSelect(props.id) }  }>  x  </p> 
      
      <input type="checkbox" ></input>
    </div> <hr/>
    </>
    )
}

export default ToDolist;