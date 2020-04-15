import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchPic} from '../store/actions/picActions';


const Photo = props =>{
    useEffect(() => {
        props.fetchPic();
    },[]);

//style={{backgroundImage: `url('${props.image}')`}}

    return(
        <div className="MainPhotoBody">
            <div >
            <img src={`${props.image}`}/>
                <h3></h3>
            </div>

        </div>

    )
}

const mapStateToProps = state =>{
    console.log("mapStateToProps: ", state.picReducer)
    return{
    image:state.picReducer.image,
    description:state.picReducer.image

    }
}

export default connect(
    mapStateToProps,
    {fetchPic}
)(Photo);