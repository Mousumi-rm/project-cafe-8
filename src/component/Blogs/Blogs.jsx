import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import InsideBlog from '../InsideBlog/InsideBlog';
import './Blogs.css'

const Blogs = () => {
    const [blogs ,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('cafe.json')
        .then((res)=>res.json())
        .then((data)=>setBlogs(data))
    },[])
    return (
        <div className='total-blogs-container'>
           <div className='bloggers-container'>
            {
                blogs.map(blog =><InsideBlog
                 key = {blog.id}
                 blog = {blog}
                ></InsideBlog>)
            }
            </div> 
           <div className='side-Bar-reading-time'>
            </div> 
        </div>
    );
};

export default Blogs;
