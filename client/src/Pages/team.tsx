import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import "./team.css"
import team_pic1 from "../assets/team_pic/pexels-eden-vaknin-15985483.jpg"
import team_pic2 from "../assets/team_pic/pexels-cottonbro-studio-5654207.jpg"
import team_pic3 from "../assets/team_pic/pexels-antoni-shkraba-5178006.jpg"
import team_pic4 from "../assets/team_pic/pexels-antoni-shkraba-7984906.jpg"
import team_pic5 from "../assets/team_pic/pexels-cottonbro-studio-4813355.jpg"
import team_pic6 from "../assets/team_pic/pexels-george-milton-6954149.jpg"
const Team = () => {
  return (
    <div>
      <div className='team-title-div'><h2 className='team-title'>our team members are here for you</h2></div>

      <div className='team-images'>

        <div className='images-container'>
        <img className='images' src={team_pic1} alt="team memeber1"/>
        <div className='team-profile'>
          <div>
          <p className='name-p'>Samantha George</p>
          <p className='profession-p'>makeup artist</p>
          </div>
          <div className='social-icons'>
            <Link className='icon' to="/blog1"><FaFacebook/></Link>
            <Link className='icon' to="./blog1"><FaInstagram/></Link>
            <Link className='icon' to="./blog1"><FaTwitter/></Link>
          </div>
        </div>
        </div>

        <div className='images-container'>
        <img className='images' src={team_pic2} alt="team memeber2"/>
        <div className='team-profile'>
          <p className='name-p'>Kate Austen</p>
          <p className='profession-p'>makeup artist</p>
          <div>
            <Link className='icon' to="/blog1"><FaFacebook/></Link>
            <Link className='icon' to="./blog1"><FaInstagram/></Link>
            <Link className='icon' to="./blog1"><FaTwitter/></Link>
          </div>
        </div>
        </div>

        <div className='images-container'>
        <img className='images' src={team_pic3} alt="team memeber3"/>
        <div className='team-profile'>
          <p className='name-p'>Clair James</p>
          <p className='profession-p'>makeup artist</p>
          <div>
            <Link className='icon' to="/blog1"><FaFacebook/></Link>
            <Link className='icon' to="./blog1"><FaInstagram/></Link>
            <Link className='icon' to="./blog1"><FaTwitter/></Link>
          </div>
        </div>
        </div>

        <div className='images-container'>
        <img className='images' src={team_pic4} alt="team memeber4"/>
        <div className='team-profile'>
          <p className='name-p'>Ruth Jon</p>
          <p className='profession-p'>makeup artist</p>
          <div>
            <Link className='icon' to="/blog1"><FaFacebook/></Link>
            <Link className='icon' to="./blog1"><FaInstagram/></Link>
            <Link className='icon' to="./blog1"><FaTwitter/></Link>
          </div>
        </div>
        </div>

        <div className='images-container'>
        <img className='images' src={team_pic5} alt="team memeber5"/>
        <div className='team-profile'>
          <p className='name-p'>Rachel Micheal</p>
          <p className='profession-p'>makeup artist</p>
          <div>
            <Link className='icon' to="/blog1"><FaFacebook/></Link>
            <Link className='icon' to="./blog1"><FaInstagram/></Link>
            <Link className='icon' to="./blog1"><FaTwitter/></Link>
          </div>
        </div>
        </div>

        <div className='images-container'>
        <img className='images' src={team_pic6} alt="team memeber6"/>
        <div className='team-profile'>
          <p className='name-p'>Tyler Anthony</p>
          <p className='profession-p'>makeup artist</p>
          <div>
            <Link className='icon' to="/blog1"><FaFacebook/></Link>
            <Link className='icon' to="./blog1"><FaInstagram/></Link>
            <Link className='icon' to="./blog1"><FaTwitter/></Link>
          </div>
        </div>
        </div>

      </div>
      
    </div>
  )
}

export default Team
