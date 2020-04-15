import React, {useEffect} from 'react';
import {connect} from 'react-redux';

const Photo = props =>{

    return(
        <div className="MainPhotoBody">
            <div {{backgroundImage: `url('${props.image}')`}}>
                <h1>{props.title}</h1>
                <h3></h3>
            </div>

        </div>

    )
}

mapStateToProps = state =>{
    title:state.title
}

export default connect(
    mapStateToProps
)(Photo);