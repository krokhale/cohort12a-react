import React, {useState, useEffect} from 'react';

function GiphyImage(props) {
    console.log(props)

    const [currentClass, setCurrentClass] = useState('flex justify-center p-2 bg-gray-200');

    useEffect(() => {
        if(props.index==0){
            setCurrentClass('flex justify-center p-2 bg-blue-200')
        }
        if(props.index==1){
            setCurrentClass('flex justify-center p-2 bg-red-200')
        }
    }, [])

    return (
        <div className={currentClass}>
        {/*<div className={props.index==0 ? 'flex justify-center p-2 bg-blue-200' : 'flex justify-center p-2 bg-gray-200'}>*/}
            {/*this should spit out a result image*/}
            <img src={props.image} alt=""/>
        </div>
    );
}

export default GiphyImage;
