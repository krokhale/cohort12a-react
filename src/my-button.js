import React, {useState, useEffect} from 'react';

function MyButton(props) {
    console.log('props are', props);
    console.log('props are', props.bg);
    console.log('props are', props.textColor);
    console.log('props are', props.padding);

    const [dogUrl, setDogUrl] = useState();
    const [backgroundColor, setBackgroundColor] = useState('green');
    const [padding, setPadding] = useState('25px');

    const [counter, setCounter] = useState(0);

    // state variables

    // useEffect(() => {
    //     console.log('backgroundColor variable has changed, this is a side effect')
    //     if(backgroundColor == 'red'){
    //         if(counter > 10){
    //             setPadding('100px')
    //         } else {
    //             setPadding('25px')
    //         }
    //     } else {
    //         setPadding('40px')
    //     }
    // }, [backgroundColor, counter])

    useEffect(() => {
        console.log('this will only run once on component load')
        // showMessage()
    }, [])
    //
    // useEffect(() => {
    //     console.log('this will run every time ANY of the state variables change')
    // })



    const showMessage = async () => {
        // talk about promises/fetch/async await
        console.log('paragraph was clicked');
        let res = await fetch('https://dog.ceo/api/breeds/image/random');
        let data = await res.json();
        setDogUrl(data.message);

        console.log(data);
        // fetch('https://dog.ceo/api/breeds/image/random')
        //     .then((res) => {
        //         return res.json()
        //     }).then((data) => {
        //         console.log(data)
        // })
    };

    const toggleBackground = async () => {
        if(backgroundColor == 'green'){
            setBackgroundColor('red');
            // setPadding('40px');
        } else if(backgroundColor == 'red'){
            setBackgroundColor('green');
            // setPadding('25px');
        }
    };

    const countUp = async () => {
        let currentValueOfTheCounter = counter;
        let newValue  = currentValueOfTheCounter + 1;
        // writing code here to look for the counter element id on the dom and update it
        setCounter(newValue);
    };

    return (
        <>

            <p>Current value of the counter is {counter}</p>

            <p onClick={countUp}>Count up</p>

            <p onClick={showMessage}>Show a dog</p>
            <br/>

            {dogUrl && <img onClick={toggleBackground} style={{background: backgroundColor, padding: padding}} src={dogUrl} alt=""/>}

            {backgroundColor=='red' ? <p>The background color is red and the padding is 25px</p> : <p>The background color is green and the padding is 40px</p>}

            <span className={`${props.padding} rounded cursor-pointer ${props.bg} text-white`}>{props.txt}</span>

        </>
    );
}

export default MyButton;
