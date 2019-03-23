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
            element : {
                name: "",
                markup:"",
                styleClass: "",
                style: "",
                state: ""
            },
            show:true
        }
    }

    saveAndClose (element) {
        console.log(element)
        this.setState({
            show:false
        });
    }

    render(){
        return (
            <div className = {style.showBackground}>
                <PopupMarkupEditor  
                    show = {this.state.show} 
                    element = {this.state.element}
                    saveAndClose = {this.saveAndClose.bind(this)} 
                    />
            </div>
        );
    }
}

ReactDOM.render(<Index/>, document.getElementById("index"));