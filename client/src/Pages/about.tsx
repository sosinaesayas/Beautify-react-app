import React, { useState } from 'react';
import cover from "../assets/cover-img.jpg";
import './about.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const About = () => {
  const [currentslide, setCurrentSlide] = useState(0);

  const Slides = [
    {
      id: 1,
      content: {
        speech: "lorem sfhs shds dsgds gsd sgsd sdsds sdsds dsdsd ghfgf ghh ghhh fff ahds dhs dshdsd shdsh shdhs sdsj",
        name: 'Sosina Esayas',
        profession: "The founder of Beautify",
      }
    },
    {
      id: 2,
      content: {
        speech: "lorem sfhs shds dsgds gsd sgsd sdsds sdsds dsdsd ghfgf ghh ghhh fff ahds dhs dshdsd shdsh shdhs sdsj",
        name: 'Sosina Esayas',
        profession: "The founder of Beautify",
      }
    },
    {
      id: 3,
      content: {
        speech: "lorem sfhs shds dsgds gsd sgsd sdsds sdsds dsdsd ghfgf ghh ghhh fff ahds dhs dshdsd shdsh shdhs sdsj",
        name: 'Sosina Esayas',
        profession: "The founder of Beautify",
      }
    }
  ];

  const slideRight = () => {
    setCurrentSlide(currentslide + 1);
  };

  const slideLeft = () => {
    setCurrentSlide(currentslide - 1);
  };

  return (
    <div>
      <div className='cover-div'>
        <h1 className='fade-in-h1'>About Beautify</h1>
        <div className='p-container'>
          <p className='fade-in'>­ Embark on a Journey of Self-Discovery. Unleash Your Authentic Beauty with Our Guiding Support</p>
        </div>
      </div>

      <div className='about'>
        <div className='lists'>
          <p className='boldd'>15k+ </p>
          <p className='light'>customers</p>
        </div>
        <div className='lists'>
          <p className='boldd'>15k+ </p>
          <p className='light'>customers</p>
        </div>
        <div className='lists'>
          <p className='boldd'>15k+ </p>
          <p className='light'>customers</p>
        </div>
        <div className='lists'>
          <p className='boldd'>15k+ </p>
          <p className='light'>customers</p>
        </div>
      </div>

      <div className='speech-container-div'>
        <div className='slide-div'>
          <FaChevronLeft onClick={slideLeft} />
          <div className="slide-holder-div">
            {Slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`slide ${index === currentslide ? 'active' : ''}`}
              >
                <div className='speech-container'>
                  <div className='speech'>{slide.content.speech}</div>
                  <div className='name'>{slide.content.name}</div>
                  <div className='profession'>{slide.content.profession}</div>
                </div>
              </div>
            ))}
          </div>
          <FaChevronRight onClick={slideRight} />
        </div>
      </div>
    </div>
  );
};

export default About;