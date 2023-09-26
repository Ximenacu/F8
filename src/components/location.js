import img1 from '../images/Fraccionamiento/SANJE.jpg'
import img2 from '../images/Fraccionamiento/caseta.jpg'

function Location() {
    return (
      <div className="Welcome cont" style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }}>
        <h1 className="Title" >Ubicación</h1>

        <div className='imgcont wrapBox' >
          <img id="wrp" src={img1} style={{margin: "10px"}} ></img>
          <img id="wrp" src={img2} ></img>
        </div>

        <div className='wrapBox cont' >
          <h2 id="wrp" >Misión San Jerónimo</h2>
          <h4 id="wrp" >A pie del Anillo Vial Fray Junípero Serra,  San Jerónimo es un fraccionamiento tranquilo que cuenta con vigilancia las 24 horas, casa club con alberca y una ubicación excelente. </h4>
        </div>

        <div id="blue" style={{padding: "3%", minWidth: "40vw"}} >
          <h2  >Trayectos</h2>
          <div id="table">
            <div>
              <h4>Centro</h4>
              <h4>Juriquilla</h4>
              <h4>Plaza Paseo</h4>
              <h4>HEB </h4>
              <h4>Hospital </h4> 
            </div>
            <div style={{width:"20%"}} ></div>
            <div>
            <h4>5 min</h4>
              <h4>20 min</h4>
              <h4>3 min</h4>
              <h4>5 min</h4>
              <h4>10 min</h4> 
            </div>
          </div>

          
        </div>

        <div style={{margin: "4%"}} >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.9660449523208!2d-100.36472562568899!3d20.630240801348815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d35b88bd706ca1%3A0x6bddad0503a1af91!2zTWlzacOzbiBTYW4gSmVyw7NuaW1v!5e0!3m2!1sen!2smx!4v1695697372255!5m2!1sen!2smx" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>


      </div>
    );
  }
  
  export default Location;
  