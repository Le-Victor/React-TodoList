import React, { Component } from 'react';
import './ListItem.css';


// const ListItem = (props) => {
//     const item = props.item;

//     if(item.done) {
//         return <p onClick={this.onChangedone} className = "done-item">{item.content}</p>
//     }else{
//         return <p className = "item">{item.content}</p>
//     }
// }


class ListItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            situation: "",
            deleted: {}
        }
        this.state.situation = this.props.item.done
    }

    onChangeDone = () =>{
        if(this.state.situation === "false"){
            this.setState({
                situation:"true"
            })
        }else{
            alert("This task has already finished")
        }
    }

    onChangeUndo = () =>{
        if(this.state.situation === "true"){
            this.setState({
                situation:"false"
            })
        }else{
            alert("This task is unfinished")
        }
    }

    render() {
        if(this.props.item.done === "true") {
            return(
                <div className = {this.state.situation} id= {this.props.item.index}>
                    {this.props.item.content}
                    <button style={{float: "right"}} onClick={this.props.deleteItem} data-index={this.props.item.index}>Delete</button>  
                    <button style={{float: "right"}} onClick={this.onChangeUndo}>Unfinish</button> 
                    <button style={{float: "right"}} onClick={this.onChangeDone} >Finish</button>  
                </div>
            )
        }else{
            return(
                <div className = {this.state.situation} id= {this.props.item.index}>
                    {this.props.item.content}
                    <button style={{float: "right"}} onClick={this.props.deleteItem} data-index={this.props.item.index}>Delete</button>  
                    <button style={{float: "right"}} onClick={this.onChangeUndo}>Unfinish</button> 
                    <button style={{float: "right"}} onClick={this.onChangeDone} >Finish</button>    
                </div>
            ) 
        }
    }
}

export default ListItem;