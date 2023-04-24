import React, { useEffect, useState } from 'react'
import PostCard from './PostCard';

const Post =  () => {

    const [data, setData] = useState([]);

    const [count, setCount] = useState(0);

    useEffect( () =>{
        getpost();   
    },[])

    useEffect( () =>{
        console.log('mount update')
    },[data])


    const getpost = async () =>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/photos')
    const reasdata = await response.json();
    setData(reasdata)
    
    console.log(reasdata)

    }catch(error){
        alert(error)
    }
}
    

  return (
    <>
        <ul>
            {data.slice(0, 10).map((post, i) => <PostCard key={i} url={post.url} title={post.title} /> ) }
            <button onClick={getpost}>Click</button>
            <p>{count}</p>
            <button onClick={() => setCount(count+1)}>+</button>
        </ul>
    </>
  )
}

export default Post;