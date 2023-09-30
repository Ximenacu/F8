import icon1 from '../icons/SVG/SVG/Casa.svg'
import icon2 from '../icons/SVG/SVG/Bathroom.svg'
import icon3 from '../icons/SVG/SVG/Area.svg'
import icon4 from '../icons/SVG/SVG/Jardimmm.svg'

import img1 from '../images/carrusel/fachada1.jpg'
import img2 from '../images/carrusel/VISTA - Copy.jpg'
import img3 from '../images/carrusel/fachadaDetras.jpg'
import img4 from '../images/carrusel/muro.jpg'
import img5 from '../images/carrusel/c1_entrada - Copy.jpg'
import img6 from '../images/carrusel/p_vista.jpg'

import ImageCarousel from './carousel'


function Welcome({setFotos}) {

  return (
    <div className="Welcome flex col">

        <div className='view section flex'>
            <ImageCarousel images={[img1, img2, img3, img4, img5, img6]} />

            <div className='transparent padd3' >
                <h2  style={{color:"white", fontSize:"1.6rem"}} >¡Bienvenido a la F8!</h2>
                <p className='subtitle' >Ubicada en el fraccionamiento de Misión San Jerónimo, 
                 esta casa cuenta con una vista espectacular, 
                 4 recámaras, dos de ellas con tapanco, 
                  jardín, una excelente ubicación<br/> y ... ¡un muro de escalar!</p>
            </div>
        </div>

        {/*------- welcome image */}
        <div className='green section'
         >
            <div className='pairr' >
                <div>
                    
                    <img id="icons" src={icon1}  ></img>
                     <h5 id="bold" >4 Recamaras</h5>
                
                </div>
                <div >
                    
                    <img id="icons" src={icon2}></img>
                    <h5 id="bold" >4.5 Baños</h5> 
                </div>
            </div>
            <div className='pairr' >
                <div >
                    
                    <img id="icons" src={icon3}></img>
                    <h5 id="bold" >296 m de construcción</h5> 
                </div>
                <div  >
                     
                    <img id="icons" src={icon4}></img>
                    <h5 id="bold" >Jardín y Muro de Escalar</h5>
                </div>
            </div>
            
        </div>

        
{/* 
        <div className='padd3 section' id="blue" >

            <h1 className="Title" id="tbig" >¡Bienvenido a la F8!</h1>
            
            <div className="section" >
                <ImageCarousel images={[img1, img2, img1, img2]} />
            </div>
            
            <h4 className='section twhite ' >
                Ubicada en el fraccionamiento de Misión San Jerónimo, <br/>
                 esta casa cuenta con una vista espectacular, <br/>
                 4 recámaras, dos de ellas con tapanco, <br/>
                  jardín, una excelente ubicación<br/> y ... un muro de escalar!
            </h4>

        </div> */}

       
        <button type="button" 
            className={'active-button'} 
            id="pill" 
       
            href='#fotosSection'
            onClick={()=>{setFotos(true)}}>
                Ver Fotos   
        </button>
        
    </div>
  );
}

export default Welcome;
