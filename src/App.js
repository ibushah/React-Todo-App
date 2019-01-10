import React, { Component } from 'react';
import logo from './logo.svg';
import Head from './Head'
import './App.css';





class App extends Component {

  // constructor

  constructor(props) {
    super(props);

    this.state=
    {
      input:[]

    }
  
    this.keyCheck=this.keyCheck.bind(this);
  }


// add item

add()
{
  if(this.inp.value.trim()!=="")
  {
let obj=
{
  id:Date.now(),
  data:this.inp.value

}

let arr=this.state.input;
arr.push(obj);

this.setState(
  {
    input:arr
  }
)

  }
  else
  {
    alert("Warnig!, Atleast write somethig")
  }
this.inp.value=""
}


// delete item
del(id)
{

  
  let element=this.state.input.filter((v)=>
  {
    if(v.id!==id)
    {
      return true;
    }
  })
 this.setState({
   input:element
 })

}

// update key
update=(id,e)=>
{

  let obj=this.state.input.find((v)=>
{
  return v.id===id;
})

let rename=prompt("Enter the updated value?",obj.data);

if(rename.trim()!=="")
{

obj.data=rename;
let newArr=this.state.input.map((v)=>
{
  if(v.id===id)
  {
    
    return obj;
  }
  else
  {
    return v;
  }
})

this.setState({
  input:newArr
})

}

}

// enter key functionality

keyCheck(e)
{
  
  if(e.keyCode===13)
  {
    this.btn.click();
  }
}

  render() {
    
    return (
        <React.Fragment>
        <Head title="TODO APP"/>
        <div className="container">
        <div id="all">
        <input type="text" id="input" onKeyUp={this.keyCheck} ref={(a)=>{this.inp=a}} autoFocus/>
        <button id="add"  ref={(b)=>{this.btn=b}} onClick={this.add.bind(this)}>Add Item</button>
        <ul id="data">
        { this.state.input.map((v,i)=> <li key={v.id} >{v.data}<button className="btn btn-success ui " onClick={this.update.bind(this,v.id)} >update</button> <button className="btn btn-danger ui" onClick={this.del.bind(this,v.id)}>delete</button> </li>)}
        {/* <li>kjefkjeb <button className="btn btn-success ui " >update</button> <button className="btn btn-danger ui">delete</button> </li> */}
        </ul>
        </div>
        </div>
        
        </React.Fragment>
        

     

      
    )
  }
}

export default App;
