import React, { Component } from 'react'

const todoItem = (item,i,del) =>{
    let buttonStyle={
        background:"red",
        color:"white"
    }
    return(
        <>
            <h3 style={{textAlign:"center",color: "white" ,background: "black",margin:"0px"}}>{i}. {item.item}</h3>
            <h4 style={{display:"inline"}}>Description:</h4> {item.desc} <br/>
            <button style={buttonStyle} onClick={() => {del(item)}}> Delete</button>
        </>
    )
}

export default class Todos extends Component{
    constructor(props) {
      super(props)
      this.state = {
      }
    }
    render(){
        return(
           <div className="todoList" >
            <h1 style={{textAlign:"center"}}>ToDo Items</h1>
            <div style={{height:"400px",overflow:"auto"}}>
                {0===this.props.items.length
                ? <h3>No Todo Available</h3>
                :
                <>
                {this.props.items.map( (item,i) => (
                    <div key={i} style={{border:"solid",margin:"5px",borderColor:"orange"}}>
                        {todoItem(item,++i,this.props.delete)}
                    </div>
                ))}
                </>
                }       
            </div>
           </div>
        );
    }
}