import api from "../configs/api";

const SendOtp = async (mobile) =>{
    try{
        const response =await api.post("auth/send-otp", { mobile });
        console.log(response);
        return {response}
    } catch(error){
        console.log(error.response);
        return {error}
    }
}

const checkOtp = async (mobile, code)=>{
    try{
        const response = await api.post("auth/check-otp", {mobile, code})
        return {response}
    }catch{
        return{error}
    }
}

export {SendOtp, checkOtp}
