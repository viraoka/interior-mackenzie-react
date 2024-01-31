import { useState } from 'react';
import { data } from './data';
import imgHall from './hallway.jpg';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { NavLink } from 'react-router-dom';
import { FaSquareInstagram } from "react-icons/fa6";
import { SlSocialTwitter } from "react-icons/sl";
import { FaPinterest } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import commentOne from './about/commentsOne.jpg';




const Residential =() => {

    const [project, setProject] = useState(0);
    const { image } = data[project];

    const previousProject = () => {
        setProject((project => {
            project --;
            if (project < 0) {
                return data.length - 1;
            }
            return project;
        }))
    }
    
    const nextProject = () => {
        setProject((project => {
            project ++;
            if (project > data.length - 1) {
                project = 0;
            }
            return project;
        }))
    }

    return (<div>
            <img className='hall' src={imgHall} alt=''/>
            <div className='container'>
            <h2 className='our'>A Glance At Some Of Our Residential Projects</h2>
            </div>

            <div className='container'>
            <button onClick={previousProject}><GrPrevious /></button>
            <img className='project' src={image} alt=''/>
            <button onClick={nextProject}><GrNext /></button>
            </div>
            <div className='container'>
            <h2 className='award'>Award-Winning Residential Design Services</h2>
            </div>
            
            <p className='resident'>Taking on a design project independently can be complicated, time-consuming, and sometimes overwhelming. To ensure that the time, energy, and financial investment you make in your home is sound, many folks find it very beneficial to work with a professional interior designer. At MI, we tailor our interior design services to your specific needs, delivering spaces that are both relevant and enduring, no matter the scope.</p>
            <p className='resident'>Our design process is centered around you — the client.  We do not cater to passing trends nor do we mimic the same style in every project; instead, we apply a thoughtful exploration of your aesthetic, values, and lifestyle. We use a “five senses” design approach, honing in on how you want to feel when you walk in your space and using interior design as a tool to translate that feeling into the three-dimensional world. </p>

            <img className='feature comone'  src={commentOne} alt=''/>
            
            <div className='container'>
            <h3 className='space'>Are You Ready To Love Your Space?</h3>
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

export default Residential;

