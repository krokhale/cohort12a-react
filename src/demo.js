import React, {useState, useEffect} from 'react';
import MyButton from "./my-button";

function Demo(props) {
    const [counter, setCounter] = useState(0);

    const countUp = async () => {
        let currentValueOfTheCounter = counter;
        let newValue  = currentValueOfTheCounter + 1;
        // writing code here to look for the counter element id on the dom and update it
        setCounter(newValue);
    };

    return (
        <div style={{border: '1px solid #ddd', padding: '20px'}}>
            this is coming from a demo component!

            <p>Current value of the counter is {counter}</p>
            <p onClick={countUp}>Count up</p>

            {/*{counter>10 && <MyButton padding={'p-2'} bg={'bg-blue-600'} textColor={'white'} txt={'Sign out'}  />}*/}
            {/*{(counter==10 || counter==12) ? <MyButton padding={'p-2'} bg={'bg-blue-600'} textColor={'white'} txt={'Sign out'}  /> : <p>Count is not 10!</p>}*/}


            {/*<br/>*/}
            {/*<br/>*/}
            {/*<MyButton padding={'p-2'} bg={'bg-blue-600'} textColor={'white'} txt={'Sign out'}  />*/}

            {/*<br/>*/}
            {/*<br/>*/}
            {/*<MyButton padding={'p-5'} bg={'bg-red-600'} textColor={'white'} txt={'Sign in'} />*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<MyButton padding={'p-10'} bg={'bg-yellow-600'} textColor={'white'} txt={'Sign up'}  />*/}
            {/*<br/>*/}
            {/*<br/>*/}
        </div>
    );
}

export default Demo;
