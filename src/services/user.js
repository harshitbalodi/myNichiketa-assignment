import axiosInstance from "./axios";

const getUserProfile = async(username)=>{
    const response = await axiosInstance.get(`/user/${username}`);
    return response;
}

export default {getUserProfile};