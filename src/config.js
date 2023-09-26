import React, { useState } from 'react';
import '../App.css';
import { useQuery } from "@apollo/client";
import { GET_VALUES } from "../utils/queries";
import { set } from 'mongoose';
// import axios from 'axios';
import Movies from './movies'

function Config(props) {
    // State Variables
    const [random, setRandom]=useState(false);
    const [theme, setTheme]=useState();
    const [selectedItems, setSelectedItems] = useState([]);

    // Fetching values from DB 
    const { loading, data } = useQuery(GET_VALUES);
    const allVals = data?.values || [];
    // console.log("data from query: ", loading, allVals);

    // // API
    // const options = {
    //     method: 'GET',
    //     url: 'https://imdb-top-100-movies.p.rapidapi.com/',
    //     headers: {
    //       'X-RapidAPI-Key': '833b00c0a4mshc0e04156ac7b60ap1ba1e5jsn4a8a2c82e2f7',
    //       'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    //     }
    // };

    // async function api () {
    //     console.log("API--")
    //     setTheme("mov")
    //     let response;
    //     try {
    //         response = await axios.request(options);
    //         console.log(response.data);
    //     } catch (error) {
    //         console.error(error);
    //     }
        
    //     return response;
    // }

    const handleItemClick = (itemKey) => {
        if (selectedItems.includes(itemKey)) { // if it was selected, unselect it. 
          setSelectedItems(selectedItems.filter((key) => key !== itemKey));
        } else { 
          setSelectedItems([...selectedItems, itemKey]);
        }
    };

    const handleQuizOpts =  async () => {
        let arrs = await positionArrays(selectedItems.length)
        // console.log("after await: ", arrs);
        // console.log("Selected Items:", selectedItems);
        let players =[]
        selectedItems.forEach(item=>{
            players.push(allVals[item])
        })
        // console.log(players)
        
        props.setQuizState("on")
        let passPlayers = [players, arrs]
        props.setPlayers(passPlayers)
    };

    const positionArrays = (tot) => {
        let arr1= [];
        let arr2= [];
        for (let n=tot-1; n>0; n--){
            let a= (-n)+tot-1; // depending if you want to start in 0 or 1
            for (let i=n; i>0; i--){
                arr1.push(a);
                arr2.push((a+1) +(-i+n))            
            }
        }
        let arrs = [arr1, arr2];
        // console.log("arr 1: ",arr1)
        // console.log("arr 2: ",arr2)
        // console.log("Questions: ", arr1.length);
        return arrs;
    }

    return (
    <div className="Config" >
        <h1>config</h1>
        <h2>Type</h2>
        <div style={{display:"flex"}} >
            <div style={{background:"red", margin:"2%"}} onClick={()=>setTheme("val")} >VALUE VOYAGE </div> 
            <div style={{background:"red", margin:"2%"}} onClick={()=>setTheme("mov")} >MOVIES</div> 
            <div style={{background:"red", margin:"2%"}}>SPORTS</div> 
            <div style={{background:"red", margin:"2%"}}>CUSTOM</div> 
        </div>
        {theme==="val"? (
            <div>Choose your fighter
                <form> comment
                    <div style={{display:"flex", flexWrap: "wrap"}}>
                        {allVals.map((val,index)=>(
                            <label key={index} style={{background:"red", margin:"1%"}} className={selectedItems.includes(index) ? 'selected' : 'unselected'} > 
                                <input 
                                type="checkbox"
                                checked={selectedItems.includes(index)}
                                onChange={() => handleItemClick(index)}
                                />
                                {index}.- {val.name} <br/>
                                {val.description}
                            </label>
                        ))}
                    </div>
                    Number of comparisons: {Math.round(0.5 * Math.pow(selectedItems.length, 2) - 0.5 * selectedItems.length - 6e-13)}
                    
                    {/* <button type="submit"  >Submit</button> */}
                </form>
            </div>
        ):(
            null
        )}
        {theme ==="mov" ? (<Movies />):(null)}
        <div>
            <h2>Order of quiz</h2>
            <label className='toggleLabel' >
                <input type="checkbox" defaultChecked={random} onClick={()=>setRandom(!random)} />
                <span />
                <strong></strong>
            </label>
        </div>  
        <br/>
        <button onClick={handleQuizOpts} >Let's go!</button>
        
    </div>
    );
}
  
export default Config;