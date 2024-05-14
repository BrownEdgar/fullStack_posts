import React from 'react';
import './Product.scss';

export default function Product({ post }) {
  return (
    <div className='Product'>
      <div className="Product__image">
        <img src={`http://localhost:3000/${post.image}`} alt="" />
        <div className="Product__overlay">
          <h3>{post.title}</h3>
          <p>{post.description}</p>
        </div>
        <div className="Product__vendor">
          <img src={`http://localhost:3000/${post.user.image}`} alt="user image" />
          <div>
            <h3>{post.user.name}</h3>
            <p>
              <address>
                {post.user.email}
              </address>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};