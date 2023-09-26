import React, { useState } from 'react';
import fotosData from '../db.json'
import img from '../images/Cuartos/p_vista.jpg'

function Fotos () {
    console.log(fotosData);
    const [area, setArea]=useState(0);
    const [path, setPath]=useState(["/images/Fachada/fachada1.jpg", "/images/Fachada/fachada2.jpg"]);
    console.log("area: ", area)

    function handleAreaClick(n) {
        setArea(n);
        let paths=[];
        fotosData[n].fotos.forEach((f)=>{
            paths.push(`/images/${fotosData[n].name}/${f.path}`)
        })
        console.log("paths: ", paths);
        setPath(paths)
    }

    return (
        <div className="fotos" >
            <h1 className="Title">Fotos</h1>

            {/* ----improve */}
            <div className="opts" >
                <button type="button" className="btn btn-secondary" id="pill" onClick={ handleAreaClick(0)} >Fachada</button>
                <button type="button" className="btn btn-secondary" id="pill" onClick={ handleAreaClick(1)}>Cuartos</button>
                <button type="button" className="btn btn-secondary" id="pill" onClick={ handleAreaClick(2)}>Vista & Roof</button>
                <button type="button" className="btn btn-secondary" id="pill" onClick={ handleAreaClick(3)}>Cocina</button>
                <button type="button" className="btn btn-secondary" id="pill" >Planta Baja</button>
                <button type="button" className="btn btn-secondary" id="pill" >Jardin</button>
                <button type="button" className="btn btn-secondary" id="pill" >Fraccionamiento</button>
                <button type="button" className="btn btn-secondary" id="pill" >Detalles</button>
                <button type="button" className="btn btn-secondary" id="pill" >Otras Áreas</button>
            </div>

            <div>
                {path.map((path,index)=>(
                    <div key={index} > 
                        <img src={path}   ></img>                        
                    </div>
                ))}


            </div>


        </div>
    )

}

export default Fotos;