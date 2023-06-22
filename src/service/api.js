import axios from "axios";
const url = "http://localhost:8000"
export const addUser = async(data)=>{
    try {
        await axios.post(`${url}/addUser`,data);
    } catch (error) {
        console.log("error while adduser",error.message);
    }
}


export const getUsers = async()=>{
    try {
        let res = await axios.get(`${url}/users`);
 console.log(`response.data name is ${res.data[0].name}`);
        return res.data
    
    } catch (error) {
        console.log("error while fetching all user",error.message);
    }
}

export const setConversation = async (data)=>{
    try {
        await axios.post(`${url}/conversation/add`,data)
    } catch (error) {
        
    }
}

export const getConversation = async (data)=>{
    try {
      let response =   await axios.post(`${url}/conversation/get`,data)
    return response.data;
    } catch (error) {
        console.log("error while calling getConversation api",error.message);
    }
}


export const newMessage = async(data)=>{
    try {
        await axios.post(`${url}/message/add`,data)
    } catch (error) {
        console.log('error while calling message api',error.message);
    }
}

export const getMessages = async(Id)=>{
    try {
        let response = await axios.get(`${url}/message/get/${Id}`);
    return response.data;
    } catch (error) {
        
    }
}