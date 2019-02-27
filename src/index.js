// Libraries.

import React, {Component} from "react";
import ReactDOM from "react-dom";

// Dependencies.


import style from "./Index/index.css";

// Components.

import PopupMarkupEditor from "./PopupMarkupEditor/PopupMarkupEditor";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            createMode : true,
            markup:"",
            show:true,
            name: ""
        }
    }

    save (t) {
        if(this.validation()){
            this.close();
        }
    }

    validation () {
        return this.state.markup && this.state.name;
    }

    close () {
        this.setState({
            show:false
        })
    }

    updateName (event) {
        this.setState({
            name: event.currentTarget.value
        })
    }

    updateMarkup (event) {
        this.setState({
            markup: event.currentTarget.value
        })
    }

    updateStyle (event) {
        this.setState({
            style: event.currentTarget.value
        })
    }

    render(){
        return (
            <div className = {style.showBackground}>
                <PopupMarkupEditor  
                    show = {this.state.show} 
                    name = {this.state.name} 
                    markup = {this.state.markup} 
                    save = {this.save.bind(this)} 
                    close = {this.close.bind(this)}
                    updateName = {this.updateName.bind(this)}
                    updateMarkup = {this.updateMarkup.bind(this)}
                    updateStyle = {this.updateStyle.bind(this)}
                    />
            </div>
        );
    }
}

ReactDOM.render(<Index/>, document.getElementById("index"));