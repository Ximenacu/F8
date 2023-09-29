import './App.css';
import Header from './components/header'
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

import React, { useState, useEffect } from 'react';

import hamIconb from './icons/hamIconb.svg'
import hamIconw from './icons/hamIconw.svg'
// style={{display: "flex"}}

function App() {
  const [menu, setMenu]=useState(false);
  const [fotos, setFotos]=useState(false);  
  //const [field , setField]=useState("Fotos")


  return (
    <div className="App" >
      
      <Header setMenu={setMenu} classN={"hide"} fotos={fotos} setFotos={setFotos}  />

      { menu ? (
        <div>
          <div className='flex col menu padd3'>
            <div style={{display:"flex", width:"100%", justifyContent:"space-around", alignItems:"center"}} >
              <p className='subtitle tgrey'>Menu</p>
              
              <img
              className='ham'
                src={hamIconb}
                onClick={()=>{setMenu(false)}}
                alt="Hamburger Icon"
              />
            </div>
            <a href='#up' onClick={()=>{setMenu(false); setFotos(false )}}  ><h4>Home</h4></a>
            <a href='#fotosSection' onClick={()=>{setMenu(false); setFotos(true )}}  ><h4>Fotos</h4></a>
            <a href='#locationsection' onClick={()=>{setMenu(false); setFotos(false)}} ><h4>Ubicación</h4></a>
            <a href='#infosection' onClick={()=>{setMenu(false); setFotos(false)}} ><h4>Más Información</h4></a>
            <a href='#contactSection' onClick={()=>{setMenu(false); setFotos(false)}}  ><h4>Contacto</h4></a>
          </div>

          <div className='exit' onClick={()=>{setMenu(false)}}  ></div>
          <Header setMenu={setMenu} classN={""}  />
        </div>
        
      ) : 
        <Header setMenu={setMenu} classN={""} />
      }

      { fotos ? (
        <div>
          <h1 className='Title' id="fotosSection">Fotos</h1>
          
          <Fotos/>
          
          <Contact/>
        </div>
      ) : 
        <div className="body">

          <Welcome setFotos={setFotos} />
          <hr className="section-divider"></hr>
          <Size/>
          <hr className="section-divider"></hr>
          <Location/>
          <hr className="section-divider"></hr>
          
          <Contact icons={WA} />

        </div>
        
      }
      

      

      {/* <div style={{height: "20vw", maxHeight:"70px"}} id="up"></div> */}
    
      {/* <div className="body">

        <Welcome/>
        <Fotos/>
        <hr className="section-divider"></hr>
        <Size/>
        <hr className="section-divider"></hr>
        <Location/>
        <hr className="section-divider"></hr>
        
        <Contact icons={WA} />

      </div> */}

      <footer className='padd3 flex' >
        <div style={{ width:"25%"}} >
          <img src={logo} style={{height:"7vh"}} ></img>
        </div>
        <div style={{flexGrow:"4"}}>

            <h5 >Coded by Ximena Cu</h5>
            <div >
              <p style={{marginBottom:"0"}} > Contact me: </p> 
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
      </footer> 
    </div>
  );
}

export default App;
