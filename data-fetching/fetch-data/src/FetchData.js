import { useEffect, useState } from "react"
import Child from "./Children"

function FetchData(){

    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(true)
    const [error, setError] = useState(false)

        
    const getData = ()=>{
        (async ()=>{
            const dataS = await fetch('https://jsonplaceholder.typicode.com/todos')
            const data = await dataS.json()
    
            setData(data)
            setLoading(false)
    })()
    }

    useEffect( getData,[] )

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;



        return (
            <>
            <button onClick={getData}>Submit</button>
            <Child data = {data}/>
            </>
        )

}

export default FetchData