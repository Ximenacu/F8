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
import f8 from './icons/f8.svg'

import React, { useState, useEffect } from 'react';

import hamIconb from './icons/hamIconb.svg'
import hamIconw from './icons/hamIconw.svg'
// style={{display: "flex"}}

function App() {
  const [menu, setMenu]=useState(false);


  return (
    <div className="App" >

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

            <a href='#fotosSection' onClick={()=>{setMenu(false)}}  ><h4>Fotos</h4></a>
            <a href='#locationsection' onClick={()=>{setMenu(false)}} ><h4>Ubicación</h4></a>
            <a href='#infosection' onClick={()=>{setMenu(false)}} ><h4>Más Información</h4></a>
            <a href='#contactSection' onClick={()=>{setMenu(false)}}  ><h4>Contacto</h4></a>
          </div>

          <div className='exit' onClick={()=>{setMenu(false)}}  >a</div>
        </div>
      ) : 
        null
      }
      

      {/* <header className=" flex">
        <a href="#up" >
        <img src={f8} style={{height: "10vw", maxHeight:"70px", marginLeft: "10%"}} ></img>
        </a>

        {/* <div className="flex"
          style={{flexBasis: "70%",justifyContent:"space-around" }}>
          <a href='#fotosSection' ><h4>Fotos</h4></a>
          <a href='#locationsection' ><h4>Ubicación</h4></a>
          <a href='#infosection' ><h4>Más Información</h4></a>
          <a href='#contactSection' ><h4>Contacto</h4></a>
        </div> */}
        
         {/*  <img
          className='ham'
            src={hamIconw}
            onClick={()=>{setMenu(true)}}
            alt="Hamburger Icon"
          />
      </header> */}

      <div style={{height: "20vw", maxHeight:"70px"}} id="up"></div>
    
      <div className="body">

        <Welcome/>
        <Fotos/>
        <hr className="section-divider"></hr>
        <Size/>
        <hr className="section-divider"></hr>
        <Location/>
        <hr className="section-divider"></hr>
        
        <Contact icons={WA} />

      </div>

      <footer className='padd3 flex' >
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
