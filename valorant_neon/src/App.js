import './App.css';
import Card from './Componentes/Card'


function unhiden() {
  document.getElementById('menu').style.left = 0
}

function App() {
  return (
    <div className="App" style={{width: '100%', display: 'flex', alignItems:'center', flexDirection: 'column'}}>
      <header>
        <a id="icon" href="#" onclick={{unhiden}}><i class="material-icons dp48">dehaze</i></a>
        <ul id="menu">
            <li>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <a href='#'>Home</a>
            </li>
            <li>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <a href='#'>Logs</a>
            </li>
            <li>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <a href='#'>FAQ</a>
            </li>
            <li>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <a href='#'>Github</a>
            </li>
        </ul>
        
        <div class="search-area">
            <a onclick='open_search()'><i class="material-icons dp48">search</i></a>
            <input type="text" id="textarea"/>
        </div>

    </header>

      <div class="escopo">
        <Card color='rgb(164, 69, 153)' bgimg='https://i.pinimg.com/originals/75/02/e1/7502e1505ab906dc739cefebed94de1f.jpg'/>
        <Card color='rgb(47, 72, 176)' bgimg='https://i.pinimg.com/originals/f4/1a/63/f41a63734004a2fb34df0efe1d5c92c3.png'/>
        <Card color='rgb(243, 178, 74)' bgimg='https://i.pinimg.com/originals/40/69/7e/40697ee8241b41f0300096a7f92c460b.jpg'/>
        <Card color='rgb(128, 127, 185)' bgimg='https://i.pinimg.com/originals/1b/67/e3/1b67e338c39430d2820c5bb19e137e38.jpg'/>
      </div>
    </div>
  );
}

export default App;
