import icon1 from '../icons/noun-house-5735873.svg'
import icon2 from '../icons/noun-bathroom-2711832.svg'
import icon3 from '../icons/noun-build-3551057.svg'
import icon4 from '../icons/noun-garden-1537524.svg'
import img1 from '../images/Fachada/fachada1.jpg'
import img2 from '../images/Jardin/fachadaDetras.jpg'

import ImageCarousel from './carousel'


function Welcome({setFotos}) {

  return (
    <div className="Welcome flex col">

        <div className='view section flex'>
            <ImageCarousel images={[img1, img2, img1, img2]} />

            <div className='transparent padd3' >
                <h2 className='Title' style={{color:"white", fontSize:"1.6rem"}} >¡Bienvenido a la F8!</h2>
                <p>Ubicada en el fraccionamiento de Misión San Jerónimo, 
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
                    <h5>4 Recamaras</h5>
                    <img src={icon1}  ></img>
                     
                
                </div>
                <div  >
                    <h5>4.5 Baños</h5> 
                    <img src={icon2}></img>
                    
                </div>
            </div>
            <div className='pairr' >
                <div >
                    <h5>300 m de construcción</h5>
                    <img src={icon3}></img>
                     
                </div>
                <div  >
                    <h5>Jardín y Muro de Escalar</h5> 
                    <img src={icon4}></img>
                    
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
