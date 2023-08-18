import axios from "axios";
import React, { useEffect, useState } from "react";

function Home(){
const [data,setData] = useState([])
{
    useEffect(()=>{
        axios.get('http://localhost:3035/users').then

    },[])
    return (
        <div>
            <p>home page</p>
        </div>
    )
};
};
export default Home;