import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchPic} from '../store/actions/picActions';


const Photo = props =>{
    useEffect(() => {
        props.fetchPic();
    },[]);

//style={{backgroundImage: `url('${props.image}')`}}

    const randomImage = event =>{
        
        props.fetchPic();
    }

    return(
        <div className="MainPhotoBody">
            
            <img src={`${props.image}`}/><br/>
            <div className="buttonsPic">
                <button onClick={event => randomImage(event)}>Fetch another Random Pic</button>
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