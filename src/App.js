import './App.css';
import ButtonHeader from  './ButtonHeader';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from "react";
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import apiRequest from './apiRequest';

//https://jsonplaceholder.typicode.com/

function App() {
  const API_URL="https://jsonplaceholder.typicode.com/";
  const[items, setItems]=useState([]);
  const[reqUrlContent, setReqUrlContent]=useState('posts');
  const [fetchError, setFetchError]=useState(null);
  const [isLoading, setIsLoading]=useState(true);

  const handleChange=(e)=>{
    setReqUrlContent(e)
    return 0;

}


  useEffect(()=>{
    const fetchItems=async()=>{
      try{
        const response=await fetch(API_URL+reqUrlContent)
        if(!response.ok) throw Error("Did not receive expected data")
        const listItems=await response.json();
        setItems(listItems);
        setFetchError(null);

        
      }catch(err){

        setFetchError(err.message)
      }finally{
        setIsLoading(false)
      }
    }
    
    
     (async ()=> await fetchItems())()
  },[reqUrlContent]);

 
 





  return (
    <div className="App">
      
      <ButtonHeader reqUrlContent={reqUrlContent} handleChange={handleChange}/>   
    
      <main>
        {isLoading && <p>Loading Items</p>}
        {fetchError && <p style={{color:"red"}}>{`Error: ${fetchError}`}</p>}
        <ul>
          {items.map((item)=><li key={item.id}><p>{JSON.stringify(item)}</p></li>)}
        </ul>
      </main>

    </div>
  );

  }
export default App;
