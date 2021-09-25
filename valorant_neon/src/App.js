import './App.css';
import { search, unhiden } from './Aplication';
import Card from './Componentes/js/Card'
import Neon from './Componentes/js/btnNeon'


function App() {
  return (
    <div className="App" style={{width: '100%', display: 'flex', alignItems:'center', flexDirection: 'column'}}>
      <header>
        <a id="icon" href="#" onclick={unhiden}><i class="material-icons dp48">dehaze</i></a>
        <ul>
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
      </div>
    </div>
  );
}

export default App;
