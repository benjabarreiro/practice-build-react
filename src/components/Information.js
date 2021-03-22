import React from 'react'
import Post from './Post';

function Information( { posts, onDelete } ) {
    return (
        <div>
            {posts.map((post, index) => (
                <Post key={index} post={post} onDelete={onDelete} />
            ))}
        </div>
    )
}

export default Information
