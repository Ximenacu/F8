import React, { useState, useRef, useEffect } from 'react';
import fotosData from '../db.json'
import arrowR from '../icons/right-arrow.png'
import arrowL from '../icons/left-arrow.png'

function Fotos () {
    //console.log(fotosData);
    const [area, setArea]=useState(0);
    const [active, setActive]=useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const secs = 3000;
    // const [modal, setModal]=useState(false);

    useEffect(() => {
        // Use setTimeout to hide the image after the specified display time
        const timeoutId = setTimeout(() => {
          setIsVisible(false);
        }, secs);
    
        // Clear the timeout if the component unmounts or if the displayTime changes
        return () => {
          clearTimeout(timeoutId);
        };
    }, [secs]);

    function handleAreaChange(n) {
        setArea(n);
        setActive(0);
        //setIsVisible(true)
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
                   
                } else {
                    setActive(fotosData[area-1].fotos.length-1);
                    setArea(area-1);
                
                } 

            } else {
                setActive(active-1)
            }
        } else {
            if (active == fotosData[area].fotos.length-1 ){ 
                setActive(0);
                if(area===fotosData.length-1){
                    setArea(0);
                  
                } else {
                    setArea(area+1);
                    
                }
            } else {
                setActive(active+1)
            }
        }
    }

    // ---------- handle swipe 
    let touchStartX = 0;
    let touchStartY = 0;

    const handleTouchStart = (e) => {
        console.log("toush start")
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        
    };

    const handleTouchEnd = (e) => {
        console.log("toush start")
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        const deltaX = endX - touchStartX;
        const deltaY = endY - touchStartY;
        

        if( Math.abs(deltaY)<20 || deltaX + deltaY > 0 ){
            if(deltaX < 0  || deltaX===0  ){  // NEXT 
                activeArr();
            } else { // PREV
                activeArr("L");
            }
        }
        
    };


    return (
        <div className="fotos sectionb">
          

            {/*-------- buttons */}
            <div className='opts section' >
                {fotosData.map((item,index)=>(
                    <button key={index} type="button" 
                    className={`${area === index ? 'active-button' : 'inactive-button'}`} 
                    id="pill" 
                    onClick={()=>handleAreaChange(index)}>
                        {item.name} 
                    </button>
                ))}
                {/* <hr className="section-divider"></hr> */}
            </div>

            {/* ---- todas las fotos en pequeño */}
            <div className='section'
            style={{
                padding:"5px 3%",
                margin:"0 3% 10%", 
                backgroundColor:  "#D9D9D9", 
                height:"17vh"}}
                
                >Todas las Fotos de {fotosData[area].name}

                <div className='flex wrapBox'
                style={{
                    justifyContent:"flex-start", }} >
                    {fotosData[area].fotos.map((foto,index)=>(
                        <img 
                        key={index}
                        src={process.env.PUBLIC_URL + `/images/${fotosData[area].name}/${foto.path}` } 
                        alt={`Image ${index}`} 
                        style={{maxHeight:"5vw", minHeight:"40px", margin:"3px 1px "}}
                        onClick={()=>handleImgChange(index)}
                        className={`img ${active === index ? 'bordered-image' : ''}`} 
                        />                        
                    ))}
                </div>
            </div>
           

            <div 
            className='flex col '
            style={{
                // minHeight:"65vh", 
                justifyContent:"flex-start", 
                position:"relative"}}
            >   
                <h3 className='tgreen' id="bold" >
                    {fotosData[area].fotos[active].area != "" ?
                       fotosData[area].fotos[active].area
                    : 
                       fotosData[area].name
                    } 

                </h3>
                <button className='noStyle myfotobutton' id="prev"
                    onClick={()=>{console.log("prev"); activeArr("L")}}>
                    {/* <img src={arrowL} ></img> */}
                </button>
                <button className='noStyle myfotobutton' id="next"
                    onClick={()=>{console.log("next"); activeArr("R")}}>
                    {/* <img src={arrowR} ></img> */}
                </button>

                <div 
                    onTouchStart={handleTouchStart} 
                    onTouchEnd={handleTouchEnd}
                style={{
                        
                        position: "relative" ,
                        maxWidth: '90vw', 
                        // position:"relative", 
                        height: 'auto', 

                    }}
                >   
                    {isVisible && 
                        <div style={{position:"absolute", top: "10%", left:"10%",transition: "opacity 0.3s" }}>
                            Desliza para ver más
                        <img src={arrowR} style={{
                            alignSelf:"flex-end", 
                            }} ></img> 
                        </div>
                    }
                    <img
                        src={process.env.PUBLIC_URL + `/images/${fotosData[area].name}/${fotosData[area].fotos[active].path}`}
                        style={{
                            
                            // maxWidth: '90vw', 
                            // maxHeight: '90vh',
                            // height: 'auto', 
                            width:"100%",
                            maxHeight:"85vh"
                            
                        }}
                    />
                    {fotosData[area].fotos[active].notes ?
                        <div className="overlay flex col">
                            {fotosData[area].fotos[active].notes} 
                        </div>
                        : 
                        null
                    }


                </div>
                

            </div>

            {/* ---- todas las fotos en pequeño */}
            {/* <div className='section'
            style={{
                padding:"1% 3%",
                margin:"0 3% 10%", 
                backgroundColor:  "#D9D9D9"}}
                
                >Todas las Fotos de {fotosData[area].name}

                <div className='flex wrapBox section'
                style={{
                    justifyContent:"flex-start", }} >
                    {fotosData[area].fotos.map((foto,index)=>(
                        <img 
                        key={index}
                        src={process.env.PUBLIC_URL + `/images/${fotosData[area].name}/${foto.path}` } 
                        alt={`Image ${index}`} 
                        style={{maxHeight:"5vw", minHeight:"40px", margin:"3px 1px "}}
                        onClick={()=>handleImgChange(index)}
                        className={`img ${active === index ? 'bordered-image' : ''}`} 
                        />                        
                    ))}
                </div>
            </div> */}

            <hr className="section-divider"></hr>




            
                    
            {/* <div
                className="horizontal-scroll-container"
                ref={containerRef}
                style={{ overflowX: 'scroll', whiteSpace: 'nowrap' }}>
                
                {fotosData[area].fotos.map((foto, index) => (
                    
                    <img
                    key={index}
                    src={process.env.PUBLIC_URL + `/images/${fotosData[area].name}/${foto.path}`}
                    alt={`Image ${index}`}
                    style={{
                        display: 'inline-block',
                        maxWidth: '100vw', // Adjust the width as needed
                        maxHeight: '90vh',
                        height: 'auto', // Maintain aspect ratio
                        marginRight: '10px', // Add spacing between images
                    }}
                    />
                ))}
            </div> */}
            
            {/* {modal ?
                <div className='imgModal'>

                    <img src={close} className='ham' id="xIcon" onClick={()=>{setModal(false)}} ></img>
                    <div className='flex' id="myfoto">
                    
                        <button className='noStyle' id="prev"
                            onClick={()=>{activeArr("L")}}>
                            <img src={arrowL} ></img>
                        </button>

                  
                        <img
                        src={process.env.PUBLIC_URL + `/images/${fotosData[area].name}/${fotosData[area].fotos[active].path}`} 
                        style={{maxHeight:"95vh", maxWidth: "95vw"}} ></img>  
                       

                 
                        <button className='noStyle' id="next"
                        onClick={()=>{activeArr("R")}}>
                            <img src={arrowR} ></img>
                        </button>
                        
                    </div>
                  
                    
                </div>
                 : 
                null
            } */}
          

        </div>
    )
}

export default Fotos;