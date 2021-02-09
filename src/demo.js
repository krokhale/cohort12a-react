import React, {useState, useEffect} from 'react';
import MyButton from "./my-button";

function Demo(props) {
    return (
        <div style={{border: '1px solid #ddd', padding: '20px'}}>
            this is coming from a demo component!

            <br/>
            <br/>
            <MyButton bg={'bg-blue-600'} textColor={'white'} txt={'Sign out'}  />

            <br/>
            <br/>
            <MyButton bg={'bg-red-600'} textColor={'white'} txt={'Sign in'} />
            <br/>
            <br/>
            <MyButton bg={'bg-yellow-600'} textColor={'white'} txt={'Sign up'}  />
            <br/>
            <br/>
        </div>
    );
}

export default Demo;
