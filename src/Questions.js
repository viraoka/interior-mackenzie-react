import { QuestionsItem } from "./QuestionsItem";
import { list } from "./list";
import imgFaq from './faq.jpg';
import imgComment from './commentFaq.jpg';
import { NavLink } from 'react-router-dom';
import { FaSquareInstagram } from "react-icons/fa6";
import { SlSocialTwitter } from "react-icons/sl";
import { FaPinterest } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const Questions = () => {
    return (<div>
        <img className="imgFaq" src={imgFaq} alt=""/>
        <div className='container'>
        <h3 className="faq">Frequently asked questions</h3>
        </div>
        <div className="title">
        {list.map((item, index) =>
        <QuestionsItem 
        key={index}
        title={item.title} 
        content={item.content}/>
        )}
        </div>
        <img className="imgComment" src={imgComment} alt=""/>
        <div className='container'>
            <h3 className='space'>Are You Ready To Love Your Space?</h3>
            </div>
            <div className='footer'>
            <p className='copy'>© Copyright 2023 by <br></br> Mackenzie Interiors</p>
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
        </div>)
}

export default Questions;