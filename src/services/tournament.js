import axiosInstance from "./axios";

const getTournaments = async() =>{
    const response = await axiosInstance.get('/tournament');
    return response;
}

export default {getTournaments};