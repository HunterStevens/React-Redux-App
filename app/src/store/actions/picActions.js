import axios from 'axios';

export const fetchPic = () =>{
    return dispatch =>{
        dispatch({type:'FETCH_PIC_START'});
        axios.get("https://picsum.photos/300")
        .then(res => {
            console.log("fetched image, ", res)
        })
        .catch(err =>{
            console.log("Fetching Error: ", err);
        })
        

    }
}