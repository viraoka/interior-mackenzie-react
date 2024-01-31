import imageUnique from './about/unique.jpeg';
import featuredin from './about/featuredin.jpg';
import imgAbout from './about/about.jpg';
import imgJoin from './about/join.jpg';
import imgTeamOne from './about/imgteam1.jpg';
import imgTeamTwo from './about/imgteam2.jpg';
import imgTeamThree from './about/imgteam3.jpg';
import imgTeamFour from './about/imgteam4.jpg';
import imgTeamFive from './about/imgteam5.jpg';
import imgTeamSix from './about/imgteam6.jpg';
import { NavLink } from 'react-router-dom';
import { FaSquareInstagram } from "react-icons/fa6";
import { SlSocialTwitter } from "react-icons/sl";
import { FaPinterest } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";



const About =() => {
    return (
        <div>
            <img className='unique' src={imageUnique} alt=''/>
            <div className='about'>
                <p className='par-about'>For over a decade, Mackenzie Interiors has gained recognition for our innovative and visionary approach to design, driving the industry towards greater creativity, inclusivity, and sustainability. At MI, we customize our interior design services to meet your specific requirements, creating spaces that are both relevant and long-lasting, regardless of the project scale. <br></br> With a team composed of individuals hailing from various corners of the globe, the MI staff brings together a wealth of diverse backgrounds and perspectives, resulting in captivating and distinctly unconventional designs. Our design endeavors encompass a wide range of settings, including private homes, multi-family buildings, office spaces, restaurants, retail establishments, and wellness facilities. We particularly excel in projects involving mixed-use and repurposed spaces. Our team possesses the necessary resources, flexibility, and expertise to undertake projects not only in Arizona but across North America.</p>
                <img className='imgAbout' src={imgAbout} alt=''/>
            </div>
            <div className='container'>
                <h2 className='team'>Meet Our Team</h2>
            </div>
            <div className='teamcont'>
                <div className='ourteam'>
                <img className='designer' src={imgTeamOne} alt=''/>
                <img className='designer' src={imgTeamTwo} alt=''/>
                <img className='designer' src={imgTeamThree} alt=''/>
                <img className='designer' src={imgTeamFour} alt=''/>
                <img className='designer' src={imgTeamFive} alt=''/>
                <img className='designer' src={imgTeamSix} alt=''/>
                </div>
            </div>
            <img className='feature' src={featuredin} alt=''/>
            <div className='join'>
                    <img className='imgJoin' src={imgJoin} alt=''/>
                    <div>
                    <h4 className='title-join'>Join our team</h4>
                    <p className='parJoin'>We're always looking for badass professionals to join our team! Follow us on Instagram or Facebook to be the first to know about open positions.</p>
                    </div>
                </div>
            <div className='container'>
            <h3 className='space space-about'>Are You Ready To Love Your Space?</h3>
            </div>
            
            <div className='footer'>
            <p className='copy'>© Copyright 2023 by <span className='mac'>Mackenzie Interiors</span></p>
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

export default About;