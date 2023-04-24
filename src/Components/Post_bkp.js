import React, { useEffect, useState } from 'react'

function Post() {

    const [data, setData] =  useState([]);
    const [title, setTitle] = useState('');
    const [massage, setMessage] = useState('');




    const sendPost = async () =>{
        try{
            const responce = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
                method : 'PATCH',
                body : JSON.stringify({
                    id : 1,
                    title : title,
                    body : massage,
                    userId: 1
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization : 'Bareer '
                }
            });
            const resData = await responce.json();
            console.log(resData);
            setData([resData])
        }catch(error){
            alert(error)
        }
    }

  return (
    <div>
        <h2>Posts</h2>
        <form>
            <input placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea placeholder="body" value={massage} onChange={(e) => setMessage(e.target.value)}></textarea>
        </form>
        <ul>
            {data.map((post, index) => <li key={index}>{post.title}💘{post.body}</li>)}
        </ul>
        <button onClick={sendPost}>Send</button>
    </div>
  )
}

export default Post