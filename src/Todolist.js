import React, { Component } from 'react';
import ListItem from './ListItem.js';
import NewItem from './NewItem.js';

class Todolist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todolist:
            [
                {content: 'React practice', done: "true", index: 0},
                {content: 'Basketball', done: "false", index: 1}
            ]
        };
        this.deleteOldItem = this.deleteOldItem.bind(this);
    }

    addNewItem = (newItemContent) => {
        const newList = [...this.state.todolist, {content: newItemContent, done: "false", index: this.state.todolist.length}];
        this.setState({
            todolist: newList
        })
    }

    deleteOldItem = (event) => {
        var dellist = [...this.state.todolist]
        var index=event.target.getAttribute("data-index");
        document.getElementById(index).style.display="none"
        // console.log(index)
        dellist.splice(index,1,"")
        this.setState({
            todolist:dellist
        })
      }

    render() {
        return (
            <div>
                Green indicates finished, red indicates unfinished
                <br/><br/>
                {
                    this.state.todolist.map(item => <ListItem item = {item} deleteItem = {this.deleteOldItem} />)
                }
                <NewItem addItem = {this.addNewItem}/>
            </div>
        );
    }
}

export default Todolist;