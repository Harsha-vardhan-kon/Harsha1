import React, { useEffect, useState } from 'react'

const Fetch = () => {
    const[data,setData]=useState([]);

    useEffect(()=>{
       fetch("https://jsonplaceholder.typicode.com/users").then(harsha=>harsha.json()).then(vardhan=>setData(vardhan))
    },[])
  return (
    <div>
  {data.map(item=><li key={item.id}>{item.username}</li>)}
    </div>
  )
}

export default Fetch