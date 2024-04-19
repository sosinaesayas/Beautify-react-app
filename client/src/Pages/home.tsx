import React from 'react'
import cover from "../assets/image2.jpg"
import ImageWithButtons from '../components/imagewithbuttons';
import featuredImage1 from "../assets/lipstick/lipstick1.jpg"
import featuredImage2 from "../assets/lipstick/lipstick2.jpg"
import featuredImage3 from "../assets/lipstick/lipstick3.jpg"
import featuredImage4 from "../assets/lipstick/lipstick4.jpg"
import featuredImage5 from "../assets/nailPolish/nailpolish.jpg"
import featuredImage6 from "../assets/nailPolish/nailpolish2.jpg"
import featuredImage7 from "../assets/nailPolish/nailpolish3.jpg"
import featuredImage8 from "../assets/nailPolish/nailpolish4.jpg"
import "./home.css"
import Products2 from './products2';
import Product2 from './product2';
const Home = () => {
  return (
    <div>
        <div className='first-part'>
          <div className='logo-container'>
               <div className='logo'>Beautify with our products</div>
          </div>
          <div className='image-container'>
              <img  className="image1" src={cover} alt='a girl with our makeup product'/>
          </div>
        </div>

         <div className='second-part'>
          
         <p className='featured'>Featured</p>
         <div className='first-images'>
            {Products2.slice(0, 4).map((product) => (
              <Product2 data={product} />
            ))}
          </div>

                <div className='listofimages'>
                    <div className='Message-container'>
                      <div className='messages'>
                        <h2>Free delivery</h2>
                        <p>for all orders over $300</p>
                      </div>

                      <div className='messages'>
                        <h2>Secure payment</h2>
                        <p>100% secure guarentee</p>
                      </div>

                      <div className='messages'>
                        <h2>Easy returns</h2>
                        <p>30 days return policy</p>
                      </div>

                      <div className='messages'>
                        <h2>Special support</h2>
                        <p></p>
                      </div>
                    </div>        
                </div>
            </div>

            <div className='first-images'>
            {Products2.slice(4, 8).map((product) => (
              <Product2 data={product}/>
            ))}
          </div>

          <div className='final-part'>
             <p>Indulge in the Essence of Beauty, Embrace Your Unique Glow, and Unleash the Power of Confidence to Illuminate Your World</p>
          </div>

          {/* {Images.map((image:any, index:any) => (
                      <ImageWithButtons key={index} src={image.src} alt={image.alt } />
                    ))}
        */}
    </div>
  ) 
}

export default Home;

