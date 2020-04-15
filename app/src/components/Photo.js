import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchPic, newPic} from '../store/actions/picActions';
import Loader from 'react-loader-spinner'


const Photo = props =>{
    useEffect(() => {
        props.fetchPic();
    },[]);

//style={{backgroundImage: `url('${props.image}')`}}

    const randomImage = event =>{
        let newPic =Math.floor(Math.random() * (1029-0)) +0;

        props.newPic(newPic);
    }

    return(
        <div className="MainPhotoBody">
            
            <img src={`${props.image}`}/><br/>
            <div className="buttonsPic">
                <button onClick={(event) => randomImage(event)}>Fetch another Random Pic</button>
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
    {fetchPic, newPic}
)(Photo);