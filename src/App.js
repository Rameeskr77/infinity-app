import React , {Component} from 'react';
import New from './new'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      cunter:0,
      status:false,
      text:"",
      item : ["apple","oreng","banana","pinapple"],
      user : [
        {name:"ramees",age:20},
        {name:"lol",age:30},
        
      ]
    }
  }
  add=()=>{
    this.setState((prev,props)=>(
      {cunter:prev.cunter+1}
    ));
  }
  dec=()=>{
    this.setState((prev,props)=>(
      {cunter:prev.cunter-1}
    ));
  }
  checkclicked=()=>{
   this.setState((prev,props)=>(
     {status:!prev.status}
   ));
  }
  textchange=(e)=>{
    this.setState({text:e.target.value})
    
  }
  
  render(){
  return (
    <div>
   <button onClick={this.add}>+ </button>
   <button onClick={this.dec}>-</button>
   <p>{this.state.cunter}</p>
   <label>
     Enable
     <input type="checkbox" onClick={this.checkclicked}></input>
   </label>
   <p>status {this.state.status?"enable":"disable"}</p>
   <input onChange={this.textchange} type="text"></input>
   <h3>{this.state.text}</h3>
   <ul>
     {this.state.item.map((itm,k)=>{
       return<li>{itm}</li>
     })}
   </ul>
   <table>
     <tr>
       <td>name</td>
       <td>age</td>
     </tr>
     {
       this.state.user.map((itm,k)=>{
         return(
           <tr>
             <td>{itm.name}</td>
             <td>{itm.age}</td>
           </tr>
         )
       })
     }
   </table>
    </div>
  );
  }
}

export default App;
