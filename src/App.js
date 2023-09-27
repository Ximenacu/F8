import './App.css';
import Welcome from './components/welcome'
import Fotos from './components/fotos'
import Size from './components/size'
import Location from './components/location'
import Contact from './components/contact'

import logo from './logo.svg'
import WA from './icons/WA.png'
import mail from './icons/mail.png'
import github from './icons/github.png'
import linkedin from './icons/linkedin.png'

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
        <Fotos/>
        <hr className="section-divider"></hr>
        <Size/>
        <hr className="section-divider"></hr>
        <Location/>
        <Contact icons={WA} />

      </div>

      <footer>
        <img src={logo} style={{height:"7vh"}} ></img>
        <div style={{flexGrow:"4"}}>
          <div style={{display:"flex", width:"100%", justifyContent:"center", flexWrap:" wrap"}} >
            <h5 style={{width:"50%", textAlign:"right"}} >Coded by Ximena Cu</h5>
            <div style={{width:"50%"}}>
              Contact me: 
              <a href="https://wa.me/524423185033">
              <img src={WA} style={{maxHeight:"3vh", margin:"1%"}}  ></img></a>
              <a href="mailto:ximenacuu@gmail.com" >
              <img src={mail} style={{height:"3vh", margin:"1%"}}  ></img></a>
              <a href='https://www.linkedin.com/in/ximenacu/' >
              <img src={linkedin} style={{height:"3vh", margin:"1%"}}  ></img></a>
              <a href='https://github.com/Ximenacu' >
              <img src={github} style={{height:"3vh", margin:"1%"}}  ></img></a>
              

            </div>
            

          </div>
          
          <a href="https://www.flaticon.com/free-icons/hamburger" title="hamburger icons">Icons created by Flaticon</a>
        </div>
      </footer> 
    </div>
  );
}

export default App;
