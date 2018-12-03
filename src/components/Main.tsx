import React, { Component } from 'react';
import '../styles/Main.scss';

export default class Main extends Component {

    constructor(props: {}) {
        super(props)
    }

    render() {
        return (
            <div className="main-container">
                <p>Hi</p>
                <img
                    src="../src/assets/loading.svg"></img>
            </div>
        )
    }
}
