import React from 'react';
import './InsideBlogs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBookmark} from '@fortawesome/free-solid-svg-icons'



const InsideBlog = (props) => {
    // console.log(props)
    const {cover,author_Name,posted_date,author_Image,read_Time,title,tags} = props.blog;
    const handleAddToBookmark = props.handleAddToBookmark;
    const handelToReadingTime = props.handelToReadingTime;
    const blog = props.blog;
    return (
       
          <div >
            <img className='image-cover' src={cover} alt="kk" />

                <div>
                        <div className='info-author'>
                            
                            <div className='name-author'>
                                <img className='info-img' src={author_Image} alt="" />

                            <div>
                                <h6 className='author_Name'>{author_Name}</h6>
                                <small className='posted_date'>{posted_date}</small> 
                            </div>
                            </div>

                            <div className='time-btn'>
                                <p>{read_Time} min Time</p>
                                <button 
                                   onClick={()=>handleAddToBookmark(blog)}
                                className='bookmark-btn'><FontAwesomeIcon className='icon' icon={ faBookmark} /></button>
                                </div>
                        </div>
                    
                    </div> 

                    <div>
                        <h4 className='big-title'>{title}</h4>
                        <small className='small-tag'>{tags}</small>
                    </div> 
                    <div className='author-container'>
                        {/* <button className='read-more'>Mark As Read</button> */}
                        <a  
                          onClick={()=>handelToReadingTime(blog.read_Time)}
                        className='read-more' href="/markAsRead">Mark As Read</a>
                    </div>  
                </div>
    );
};

export default InsideBlog;