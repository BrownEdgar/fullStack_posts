import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Products.scss';
import Product from '../Product/Product';

export default function Products() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios('http://localhost:3000/posts')
      .then(res => setPosts(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='Products'>
      {posts.map(post => {
        return <Product key={post.id} post={post} />
      })}
    </div>
  );
};