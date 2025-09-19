import classes from "./Blog.module.scss";
import { useEffect, useState } from 'react';
export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/blogs')
      .then(response => {
        if (!response.ok) throw new Error('Ошибка');
        return response.json();
      })
      .then(data => setBlogs(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className={classes.section1}>
        <button className={classes.name}>Blog</button>
        <h1>Our latest blogs</h1>
        <h3>Accumsan semper euismod dolor vitae metus.</h3>
        <div className={classes.container}>
        {blogs.map(blog => (
          <div key={blog.id} className={classes.blog}>
            <img src={`http://localhost:5000/images/${blog.image_url}`} alt={blog.title} className="rounded-xl mb-4" />
            <div className={classes.box}>
              <button className={classes.category}>{blog.category}</button>
              <span className={classes.time}>{blog.read_time}</span>
            </div>
            <div className={classes.div}>
                <h2>{blog.title}</h2>
                <p>{blog.description}</p>
            </div>
            
            <button className={classes.read}><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2_573)"><path d="M32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16Z" fill="#162E3C"/><path d="M14.3333 11V12.3333H18.7267L11 20.06L11.94 21L19.6667 13.2733V17.6667H21V11H14.3333Z" fill="white"/></g><defs><clipPath id="clip0_2_573"><rect width="32" height="32" fill="white"/></clipPath></defs></svg>
                Read more
            </button>
          </div>
        ))}
      </div>
      <button className={classes.all}>
            View all
        </button>
    </section>
  );
}
