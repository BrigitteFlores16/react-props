import React from 'react';
import  {posts }from './data/Posts.jsx';
import Button from'./Button/Button.jsx';
import '../assets/css/index.css';

const Card = () => {
  const publishedPosts = posts.filter((post) => post.published);
  const uniqueTags = [...new Set(posts.flatMap((post) => post.tags))];

  return (
    <main className="container">
      <section className="posts">
        {publishedPosts.map((post) => (
          <article key={post.id} className="card">
            <img src="./src/assets/img/600x400.png" alt={post.title} className="card-img-top" />
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p className="card-text">{post.content}</p>
              <Button/>
            </div>
          </article>
        ))}
      </section>
      <aside className="tags-list">
        <h3>Tags Disponibili</h3>
          {uniqueTags.map((tag) => (
            <li key={tag} className={`tag tag-${tag}`}>
              {tag}
            </li>
          ))}
      </aside>
    </main>
  );
};

export default Card;
