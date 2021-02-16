import React, {useState, useEffect} from 'react';
import GiphyImage from "./giphy-image";
// 4zv45wmD5vJvLn2UE3B4tNBY1ny9kZZV
// api.giphy.com/v1/gifs/search

function Giphy(props) {

    const [searchTxt, setSearchTxt] = useState('');
    const [results, setResults] = useState([]);

    const onSearchChange = async (ev) => {
        // console.log(ev.currentTarget.value);
        setSearchTxt(ev.currentTarget.value);
    };

    const fetchResults = async () => {
        // at this point you need to know what the user typed or searched for and fetch it from the API
        console.log('the user search string is: ', searchTxt)
        // google startws sending each alphabet to the server and fetches fetchResults()
        // displays results

        // fetch(`https://api.giphy.com/v1/gifs/search?api_key=4zv45wmD5vJvLn2UE3B4tNBY1ny9kZZV&q=${searchTxt}`)
        //     .then((res) => {
        //         return res.json()
        //     }).then((data) => {
        //         // do stuff with data
        // })


        let res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=4zv45wmD5vJvLn2UE3B4tNBY1ny9kZZV&q=${searchTxt}`)
        let images = await res.json();
        console.log(images);
        console.log(images.data[0].images.original.url)
        let imageArray = [];

        for(let img of images.data){
            imageArray.push(img.images.original.url)
        }

        console.log(imageArray)
        setResults(imageArray)
        setSearchTxt('')

    };

    return (
        <div className={'border'}>

            {/*create react app*/}
            {/*Hooks*/}
            {/*forms in react*/}
            {/*map in react*/}
            {/*state in react*/}
            {/*props in react*/}


            <div className={'w-full bg-gray-100 h-screen p-10'}>
                <input value={searchTxt} onChange={onSearchChange} type="text" className={'border mr-5'}/>
                {/*{searchTxt}*/}
                {/*asjd&nbsp;&nbsp;kasjhd*/}
                <button onClick={fetchResults} className={'bg-blue-600 p-1 cursor-pointer rounded text-white'}>Submit</button>

                <br/>
                <br/>
                <div>
                    <h1>Results found: {results.length}</h1>
                    {results.map((result, idx) => {
                        // return <img src={result} key={idx} />
                        // return <span>Result Number {idx+1} is{result}</span>
                        // return <div key={idx}>
                        //     <p>
                        //         A result
                        //     </p>
                        //
                        //     <img src={result} alt=""/>
                        // </div>
                        return <GiphyImage key={idx} image={result} index={idx} />
                    })}

                </div>

            </div>




        </div>
    );
}

export default Giphy;
