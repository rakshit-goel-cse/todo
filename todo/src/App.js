import './App.css';
import React from 'react';
import Header from './parts/header'
import ToDo from './parts/todos'
import Form from './parts/form'

class App extends React.Component {
constructor(props) {
  super(props)
    let todoItem=[]
    if(null!==JSON.parse(localStorage.getItem("todoItem")))
    todoItem=todoItem.concat(JSON.parse(localStorage.getItem("todoItem"))); 
    console.log("getlocal",todoItem)
    this.state ={
      todoItem
    }
    this.deleteItem = this.deleteItem.bind(this);
    this.addItems = this.addItems.bind(this);
}
deleteItem  (item) {
  //console.log("delete called - ")
  let statee=this.state.todoItem.filter(todo =>{
    
    return todo!==item
  });
  //console.log("delete after filter - ", statee)
  this.setState({todoItem:statee})
  
    localStorage.setItem("todoItem",JSON.stringify(this.state.todoItem));
} 
addItems (head,desc){
  console.log("addItems called - ", head, desc)
  this.setState({todoItem:this.state.todoItem.concat({
    "item":head,
    "desc":desc
  })})
  console.log("addItems called - ",this.state)
  localStorage.setItem("todoItem",JSON.stringify(this.state.todoItem))
}

    render(){
    return (
      <div className="App">
        <header className="App-header">
         <Header/>
        </header>
        <Form adddata={this.addItems}/>
        <ToDo  items={this.state.todoItem} delete={this.deleteItem} />
        {//<button onClick={() => {this.addItems("added title","added desc")}}>Add</button>
        } 
      </div>
    );
  }
}

export default App;
