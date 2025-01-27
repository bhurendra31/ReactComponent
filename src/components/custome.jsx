import React from 'react';

const Custome = (props) => {
    return (
        <div>
            <h1 style={{fontSize: props.fsize, backgroundColor: props.bgColor, color: props.fontcolor, fontstyle: props.fontStylr}}>Props </h1>
        </div>
    );
}

export default Custome;
