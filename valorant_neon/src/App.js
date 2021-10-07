import './App.css';
import { search } from './Aplication';
import Card from './Componentes/js/Card'
import Neon from './Componentes/js/btnNeon'


function unhiden() {
  var element = document.getElementById('lista')

  if(element.style.opacity == 0){
    element.style = 'opacity: 1 !important;'
    element.style.left = 0
  } else {
    element.style = 'opacity: 0 !important;'
    element.style.left = '-100%'
  }
}

function App() {
  return (
    <div className="App" style={{width: '100%', display: 'flex', alignItems:'center', flexDirection: 'column'}}>
      <header>
        <a id="icon" href="#" onClick={unhiden}><i class="material-icons dp48">dehaze</i></a>
        <ul id="lista">
          <li><Neon title="Home" color="red"/></li>
          <li><Neon title="FAQ" /></li>
          <li><Neon title="Github" /></li>
          <li><Neon title="Settings" /></li>
        </ul>
        
        <div class="search-area">
            <a href="#"><i class="material-icons">search</i></a>
            <input type="text" id="textarea"/>
        </div>

      </header>

      <div class="escopo">
        <Card num="1" color='rgb(164, 69, 153)' bgimg='https://i.pinimg.com/originals/75/02/e1/7502e1505ab906dc739cefebed94de1f.jpg'/>
        <Card num="2" color='rgb(47, 72, 176)' bgimg='https://i.pinimg.com/originals/f4/1a/63/f41a63734004a2fb34df0efe1d5c92c3.png'/>
        <Card num="3" color='rgb(243, 178, 74)' bgimg='https://i.pinimg.com/originals/40/69/7e/40697ee8241b41f0300096a7f92c460b.jpg'/>
        <Card num="4" color='rgb(128, 127, 185)' bgimg='https://i.pinimg.com/originals/1b/67/e3/1b67e338c39430d2820c5bb19e137e38.jpg'/>
        <Card num="5" color='rgb(64, 99, 155)' bgimg='https://1.bp.blogspot.com/-CXB5yYcAzSQ/XvQn9s1PQ9I/AAAAAAAAywc/wgUYMlCgzg8VcQcEAn8YOtJg0H5hfUKWQCLcBGAsYHQ/s2560/sova-valorant-nl-1080x1920.jpg'/>
        <Card num="6" color='#2e5be3' bgimg='https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/dataimagejpegbase649j7AARRHVja3kAAQAEAAAAUAAA4AJkF-4c72e5ce02b120f5ccd943b0a72317cd.jpg'/>
        <Card num="7" color='rgb(64, 99, 155)' bgimg='https://i.pinimg.com/736x/27/fb/09/27fb093f6e62e271e3f0ae4f441a4f1b.jpg'/>
        <Card num="8" color='rgb(64, 99, 155)' bgimg='https://i.ytimg.com/vi/SgbqFtRRgLA/maxresdefault.jpg'/>
      </div>
    </div>
  );
}

export default App;
