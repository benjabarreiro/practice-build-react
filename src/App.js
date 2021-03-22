import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Information from './components/Information';

function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPost = async () => {
      const postsFromServer = await fetchPosts()
      setPosts(postsFromServer)
    }

    getPost()
  }, [])

  //Fetch Data
  const fetchPosts = async () => {
    const res = await fetch('http://localhost:5000/posts')
    const data = await res.json()

    return data
  }

  // Add Post
  const AddPost = async (post) => {
    const res = await fetch('http://localhost:5000/posts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })

    const data = await res.json()

    setPosts([...posts, data])
  }

  // Delete Post
  const deletePost = async (id) => {
    await fetch(`http://localhost:5000/posts/${id}`, {
      method: 'DELETE'
    })

    setPosts(posts.filter((post) => post.id !== id))
  }

  return (
    <div className="App">
      <Header />
      <Form onAdd={AddPost} />
      <Information posts={posts} onDelete={deletePost} />
    </div>
  );
}

export default App;
