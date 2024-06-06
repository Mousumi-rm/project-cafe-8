import React from 'react';
import './InsideBlogs.css'


const InsideBlog = (props) => {
    const {cover,author_Name,posted_date,author_Image} = props.blog

    return (
        <div className='main-inside-blog-container'>
            <img className='image-cover' src={cover} alt="kk" />
            <div className='author-container'>
                <div className='info-author'>
                    <img className='info-img' src={author_Image} alt="" />
                    <div className='name-author'>
                        <h6 className='author_Name'>{author_Name}</h6>
                        <small className='posted_date'>{posted_date}</small>
                    </div>
                </div>
                <div className='time-btn'>
                  <button><small>min Time</small></button>
                </div>
            </div> 
           <div className='big-title'>
            </div> 
           <div className='read-more'>
            </div> 
        </div>
    );
};

export default InsideBlog;