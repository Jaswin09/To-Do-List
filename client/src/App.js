import './App.css';
import React ,{useEffect, useState} from 'react';
import Form from './components/form'
import Section from './components/section'
import List from './components/List'
import axios from 'axios'

const title = "TO-DO List";
const App=()=>{
  const [todolist,setTodolist] = useState([])

  useEffect(()=>{
    async function fetchdata(){
    const {data} =  await axios.get("/todos");
    setTodolist(data);
    //console.log(response);
    }
    fetchdata();
  },[]);

  const addtodo= async (item)=>{
    const {data} =  await axios.post("/todos",item);
    setTodolist((oldlist)=>[...oldlist, data]);
  }
  const removetodo= async (id)=>{
    await axios.delete(`/todos/${id}`)
    setTodolist((oldlist)=>oldlist.filter((item)=>item._id !== id));
  };
  const edittodo= async (id,item)=>{
    await axios.put(`/todos/${id}`,item);
  }
  return(
    <div className="ui container center aligned">
      <Section>
        <h1><b>{title}</b></h1>
      </Section>
      <Section>
        <Form addtodo={addtodo}/>
      </Section>
      <Section>
        <List list ={todolist} 
        removetodolistprop={removetodo}
        edittodolistprop={edittodo}/>
      </Section>
      
      </div>
    
  )
}

 

export default App;
