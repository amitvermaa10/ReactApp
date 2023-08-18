import axios from "axios";
import React, { useEffect, useState } from "react";

function Home(){
const [data,setData] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3035/users').then
        (res =>setData(res.data))
        .catch(error =>console.log(error))

    },[]);
    
    console.log("&&&&data",data);
    return (
        
        <div>
            <p>home page</p>
        </div>
    )
};

export default Home;