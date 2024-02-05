import imgModern from './home/modernhouse.jpg';
import ImageAge from './home/age.jpg';
import imageHappy from './home/happy.jpg';
import imgHome from './home/homepage.jpg';
import imgHomeTwo from './home/homepagetwo.jpg';
import { NavLink } from 'react-router-dom';
import { SlSocialTwitter } from "react-icons/sl";
import { FaPinterest } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";


const Home =() => {
    return (
        <div>
            <div>
            <h1>Experience • Attentiveness • Versatility</h1>
            <img className='modern' src={imgModern} alt=''/>
            </div>
            <img className='age' src={imageHappy} alt=''/>
            <img className='happy' src={ImageAge} alt=''/>
            
            <img className='homepage' src={imgHome} alt=''/>
            <img className='homepage' src={imgHomeTwo} alt=''/>

            <div className='container'>
            <h3 className='space'>Are You Ready To Love Your Space?</h3>
            </div>
            <div className='footer'>
            <div>
            <p className='copy'>© Copyright 2023 by <br></br> <span className='mac'>Mackenzie Interiors</span></p>
            </div>
                <div className='icons'>
                <NavLink className="inst" to="https://www.instagram.com/interiordesignmag/" target='_blank'>
                <FaSquareInstagram />
                </NavLink>
                <NavLink className="inst" to="https://twitter.com/InteriorDesign" target='_blank'>
                <SlSocialTwitter />    
                </NavLink>
                <NavLink className="inst" to="https://www.pinterest.com/pin/55169164178682688/" target='_blank'>
                <FaPinterest />                    
                </NavLink>
                <NavLink className="inst" to="https://www.facebook.com/yuandesignpj" target='_blank'>
                <FaFacebook />                    
                </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Home;