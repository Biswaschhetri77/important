import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ToDoList from './ToDoList';

function App() {

  const[inputList, setInputList] =useState("");
  const[items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value)
   };

   const listOfItems = () => {
    setItems((olditems) => {
      return[...olditems, inputList]
    })
    setInputList('')
   }

   const deleteItems = (id) =>{
    console.log("Deleted");
    setItems((olditems) =>{
      return olditems.filter((arrElem, index) => {
        return index !== id ;
      })
    })
};

  return(
    <>
    <div className='main_div'>
      <div className='center_div'>
      <br/>
      <h1>To Do List</h1>
      <br/>
      <input type='text' placeholder='Add an items' value={inputList} onChange={itemEvent}/>
      <button onClick={listOfItems}>  +  </button>
      <ol>
         {items.map((itemval, index) => {
         return<ToDoList 
         key ={index} 
         text = {itemval}
         id={index}    
         onSelect={deleteItems}                
         />
         })}
      </ol>
      </div>
    </div>
    </>
  )
  
}

export default App;
