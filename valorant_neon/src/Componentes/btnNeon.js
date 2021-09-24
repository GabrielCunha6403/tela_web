import './btnNeon.css'
import React, { Component } from "react";


export default class Pergunta extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title_valor: "",
            color_valor: "",
        }

    }

    render() {

        return (
            <div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <a href='#' >{this.props.title}</a>
            </div>
        )
    }
}
