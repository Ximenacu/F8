import icon1 from '../icons/land.png'
import icon2 from '../icons/gardening.png'
import icon3 from '../icons/excavatorW.png'

function Size() {
    return (

        <div className="Size flex col sectionb" id="infosection" >
            <h1 className="Title">Tamaño</h1>

            <div className="flex wrapBox section padd3 green" >

                <div className="sec" >
                    <h3>Terreno</h3>
                    <img src={icon1}></img>
                    <h3>335 m2</h3>
                     
                </div>
                <div className="sec" >
                    <h3>Construcción</h3>
                    <img src={icon3}></img>
                    <h3>296 m2</h3>
                </div>
                <div className="sec" >
                    <h3>Jardín</h3>
                    <img src={icon2}></img>
                    <h3>un número m2</h3>
                </div>
            </div>

            <div id="blue" className=' padd3'>
                <h1 className="Title"
                 style={{color:"white"}} >
                    Datos Generales
                </h1>
                <div className='flex wrapBox' id="aynose" >
                    <h3>* Sistema de Riego</h3>
                    <h3>* Hidroneumático</h3>
                    <h3>* Cuarto de Servicio</h3>
                    {/* <h3>* 2 Plantas</h3> 
                    <h3>* Construida en 2016</h3>*/}
                    <h3>* Estacionamiento Techado</h3>

                    

                </div>

            </div>

            <div id="locationsection"></div>

        </div>
    );
  }
  
  export default Size;
  