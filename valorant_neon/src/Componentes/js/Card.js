import '../css/Card.css'
import Tilt from 'react-vanilla-tilt'
import Popup from '../js/Popup';
import React, { Component } from "react";


export default class Pergunta extends Component {

    constructor(props) {
        super(props);
        this.open = this.open.bind(this)

        this.state = {
            nome_valor: "",
            color_valor: "",
            bgimg_valor: "",
            num: props.num
        }

    }
    open() {
        document.getElementById('popup' + this.props.num).style.display = "flex"
    }

    render() {


        var style = {
            boxShadow: "1px 1px 10px #2e2e2e !important",
            backgroundImage:`url(${this.props.bgimg})`
        }

        return (
            <div onClick={this.open}>
                <div class="card" style={style}>
                    {/*<span style= {{background: `linear-gradient(90deg, transparent, ${this.props.color})`}}></span>
                    <span style= {{background: `linear-gradient(180deg, transparent, ${this.props.color})`}}></span>
                    <span style= {{background: `linear-gradient(270deg, transparent, ${this.props.color})`}}></span>
                    <span style= {{background: `linear-gradient(0deg, transparent, ${this.props.color})`}}></span>*/}
                </div>
                <Popup id={this.state.num} title="relou" sub="reloudnv" bgimg={this.props.bgimg} video="../video1.mp4" />
            </div>
        )
    }

    

}
