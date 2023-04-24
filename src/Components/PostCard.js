import React from 'react'

function PostCard({url, title}) {
  return (
    <div>
        <img src={url}/>
        <p>{title}</p>
    </div>
  )
}

export default PostCard