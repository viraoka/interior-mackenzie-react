import imgModern from './home/modernhouse.jpg';
import ImageAge from './home/age.jpg';
import imageHappy from './home/happy.jpg';
import imageContact from './contact.jpg';
import { NavLink } from 'react-router-dom';
import { FaSquareInstagram } from "react-icons/fa6";
import { SlSocialTwitter } from "react-icons/sl";
import { FaPinterest } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const Home =() => {
    return (
        <div>
            <div>
            <h1>Experience • Attentiveness • Versatility</h1>
            <img className='modern' src={imgModern} alt=''/>
            </div>
            <img className='age' src={imageHappy} alt=''/>
            <img className='happy' src={ImageAge} alt=''/>
            <div className='container'>
            <h3 className='space'>Are You Ready To Love Your Space?</h3>
            </div>
            <img className='contact' src={imageContact} alt=''/>
            <div className='footer'>
                <p className='copy'>© Copyright 2023 by <span>Envarch</span></p>
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
    )
}

export default Home;