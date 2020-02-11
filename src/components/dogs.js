import React from 'react';

const Dogs = props => {
    console.log("doggies test: ", props.stuff);
    return (
        <div className="dog-images" key={props.id}>
            <img src={props.stuff} alt=""/>
        </div>
    )
}

export default Dogs;