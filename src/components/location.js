import img1 from '../images/Fraccionamiento/SANJE.jpg'
import img2 from '../images/Fraccionamiento/caseta.jpg'

function Location() {
    return (
      <div className="Location section"
       style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }}>
        <h1 className="Title section" >Ubicación</h1>

        <div className='flex wrapBox section' >
          <img id="wrp" src={img1}  ></img>
          <img id="wrp" src={img2} ></img>
        </div>

        <div className='flex wrapBox section' >
          <h2 id="wrp" 
          className='Title '
          style={{marginBottom:"4vh", fontSize:"1.75rem"}}
          
           >Misión <br/> San <br/> Jerónimo</h2>

          <h4 id="wrp" >A pie del Anillo Vial Fray Junípero Serra,  San Jerónimo es un fraccionamiento tranquilo que cuenta con vigilancia las 24 horas, casa club con alberca y una ubicación excelente. </h4>
        </div>

        <div className='section padd5 green' style={{minWidth:"80vw", backgroundColor:"#335B68", padding:"3vh", boxShadow:"none"}}  >
          <h2 id="bold"   style={{color:"#1c2b30", marginBottom:"3vh"}} >Trayectos</h2>
          <div  >
            
            <div className='AAA borderb' >
              <h4>Centro</h4> 
              <h4>15 min</h4>
            </div>
            <div className='AAA borderb'>
              <h4>Juriquilla</h4> 
              <h4>20 min</h4>
            </div>
            <div className='AAA borderb'>
              <h4>Plaza Paseo</h4> 
              <h4>3 min</h4>
            </div>
            <div className='AAA borderb'>
              <h4>HEB</h4> 
              <h4>5 min</h4>
            </div>
            <div className='AAA borderb'>
              <h4>Hospital</h4> 
              <h4>10 min</h4>
            </div>

          </div>

          
        </div>
        {/* style={{margin: "4%"}}  */}
        <div >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.9660449523208!2d-100.36472562568899!3d20.630240801348815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d35b88bd706ca1%3A0x6bddad0503a1af91!2zTWlzacOzbiBTYW4gSmVyw7NuaW1v!5e0!3m2!1sen!2smx!4v1695697372255!5m2!1sen!2smx" 
            style={{border:"0"}} allowFullScreen="" loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div id="contactSection"></div>

      </div>
    );
  }
  
  export default Location;
  