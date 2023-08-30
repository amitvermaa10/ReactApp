import axios from "axios";

export const postData = async (url,data) =>{
    try{
         const response = await axios.post(url,data);
        return response.data;
    }
    catch(error){
        console.log(error)
    }
}

// export const fetchData = async()=>{
//     return await axios.get('http://localhost:3035/users')
//     .then(response => response.data)
//     .catch(error =>{
//         console.log(error)
//     })
// }
   

export const fetchData = async()=>{
    const response = await axios.get('http://localhost:3035/users')
    // .then(response => response.data)
    // .catch(error =>{
    //     console.log(error)
    // })
    return response;
}
  