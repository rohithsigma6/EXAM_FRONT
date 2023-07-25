import { axiosInstance } from "./axiosInstance";
export const RegisterUser = async (data) => {
    try {
        const resposne = await axiosInstance.post("http://localhost:1234/v1/register", data)
        return resposne.data;
    }
    catch (err) {
        return err
    }
}
export const LoginUser = async (data) => {
    try {
        const resposne = await axiosInstance.post("http://localhost:1234/v1/login", data)
        return resposne.data;
    }
    catch (err) {
        return err
    }
}
export const Currentuser = async () => {

    try {
        console.log(localStorage.getItem("token"))
        const resposne = await axiosInstance.get("http://localhost:1234/v1/getuserdetails")
        console.log(resposne)
        return resposne;
    }
    catch (err) {
        console.log(err)
        return err
    }
} 