import view from '../images/VISTA2.jpg'
import icon1 from '../images/icons/homeW.png'
import icon2 from '../images/icons/showerW.png'
import icon3 from '../images/icons/excavatorW.png'
import icon4 from '../images/icons/happinessW.png'
import img1 from '../images/fachada2.jpg'
import img2 from '../images/fachadaDetras.jpg'

import ImageCarousel from './carousel'



function Welcome() {
  return (
    <div className="Welcome">
        {/*------- welcome image */}
        {/* <div back >
            <img className="view" src={view} ></img>
        </div>
        lll */}

        <div className='view cont'>
            
            <div className='transparent' >
                <h2>Vive en Querétaro</h2>
                <t>Un marketing impresionante que hará que compres esta súper casa así. Un marketing impresionante que hará que compres esta súper casa así.</t>
            </div>
        </div>

        {/*------- welcome image */}
        <div className="wrapBox" id="blue" >
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

        <div className='cont' >
            <h1 className="Title">¡Bienvenido a la F8!</h1>
            <div className="carouselCont" >
                <ImageCarousel images={[img1, img2, img1, img2]} />
            </div>
            
            <h4 className='texto' >Ubicada en el fraccionamiento de Misión San Jerónimo, esta casa cuenta con una vista espectacular, 4 recámaras, dos de ellas con doble altura, patio de n metros cuadrados, una excelente ubicación y ... un muro de escalar!</h4>
            <button type="button" className="btn btn-secondary">Ver todas las fotos</button>

        </div>
        
    </div>
  );
}

export default Welcome;
