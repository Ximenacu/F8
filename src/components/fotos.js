import React, { useState } from 'react';
import fotosData from '../db.json'
import img from '../images/Cuartos/p_vista.jpg'

function Fotos () {
    console.log(fotosData);
    const [area, setArea]=useState(0);
    const [active, setActive]=useState(0);


    function handleAreaChange(n) {
        console.log(n);
        setArea(n);
        setActive(0)
    }

    function handleImgChange(n) {
        setActive(n);
    }

    function activeArr(s){
        if (s==="L"){
            if (active === 0){
                setActive(fotosData[area].fotos.length-1);
            } else {
                setActive(active-1)
            }
        } else {
            if (active == fotosData[area].fotos.length-1 ){
                setActive(0);
            } else {
                setActive(active+1)
            }
        }
    }

    return (
        <div className="fotos" >
            <h1 className="Title">Fotos</h1>

            <div className='opts'>
                {fotosData.map((item,index)=>(
                    <button key={index} type="button" className="btn btn-secondary" id="pill" onClick={()=>handleAreaChange(index)}> {item.name} </button>
                ))}
            </div>

            <div className='lilimgs'>
                {fotosData[area].fotos.map((foto,index)=>(
                    <div  key={index}> 
                        <img src={process.env.PUBLIC_URL + `/images/${fotosData[area].name}/${foto.path}` } 
                        alt={`Image ${index}`} 
                        style={{maxHeight:"5vw"}}
                        onClick={()=>handleImgChange(index)} />                        
                    </div>
                ))}
            </div>

            <div>
                {fotosData[area].fotos[active].area ?
                    <h2>{fotosData[area].fotos[active].area}</h2>
                    : 
                    <h2>{fotosData[area].name}</h2>
                }

                <div className='flex' >
                    <button onClick={()=>{activeArr("L")}}>Anterior</button>
                    <img src={process.env.PUBLIC_URL + `/images/${fotosData[area].name}/${fotosData[area].fotos[active].path}`} 
                    style={{maxHeight:"75vh", maxWidth: "90vw"}} ></img>
                    <button onClick={()=>{activeArr("R")}}>Siguiente</button>
                    
                </div>

                <div>
                    {fotosData[area].fotos[active].notes}
                </div>
            <div></div>
            </div>

        </div>
    )

}

export default Fotos;