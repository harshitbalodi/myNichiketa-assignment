import axiosInstance from "./axios";

const getPlayerLeaderboard= async ()=>{
    const response = await axiosInstance.get('/player');
    return response;
}

export default {getPlayerLeaderboard};