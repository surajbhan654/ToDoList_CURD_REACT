
import { useState } from 'react';
import ToDolist from './ToDolist';
import './App.css';

const App = () =>{

  const [inputlist,setInputlist]=useState("");
  const[Items,setItems]=useState([]);

  const itemEvent = (event) => {
    setInputlist(event.target.value);
  };

   const listofItems = () => {
      setItems((oldItems) => {
        return [...oldItems, inputlist];
      } );
      setInputlist("");
  };

  const deleteItems = (id) => {
    console.log("deleted");

    setItems((oldItems) => {
      return oldItems.filter((arrElem,index) =>{
        return index!==id;
      }); 
    } );
  };
  return (
    <>
     <div className='main_div'>
       <div className="center_div">
         <br/>
         <h1> Todo list </h1> <br/>

         <div className='txt'>
           .
           <input type="text" placeholder="Add a items" value={inputlist} onChange={itemEvent}/>
           </div>

             <button onClick={listofItems}> Add Task </button>

             <ol>
                {/*<li> {inputlist} </li>*/}

               { Items.map((itemval,index) => {
                 return <ToDolist text={itemval} key={index} id={index} onSelect={deleteItems}/>;
                })}
             </ol>
      
       </div>
     
     </div>
    </>
  );
}

export default App;
