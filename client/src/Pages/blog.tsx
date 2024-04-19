import React from 'react'
import {Link}  from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai';
import {FaPhone} from "react-icons/fa";
import { FaUser } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';
import image1 from "../assets/models/model2.jpg";
import "./blog.css";


const Blog = () => {
  return (
    <div className='blog-overall'>
       <div className='blog-first'>
        <div className='blog-input-icon'>
          <input className='blog-search' placeholder='Search blogs here...'/>
           <AiOutlineSearch /*onclick here*/ className='search-link'  size={20}  style= {{ color:"gray", marginRight:"2rem"}}/>
        </div>
      
            <div className='phone'>
              <FaPhone className="phone-icon" size={35} style={{ color:"gray", marginRight:"2rem"}}/>
              <div className='phone-p'>
                  <p className='phone-number'>+2518536677</p>
                  <p className='available-time'>from 2:00 to 12:00 every day</p>
              </div>
         </div> 
       </div>
       
      <div className='blog-layout'>
        
          <div className='blog-body'>
            <Link className='image11' to="/blog1"> <img className='image1' src={image1} alt=''/></Link>
            <div className='blog-body-parts'>
              <div className='blog-writer-time'>
                <FaUser className='user-icon'/>
                <p className='writer-name'>Beautify Admin</p>
                <FaClock className='clock-icon'/>
                <p className='blog-time'>01/07/2016 11:24am</p>
              </div> 
              <Link className='blog-title-link' to = "/blog1"><p className='blog-title'> the Beautify effect on me</p></Link>
              <Link className='read-more-link' to="/blog1">
                <div className='read-more'>
                <p>READ MORE</p>
                <FaArrowDown className='arrow-icon'/>
                </div>
              </Link>
            </div>
          </div>

          <div className='blog-body'>
            <Link className='image11' to="/blog1"> <img className='image1' src={image1} alt=''/></Link>
            <div className='blog-body-parts'>
              <div className='blog-writer-time'>
                <FaUser className='user-icon'/>
                <p className='writer-name'>Beautify Admin</p>
                <FaClock className='clock-icon'/>
                <p className='blog-time'>01/07/2016 11:24am</p>
              </div> 
              <Link className='blog-title-link' to = "/blog1"><p className='blog-title'> the Beautify effect on me</p></Link>
              <Link className='read-more-link' to="/blog1">
                <div className='read-more'>
                <p>READ MORE</p>
                <FaArrowDown className='arrow-icon'/>
                </div>
              </Link>
            </div>
          </div>

          <div className='blog-body'>
            <Link className='image11' to="/blog1"> <img className='image1' src={image1} alt=''/></Link>
            <div className='blog-body-parts'>
              <div className='blog-writer-time'>
                <FaUser className='user-icon'/>
                <p className='writer-name'>Beautify Admin</p>
                <FaClock className='clock-icon'/>
                <p className='blog-time'>01/07/2016 11:24am</p>
              </div> 
              <Link className='blog-title-link' to = "/blog1"><p className='blog-title'> the Beautify effect on me</p></Link>
              <Link className='read-more-link' to="/blog1">
                <div className='read-more'>
                <p>READ MORE</p>
                <FaArrowDown className='arrow-icon'/>
                </div>
              </Link>
            </div>
          </div>

          <div className='blog-body'>
            <Link className='image11' to="/blog1"> <img className='image1' src={image1} alt=''/></Link>
            <div className='blog-body-parts'>
              <div className='blog-writer-time'>
                <FaUser className='user-icon'/>
                <p className='writer-name'>Beautify Admin</p>
                <FaClock className='clock-icon'/>
                <p className='blog-time'>01/07/2016 11:24am</p>
              </div> 
              <Link className='blog-title-link' to = "/blog1"><p className='blog-title'> the Beautify effect on me</p></Link>
              <Link className='read-more-link' to="/blog1">
                <div className='read-more'>
                <p>READ MORE</p>
                <FaArrowDown className='arrow-icon'/>
                </div>
              </Link>
            </div>
          </div>

          <div className='blog-body'>
            <Link className='image11' to="/blog1"> <img className='image1' src={image1} alt=''/></Link>
            <div className='blog-body-parts'>
              <div className='blog-writer-time'>
                <FaUser className='user-icon'/>
                <p className='writer-name'>Beautify Admin</p>
                <FaClock className='clock-icon'/>
                <p className='blog-time'>01/07/2016 11:24am</p>
              </div> 
              <Link className='blog-title-link' to = "/blog1"><p className='blog-title'> the Beautify effect on me</p></Link>
              <Link className='read-more-link' to="/blog1">
                <div className='read-more'>
                <p>READ MORE</p>
                <FaArrowDown className='arrow-icon'/>
                </div>
              </Link>
            </div>
          </div>

          <div className='blog-body'>
            <Link className='image11' to="/blog1"> <img className='image1' src={image1} alt=''/></Link>
            <div className='blog-body-parts'>
              <div className='blog-writer-time'>
                <FaUser className='user-icon'/>
                <p className='writer-name'>Beautify Admin</p>
                <FaClock className='clock-icon'/>
                <p className='blog-time'>01/07/2016 11:24am</p>
              </div> 
              <Link className='blog-title-link' to = "/blog1"><p className='blog-title'> the Beautify effect on me</p></Link>
              <Link className='read-more-link' to="/blog1">
                <div className='read-more'>
                <p>READ MORE</p>
                <FaArrowDown className='arrow-icon'/>
                </div>
              </Link>
            </div>
          </div>
        
      </div>
      </div>
  )
}

export default Blog