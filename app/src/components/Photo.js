import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchPic, newPic, grayscalePic, blurPic} from '../store/actions/picActions';
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
    const grayImage = event =>{
        let newPic =Math.floor(Math.random() * (1029-0)) +0;

        props.grayscalePic(newPic);
    }
    const blurImage = event =>{
        let newPic =Math.floor(Math.random() * (1029-0)) +0;

        props.blurPic(newPic);
    }


    if(props.isFetching){
        return<Loader/>
    }


    return(
        <div className="MainPhotoBody">
            
            <img src={`${props.image}`}/>

            <div className="buttonsPic">
                <button onClick={(event) => randomImage(event)}>Fetch another Random Pic</button>
                <button onClick={(event) => grayImage(event)}>Fetch a Grayscale Pic</button>
                <button onClick={(event) => blurImage(event)}>Fetch a blury Pic</button>

            </div>

        </div>

    )
}

const mapStateToProps = state =>{
    console.log("mapStateToProps: ", state.picReducer)
    return{
    image:state.picReducer.image,
    description:state.picReducer.image,
    isFetching:state.picReducer.isFetching

    }
}

export default connect(
    mapStateToProps,
    {fetchPic, newPic, grayscalePic, blurPic}
)(Photo);