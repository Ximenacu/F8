import React, { useState } from 'react';
import fotosData from '../db.json'
import arrowL from '../icons/left-arrow.png'
import arrowR from '../icons/right-arrow.png'
import close from '../icons/close.svg'

function Fotos () {
    console.log(fotosData);
    const [area, setArea]=useState(0);
    const [active, setActive]=useState(0);
    const [activeButton, setActiveButton] = useState(0);
    const [modal, setModal]=useState(false);
    console.log("modal: ", modal)


    function handleAreaChange(n) {
        setArea(n);
        setActive(0);
        setActiveButton(n);
    }

    function handleImgChange(n) {
        setActive(n);
    }

    function activeArr(s){
        
        if (s==="L"){
            if (active === 0){
                if(area===0){
                    setActive(fotosData[fotosData.length-1].fotos.length-1)
                    setArea(fotosData.length-1);
                    setActiveButton(fotosData.length - 1);
                } else {
                    setActive(fotosData[area-1].fotos.length-1);
                    setArea(area-1);
                    setActiveButton(area - 1);
                } 

            } else {
                setActive(active-1)
            }
        } else {
            if (active == fotosData[area].fotos.length-1 ){ 
                setActive(0);
                if(area===fotosData.length-1){
                    setArea(0);
                    setActiveButton(0);
                } else {
                    setArea(area+1);
                    setActiveButton(area + 1);
                }
            } else {
                setActive(active+1)
            }
        }
    }



    return (
        <div className="fotos" id="fotosSection" >
            <h1 className="Title">Fotos</h1>

            {/*-------- buttons */}
            <div className='opts' >
                {fotosData.map((item,index)=>(
                    <button key={index} type="button" 
                    className={`${activeButton === index ? 'active-button' : 'inactive-button'}`} 
                    id="pill" 
                    onClick={()=>handleAreaChange(index)}>
                        {item.name} 
                    </button>
                ))}
                <hr className="section-divider"></hr>
            </div>

            <div className='section flex' id="choice" >
                {/* ---- todas las fotos en pequeño */}
                <div className='lilimgs '  >
                    {fotosData[area].fotos.map((foto,index)=>(
                        <div  key={index} 
                            style={{marginLeft: "2%"}} > 
                            <img src={process.env.PUBLIC_URL + `/images/${fotosData[area].name}/${foto.path}` } 
                            alt={`Image ${index}`} 
                            style={{maxHeight:"5vw", minHeight:"40px"}}
                            onClick={()=>handleImgChange(index)}
                            className={`img ${active === index ? 'bordered-image' : ''}`} />                        
                        </div>
                    ))}
                </div>

                <div style={{flexGrow:"1"}} >
                    {/* ---- titulo foto */}
                    {fotosData[area].fotos[active].area !== "" ?
                        <h3 className='subtitle tgreen'   >{fotosData[area].fotos[active].area}</h3>
                        : 
                        <h3 className='subtitle tgreen'  >{fotosData[area].name}</h3>
                    }

                    <div className='flex' id="myfoto" >
                        {/* ---- anterior */}
                        <button className='noStyle' id="prev"
                            onClick={()=>{activeArr("L")}}>
                            <img src={arrowL} ></img>
                        </button>

                        {/* ---- FOTO activa */}
                        <div onClick={()=>{setModal(true)}} >
                            <img
                            src={process.env.PUBLIC_URL + `/images/${fotosData[area].name}/${fotosData[area].fotos[active].path}`} 
                            style={{maxHeight:"85vh", maxWidth: "90vw"}} ></img>

                            {/* ---- nota */}
                            {fotosData[area].fotos[active].notes ?
                                <div className="overlay flex">
                                    {fotosData[area].fotos[active].notes} 
                                </div>
                                : 
                                null
                            }    
                        </div>

                        {/* ---- siguiente */}
                        <button className='noStyle' id="next"
                        onClick={()=>{activeArr("R")}}>
                            <img src={arrowR} ></img>
                        </button>
                        
                    </div>
                </div>
            </div>
            
            {modal ?
                <div className='imgModal'>

                    <img src={close} className='ham' id="xIcon" onClick={()=>{setModal(false)}} ></img>
                    <div className='flex' id="myfoto">
                        {/* ---- anterior */}
                        <button className='noStyle' id="prev"
                            onClick={()=>{activeArr("L")}}>
                            <img src={arrowL} ></img>
                        </button>

                        {/* ---- FOTO activa */}
                        <img
                        src={process.env.PUBLIC_URL + `/images/${fotosData[area].name}/${fotosData[area].fotos[active].path}`} 
                        style={{maxHeight:"95vh", maxWidth: "95vw"}} ></img>  
                       

                        {/* ---- siguiente */}
                        <button className='noStyle' id="next"
                        onClick={()=>{activeArr("R")}}>
                            <img src={arrowR} ></img>
                        </button>
                        
                    </div>
                  
                    
                </div>
                 : 
                null
            }
          

        </div>
    )

}

export default Fotos;