import './App.css';
import Welcome from './components/welcome'
import Fotos from './components/fotos'
import Size from './components/size'
import Location from './components/location'

import hamIcon from './icons/menus.png'
// style={{display: "flex"}}

function App() {
  return (
    <div className="App" >
       <header className="App-header">
        <h1>F8</h1>
        
        <img src={hamIcon} ></img>
        
       
      </header>

      <div className="body">

        <Welcome/>
        {/* <Fotos/> */}
        <hr className="section-divider"></hr>
        <Size/>
        <hr className="section-divider"></hr>
        <Location/>

      </div>

      <footer>
      <a href="https://www.flaticon.com/free-icons/hamburger" title="hamburger icons">Hamburger icons created by See Icons - Flaticon</a>
      </footer> 
    </div>
  );
}

export default App;
