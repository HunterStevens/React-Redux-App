import { bindActionCreators } from "redux";

const initialState = {
    image:'',
    isFetching:false,
    error:'',
    title:''
}

export const picReducer = (state=initialState, action) => {
    switch(action.type){
        case 'FETCH_PIC_START':
            return{
                ...state,
                isFetching:true
            }
        case 'FETCH_PIC_SUCCESS':
            return {
                ...state,
                isFetching:false,
                image: action.payload,
                title:action.payload,
                error:''
            }
        case 'FETCH_PIC_FAIL':
            return{
                ...state,
                isFetching:false,
                error:action.payload
            }

        default:
            return state;
    }
}