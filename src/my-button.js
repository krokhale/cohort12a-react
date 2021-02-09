import React, {useState, useEffect} from 'react';

function MyButton(props) {
    console.log('props are', props);
    console.log('props are', props.bg);

    return (
        <>
            <span className={`p-2 rounded cursor-pointer ${props.bg} text-white`}>{props.txt}</span>

        </>
    );
}

export default MyButton;
