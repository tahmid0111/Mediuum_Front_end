import axios from "axios"

export const getData = async(url) => {
    let res = await axios.get(url)
    // console.log(res)
    return res.data;
}