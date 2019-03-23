
// Libraries.

import React, { Component } from 'react';

// Dependencies.

// Styles.

import style from "./PopupMarkupEditor.css";


class PopupMarkupEditor extends Component {
    constructor(props) {
        super(props);
        // this.state = {... this.props.element};
        this.state = Object.assign({}, this.props.element);
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

    updateStyleClass (event) {
        this.setState({
            styleClass: event.currentTarget.value
        })
    }

    updateState (event) {
        this.setState({
            state: event.currentTarget.value
        })
    }

    publishElement () {
        this.props.saveAndClose({
            name: this.state.name,
            markup: this.state.markup,
            style: this.state.style,
            styleClass: this.state.styleClass,
            state: this.state.state
        });
    }

    render() {

        let element = this.state;
        // TODO: Should pass the current data. Instead of accessing it from global
        return (
            <div draggable="true"  className={(this.props.show ? '' : style.hidden)+" resizable"} >
                <section className={style.override}>
                    <h4>Name:</h4>
                    <input id="elementName" type="text" placeholder="Enter element name" value={element.name} onChange={this.updateName.bind(this)}/>
                    <button id="saveAndClose" onClick={this.publishElement.bind(this)}>Save & close</button>
                    <h4>Markup:</h4>
                    <textarea id="elementMarkup" value={element.markup} onChange={this.updateMarkup.bind(this)} />
                    <h4>Style by class:</h4>
                    <textarea id="elementStyleClass" value={element.styleClass} onChange={this.updateStyleClass.bind(this)} />
                    <h4>Style:</h4>
                    <textarea id="elementStyle" value={element.style} onChange={this.updateStyle.bind(this)} />
                    <h4>State:</h4>
                    <textarea id="elementState" value={element.state} onChange={this.updateState.bind(this)} />
                </section>
            </div>
        );
    }
}

export default PopupMarkupEditor;
