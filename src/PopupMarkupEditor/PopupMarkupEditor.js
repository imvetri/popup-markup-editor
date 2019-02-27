
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

        return (
            <div className={this.props.show ? '' : style.hidden} >
                <section className={style.override}>
                    <h4>Name:</h4>
                    <input type="text" placeholder="Enter element name" value={this.props.name} onChange={this.props.updateName}/>
                    <button onClick={this.props.save}>Save</button>
                    <button onClick={this.props.close}>Close</button>
                    <h4>Markup:</h4>
                    <textarea value={this.props.markup} onChange={this.props.updateMarkup} />
                    <h4>Style:</h4>
                    <textarea value={this.props.style} onChange={this.props.updateStyle} />
                </section>
            </div>
        );
    }
}

export default PopupMarkupEditor;
