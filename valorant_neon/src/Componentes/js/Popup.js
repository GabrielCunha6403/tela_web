import './../css/Popup.css'
import { Component } from 'react';
import video from '../../Media/reyna-video.mp4'

export default class Popup extends Component {

    constructor(props) {
        super(props);
        this.teste = this.teste.bind(this)

        this.state = {
            title_valor: "",
            sub_valor: "",
            bgimg_valor: "",
            id_valor: "",
            video_valor: "",
        }
    }

    teste() {
        var element = document.getElementById('popup' + this.props.id)
        element.style.display = "none"
    }


    render() {
        return (
            <div class="popup" id={"popup" + this.props.id}>
                <div class="escopo-popup">
                    <a href="#" className="btnclose" onClick={this.teste}><i class="material-icons dp48">close</i></a>
                    <img src={this.props.bgimg}/>
                    <div class="container-popup">  
                        <video muted controls>
                            <source src={video} type="video/mp4"/>
                        </video>
                    </div>    
                </div>
            </div>
        )
    }
}
