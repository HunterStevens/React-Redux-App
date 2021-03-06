import axios from 'axios';

export const fetchPic = () =>{
    return dispatch =>{
        dispatch({type:'FETCH_PIC_START'});
        axios.get("https://picsum.photos/400")
        .then(res => {
            console.log("fetched image, ", res);
            dispatch({type:'FETCH_PIC_SUCCESS', payload:res})
        })
        .catch(err =>{
            console.log("Fetching Error: ", err);
            dispatch({type:'FETCH_PIC_FAIL', payload:`ERROR: ${err.response}`})
        })
    }
}

export const newPic = (index) => {
    return dispatch=>{
        dispatch({type:'FETCH_PIC_START'});
        axios.get(`https://picsum.photos/id/${index}/400`)
        .then(res => {
            console.log("fetched image, ", res);
            dispatch({type:'FETCH_PIC_SUCCESS', payload:res})
        })
        .catch(err =>{
            console.log("Fetching Error: ", err);
            dispatch({type:'FETCH_PIC_FAIL', payload:`ERROR: ${err.response}`})
        })
    }
}

export const grayscalePic = (index) => {
    return dispatch=>{
        dispatch({type:'FETCH_PIC_START'});
        axios.get(`https://picsum.photos/400?grayscale`)
        .then(res => {
            console.log("fetched image, ", res);
            dispatch({type:'FETCH_PIC_SUCCESS', payload:res})
        })
        .catch(err =>{
            console.log("Fetching Error: ", err);
            dispatch({type:'FETCH_PIC_FAIL', payload:`ERROR: ${err.response}`})
        })
    }
}

export const blurPic = (index) =>{
    return dispatch=>{
        dispatch({type:'FETCH_PIC_START'});
        axios.get(`https://picsum.photos/400/?blur`)
        .then(res => {
            console.log("fetched image, ", res);
            dispatch({type:'FETCH_PIC_SUCCESS', payload:res})
        })
        .catch(err =>{
            console.log("Fetching Error: ", err);
            dispatch({type:'FETCH_PIC_FAIL', payload:`ERROR: ${err.response}`})
        })
    }
}