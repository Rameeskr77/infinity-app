import React , {Component} from "react";
import "./new.css";

class New extends Component{
    constructor(props){
        super(props);
        this.state = {
            items : [],
            text:""
        }
        
    }
    textchange=(e)=>{
        this.setState({text:e.target.value})
     }
     
     itemsubmit=(event)=>{
         event.preventDefault();
        const {text} =this.state;
        const allitem = this.state.items;
        allitem.push(text);
        this.setState({
            items:allitem,
            text:""
        })
     }
     delet=(k)=>{
        const allitem = this.state.items;
        allitem.splice(k,1);
        this.setState({
            items:allitem
        })
     }
    render(){
        const {text,items} = this.state;
        console.log(items);
        return(
            <div className="todo-container" >
                
                <form className="input-section"onSubmit={this.itemsubmit}>
                    <h1><i class="fas fa-infinity"></i> App</h1>
                    <input value={text} onChange={this.textchange} type="text" placeholder="Enter Items..." ></input>
                   <button> <i class="fas fa-infinity"></i></button>
                </form>
                <ul>
                    {this.state.items.map((itm,k)=>{
                        return(
                            <li key={k}>{itm}<i class="fas fa-trash-alt" onClick={()=>this.delet(k)}></i></li>
                        )
                    })}
                </ul>
            </div>
            
        )
    }
}
export default New;