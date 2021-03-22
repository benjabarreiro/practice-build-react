import React from 'react'
import { FaTimes } from 'react-icons/fa'

function Post({ post, onDelete }) {
    return (
        <div>
            <h3>
                {post.text}
                <FaTimes 
                style={{color:'red', cursor:'pointer'}} 
                onClick={() => onDelete(post.id)} />
            </h3>
        </div>
    )
}

export default Post
