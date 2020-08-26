import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ToDoList from './ToDoList'

const App = () =>{
  const [item,setItem]= useState("");
  const [newItem,setNewItem] = useState([]);

  const itemEvent = (event) =>{
    setItem(event.target.value);
  };
     const listOfItems = () =>{
      setNewItem((prevValue)=>{
          return[...prevValue,item]
      });
      setItem("");
     };
  return(
    <>
      <div className="main_div">
      <div className="center_div">
        <br/>
        <h1>ToDo List</h1>
        <br/>
        <input type="text" value={item} placeholder="Add an Item" onChange={itemEvent}/>
        <Button className="new_btn" onClick={listOfItems}>
          <AddIcon/>
        </Button>
        <br/>
        <ol>
         
        {  newItem.map((val,index)=>{
            return  <ToDoList key={index} text={val}/>;

          })}
        </ol>
        <br/>
      </div>

      </div>

    </>


  );
};

export default App;