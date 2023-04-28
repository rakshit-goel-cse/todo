import React, { useState } from 'react'

 export const Form = (props) => {
  
    const [head,setHead] = useState("");
    const [deff,setDeff] = useState("");
  
    const submitStyle={background:"green"
    ,color:"white"
    ,height:"40px"
    ,width:"100px"
    ,alignContent:"center"
    ,Text:"auto"}

    const handleSubmit = (event) => {
        event.preventDefault();
        if(head.length>0 && deff.length>0){
        props.adddata(head,deff)
        setDeff("")
        setHead("")
      }
        else alert("Title or defination is empty")
    }

    return (
    <div style={{height:"200px",overflow:"auto"}}>
        <h2 style={{display:"grid",justifyContent:"center",marginBottom:"5px"}}>Add new TODO</h2>
         <form onSubmit={(e)=>{handleSubmit(e)}} style={{}}>
      <label style={{display:"grid",justifyContent:"center"}}>Enter todo heading:
        <input 
          type="text" 
          value={head}
          onChange={(e) => setHead(e.target.value)}
        />
      </label>
      <label style={{display:"grid",justifyContent:"center",margin:"5px"}}>Enter Defination:
        <input 
          type="text" 
          value={deff}
          onChange={(e) => setDeff(e.target.value)}
        />
      </label>
      <button  style={{...submitStyle,display:"block",margin:"0 auto"}} type="submit" >
        submit </button>
    </form>
    </div>
  )
}

export default Form;