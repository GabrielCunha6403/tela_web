import './Card.css'
import Tilt from 'react-vanilla-tilt'
import React, { Component } from "react";


export default class Pergunta extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nome_valor: "",
            color_valor: "",
            bgimg_valor: "",
        }

    }

    render() {

        var style = {
            boxShadow: "1px 1px 10px #2e2e2e !important",
            backgroundImage:`url(${this.props.bgimg})`
        }

        return (
            <Tilt class="card" data-tilt style={style}>
                <span style= {{background: `linear-gradient(90deg, transparent, ${this.props.color})`}}></span>
                <span style= {{background: `linear-gradient(180deg, transparent, ${this.props.color})`}}></span>
                <span style= {{background: `linear-gradient(270deg, transparent, ${this.props.color})`}}></span>
                <span style= {{background: `linear-gradient(0deg, transparent, ${this.props.color})`}}></span>
            </Tilt>
        )
    }

    

}
