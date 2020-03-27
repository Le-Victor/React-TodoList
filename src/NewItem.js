import React, { Component } from 'react';

class NewItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            inputContent: ''
        }
    }

    onInputChange = (event) => {
        this.setState({
            inputContent: event.target.value
        })
        // console.log(event.target.value)
    }

    onAddBtnClick = () =>{
        if(this.state.inputContent ===''){
            alert("The content cannot be empty!")
        }
        else if(this.state.inputContent.length > 13){
            alert("The task name is too long!")
        }
        else{
            this.props.addItem(this.state.inputContent)
            this.setState({
                inputContent: ''
            })
        }
        // alert(this.state.inputContent)
    }

    render() {
        return(
            <div>
                <input value={this.state.inputContent} onChange={this.onInputChange}/>
                <button onClick={this.onAddBtnClick}>Add</button>
            </div>
        )
    }
}

export default NewItem;