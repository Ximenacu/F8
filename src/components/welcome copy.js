import icon1 from '../icons/homeW.png'
import icon2 from '../icons/showerW.png'
import icon3 from '../icons/excavatorW.png'
import icon4 from '../icons/happinessW.png'
import img1 from '../images/Fachada/fachada1.jpg'
import img2 from '../images/Jardin/fachadaDetras.jpg'

import ImageCarousel from './carousel'


function Welcome({setFotos}) {

  return (
    <div className="Welcome flex col">
        <div className='view section flex'>
            
            <div className='transparent padd3' >
                <h2 className='subtitle' >Vive en Querétaro</h2>
                <p>Un marketing impresionante que hará que compres esta súper casa así. Un marketing impresionante que hará que compres esta súper casa así.</p>
            </div>
        </div>

        {/*------- welcome image */}
        <div className=" section padd3 flex wrapBox green" >
            <div className="sec" >
                <img src={icon1}></img>
                <h3>4 Recamaras</h3> 
            </div>
            <div className="sec" >
                <img src={icon2}></img>
                <h3>4.5 Baños</h3> 
            </div>
            <div className="sec" >
                <img src={icon3}></img>
                <h3>300 m de construcción</h3> 
            </div>
            <div className="sec" >
                <img src={icon4}></img>
                <h3>Jardín y Muro de Escalar</h3> 
            </div>
            
        </div>

        

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

        </div>

        <button type="button" 
            className={'active-button'} 
            id="pill" 
            href='#fotosSection'
            onClick={()=>{setFotos(true)}}>
                Ver Fotos   
        </button>

        <div id="fotosSection"></div>
        
    </div>
  );
}

export default Welcome;
