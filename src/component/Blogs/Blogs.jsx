import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import InsideBlog from '../InsideBlog/InsideBlog';
import TitleBar from '../SideBar/TitleBar';
import './Blogs.css'

const Blogs = () => {
    const[bookMarks,setBookMarks] = useState([])
    const[readingTime,setReading] = useState([])
    const [blogs ,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('cafe.json')
        .then((res)=>res.json())
        .then((data)=>setBlogs(data))
    },[]) 
     
    const handleAddToBookmark =(blog)=>{
        const newBookMark = [...bookMarks, blog]
        setBookMarks(newBookMark);
    }
    const handelToReadingTime = (readingTime )=>{  
        let time = 0
       for(const blog of readingTime){
        const newReadingTime = time + blog.read_Time ; 
        setReading(newReadingTime);
        
       }
          const remainingBookmark = bookMarks.filter(bookMark =>bookMark.id !== id);
        setBookMarks(remainingBookmark);
    }
       
    return (
    <div className='total-blogs-container'>
             
           <div className='bloggers-container'>
                <p>Blogs:{blogs.length}</p>
                
                    {
                        blogs.map(blog =>(<InsideBlog
                        key = {blog.id}
                        blog = {blog}
                        handelToReadingTime = {handelToReadingTime}
                        handleAddToBookmark = {handleAddToBookmark}
                        ></InsideBlog>))
                    }
            </div> 
             <div className='side-Bar-reading-time'>
                 <div className='position'>
                    <div className='ReadingTime'>
                        <h4>ReadingTime:{readingTime}</h4>
                    </div>
                    <div className='Bookmark'>
                        <h6>number Of Title {bookMarks.length}</h6>
                        {
                            bookMarks.map((bookmark, id) =><TitleBar 
                            key={id}
                            bookmark={bookmark}
                             ></TitleBar> )
                        }
                    </div>
               </div>

                
            </div> 
    </div>
    );
};

export default Blogs;
