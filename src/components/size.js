import icon1 from '../icons//SVG/SVG/Terreno.svg'
import icon2 from '../icons/SVG/SVG/Jardimmm.svg'
import icon3 from '../icons/SVG/SVG/Area.svg'

function Size() {
    return (

        <div className="Size flex col sectionb" id="infosection" >
            <h1 className="Title section">Tamaño</h1>

            <div className="flex section green"
            style={{width:"90vw", justifyContent:" space-evenly"}} >

                <div className="sec" id="bold" >
                    <h4 id="bold" >Terreno</h4>
                    <img id="icons" src={icon1}></img>
                    <h3 id="bold" >335 m</h3>
                     
                </div>
                <div className="sec" >
                    <h6 id="bold" >Construcción</h6>
                    <img id="icons"src={icon3}></img>
                    <h3 id="bold" >296 m</h3>
                </div>
                <div className="sec" >
                    <h4 id="bold"  style={{textAlign:"left"}} 
                    >Jardín</h4>
                    <img id="icons" src={icon2}></img>
                    <h3 id="bold" >100 m</h3>
                </div>
                
                
            </div>

            <div id="blue" className=' padd3 f8back'>
                <h1 className="Title section"
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
  