import {useState, useEffect} from 'react'

const useFetch = (url) =>{
    const [data, setData] = useState(null);
    const [isPending, setIsPending]= useState(true);
    const [error, setError] =useState(null);


    useEffect(() => {
        const abortCont = new AbortController();
 
            fetch('https://my-json-server.typicode.com/ryanfritzc/reactResume/blogs')                                                     
            //fetch(url, {signal: abortCont.signal})
            .then(response => {
                if(!response.ok){
                    throw Error('Could not fetch the data for that resource');
                }
                return response.json();
                //return console.log("working");
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err=> {
                if (err.name === 'AbortError'){
                    console.log('fetch aborted')
                }else{
                    setIsPending(false);
                    setError(err.message);
                }
            })                                                                          
        
        /*setTimeout(() => {   
            fetch('https://my-json-server.typicode.com/ryanfritzc/reactResume/blogs')                                                     
            //fetch(url, {signal: abortCont.signal})
            .then(response => {
                if(!response.ok){
                    throw Error('Could not fetch the data for that resource');
                }
                return response.json();
                //return console.log("working");
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err=> {
                if (err.name === 'AbortError'){
                    console.log('fetch aborted')
                }else{
                    setIsPending(false);
                    setError(err.message);
                }
            })                                                                          
        }, 10000)*/

        return () => abortCont.abort();
    },  [url]);

    return {data, isPending, error}
}

export default useFetch;