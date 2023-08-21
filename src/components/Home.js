import axios from "axios";
import React, { useEffect, useState } from "react";
// import './home.scss';
import './home.scss';
import InputForm from "./form/InputForm";

function Home(){
const [data,setData] = useState([]);
const [showForm,setShowForm] = useState(false);

    useEffect(()=>{  
        axios.get('http://localhost:3035/users').then
        (res =>setData(res.data))
        .catch(error =>console.log(error))

    },[]);
    
    const handleClick=() =>{
        setShowForm(true);
    }
    console.log("&&&&data",data);
    return (
        <div>
        <div className="heading">home page</div> 
        <div className="home">   
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item,index)=>{
                            return <tr key ={index}>
                             <td>{item.id}</td>
                             <td>{item.name}</td>
                             <td>{item.email}</td>
                             <td>{item.age}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>

        <button onClick ={handleClick}>Form</button>
        {showForm &&
        <InputForm/>
        }
        </div>
    )
};

export default Home;