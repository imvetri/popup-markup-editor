
// Libraries.

import React, { Component } from 'react';

// Dependencies.

// Styles.

import style from "./PopupMarkupEditor.css";


class PopupMarkupEditor extends Component {
    constructor(props) {
        super(props);
    }

    updateMarkup (markup) {
		this.setState({
            markup: markup
        });
    }

    render() {

        // TODO: Should pass the current data. Instead of accessing it from global
        return (
            <div draggable="true"  className={(this.props.show ? '' : style.hidden)+" resizable"} >
                <section className={style.override}>
                    <h4>Name:</h4>
                    <input type="text" placeholder="Enter element name" value={this.props.name} onChange={this.props.updateName}/>
                    <button onClick={this.props.save}>Save</button>
                    <button onClick={this.props.close}>Close</button>
                    <h4>Markup:</h4>
                    <textarea value={this.props.markup} onChange={this.props.updateMarkup} />
                    <h4>Style by class:</h4>
                    <textarea value={this.props.styleClass} onChange={this.props.updateStyleClass} />
                    <h4>Style:</h4>
                    <textarea value={this.props.style} onChange={this.props.updateStyle} />
                    <h4>State:</h4>
                    <textarea value={this.props.state} onChange={this.props.updateState} />
                </section>
            </div>
        );
    }
}

export default PopupMarkupEditor;
