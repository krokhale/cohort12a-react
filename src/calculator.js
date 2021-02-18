import React, {useState, useEffect} from 'react';

function Calculator(props) {

    const [numberOne, setNumberOne] = useState();
    const [numberTwo, setNumberTwo] = useState();
    const [result, setResult] = useState();

    const [allResults, setAllResults] = useState({});

    useEffect(() => {
        console.log('run this code when numberOne or numberTwo changes');
        let res = {};
        res.addition = numberOne + numberTwo;
        res.subtraction = numberOne - numberTwo;
        res.multiplication = numberOne * numberTwo;
        res.division = numberOne / numberTwo;

        console.log(res);
        setAllResults(res)

    }, [numberTwo, numberOne])

    const onNumberOneChange = async (ev) => {
        if(ev.currentTarget.value.trim().length > 0){
            setNumberOne(parseInt(ev.currentTarget.value))
        } else {
            setNumberOne('')
        }

        // setNumberOne(ev.currentTarget.value)
    };

    const onNumberTwoChange = async (ev) => {
        if(ev.currentTarget.value.trim().length > 0){
            setNumberTwo(parseInt(ev.currentTarget.value))
        } else {
            setNumberTwo('')
        }

        // setNumberTwo(parseInt(ev.currentTarget.value))
    };

    // const processResults = async () => {
    //     // allResults
    //
    //
    // };

    const add = async () => {
        let res = numberOne + numberTwo;
        setResult(res);
    };

    const subtract = async () => {
        let res = numberOne - numberTwo;
        setResult(res);
    };

    const multiply = async () => {
        let res = numberOne * numberTwo;
        setResult(res);
    };

    const divide = async () => {
        let res = numberOne / numberTwo;
        setResult(res);
    };

    return (
        <div>

            {/*<style>{`.myclass {color: red}`}</style>*/}

            <input value={numberOne} onChange={onNumberOneChange} type="text" className={'border'}/>&nbsp;&nbsp;&nbsp;
            <input value={numberTwo} onChange={onNumberTwoChange} type="text" className={'border'}/>

            <p>numberOne: {numberOne}</p>
            <p>numberTwo: {numberTwo}</p>

            <div className="grid grid-cols-2 gap-2 mt-10">
                <div className={'border p-10 bg-gray-200 cursor-pointer rounded'} onClick={add}>
                    <span className={'text-4xl'}>+</span>
                </div>

                <div className={'border p-10 bg-gray-400 cursor-pointer rounded'} onClick={subtract}>
                    <span className={'text-4xl'}>-</span>
                </div>
                <div className={'border p-10 bg-gray-500 cursor-pointer rounded'} onClick={multiply}>
                    <span className={'text-4xl'}>*</span>
                </div>
                <div className={'border p-10 bg-gray-600 cursor-pointer rounded'} onClick={divide}>
                    <span className={'text-4xl'}>/</span>
                </div>
            </div>

            <p className={'text-center text-5xl font-bold text-blue-600 mt-20'}>{result}</p>


            <h1 className={'text-center text-4xl mt-20'}>All results</h1>
            <p className={'text-center text-5xl font-bold text-blue-600 mt-20'}>Addition Result: {allResults.addition}</p>
            <p className={'text-center text-5xl font-bold text-blue-600 mt-20'}>Subtraction Result: {allResults.subtraction}</p>
            <p className={'text-center text-5xl font-bold text-blue-600 mt-20'}>Multiplication Result: {allResults.multiplication}</p>
            <p className={'text-center text-5xl font-bold text-blue-600 mt-20'}>Division Result:{allResults.division} </p>
        </div>
    );
}

export default Calculator;
