import f8 from '../icons/f8.svg'
import hamIconw from '../icons/hamIconw.svg'

const Header = ({setMenu, setFotos, classN, fotos}) => {
  return (
    <header className={"flex"} id={`${classN}`}>
        <a href="#up" onClick={()=>{setFotos(false)}} >
        <img src={f8} style={{height: "10vw", maxHeight:"70px", marginLeft: "10%"}} ></img>
        </a>

        {/* {fotos ? (
            <h1 style={{fontFamily: 'Playfair Display SC, serif'}} >Fotos</h1>
        ):(
            null
        )} */}
        

         {/* <div className="flex"
          style={{flexBasis: "70%",justifyContent:"space-around" }}>
          <a href='#fotosSection' ><h4>Fotos</h4></a>
          <a href='#locationsection' ><h4>Ubicación</h4></a>
          <a href='#infosection' ><h4>Más Información</h4></a>
          <a href='#contactSection' ><h4>Contacto</h4></a>
        </div>  */}
        
        <img
        className='ham'
        src={hamIconw}
        onClick={()=>{setMenu(true)}}
        alt="Hamburger Icon"
        />
    </header> 
  );
};

export default Header;
