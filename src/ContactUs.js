import imgContact from './imgcontact.jpg';
import { NavLink } from 'react-router-dom';
import { IoCallOutline } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { SlSocialTwitter } from "react-icons/sl";
import { FaPinterest } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const ContactUs =() => {
    return (
        <div>

            <img className='imgContact' src={imgContact} alt=''/>
            
            <div className='contactus'>
                <div className='title-par'>
                    <h4 className='chat-title'>Let's Chat</h4>
                    <p className='par-chat'>Questions? Comments? We'd love to hear from you! <br></br>
                    Give us a call, fill out the contact form below and we'll talk soon. We strive to be your interior design resource. 
                    </p>
                </div>
                <div className='contact-vendors'>
                    <p><b>Contact</b>
                    <br></br>
                    <br></br>
                    (602) 529-2191<br></br>
                    mackenzieinteriors@gmail.com<br></br>
                    734 W. Polk St. Phoenix, AZ 85007 <br></br>
                    *By Appointment Only
                    </p>
                    <br></br>
                    <p><b>Vendors</b>
                    <br></br>
                    <br></br>
                    If you are looking to visit our office to educate us <br></br> about your product or service or to help us update our library, please email 
                    <NavLink className="email" to="mailto: mackenzieinteriors@gmail.com" > mackenzieinteriors@gmail.com</NavLink> to schedule a vendor meeting.<br></br>
                    *By Appointment Only
                    </p>
                </div>
            </div>

            <p className='par-contact'>Mackenzie Interiors is an award-winning interior design firm servicing both residential and commercial clients in Arizona and beyond. We offer a wide range of services that are tailored to each client's specific needs because we believe that everyone deserves access to quality interior design.
            </p>
            <p className='par-contact'>
            Our design process starts with a complimentary introductory discovery call followed by an initial consultation to learn more about you and your project and answer any questions you may have about MI or our services. We look forward to connecting with you regarding your project!
            </p>
            <div className='comment-contact container'>
                <div>
                <p className='par-contact'>“Mackenzie Interiors completely blew my mind and made me the happiest homeowner around! I've never hired a designer and I'm so glad my first experience was this. Every single step of the process was so thoughtful, well-organized and easy to follow. They are INCREDIBLY talented designers and really took the time to listen to my vision. They were able to execute my vision perfectly. They came up with designs that I couldn't have even thought of in my dreams- i'm seriously so happy I could cry. My home is about to look like one of those homes out of a magazine and I get to live in it! I cannot wait to work with them again. Thank you for everything.”
                </p>
                <p className='contcom'>-Lina, Phoenix, AZ</p>
                </div>
            </div>
            <div className='container'>
            <h3 className='space'>Are You Ready To Love Your Space?</h3>
            </div>
            
            <div className='call-form'> 
                <div className='call'>
                    <h5 className='call-title'>A Free 15-Minute Call</h5>
                    <p className='call-par'>Let's hop on a discovery call<br></br> to chat about your project and answer<br></br> any questions you might have about<br></br> working with MI.</p>
                    <NavLink className="number" to="tel: +1(602) 529-2191"><IoCallOutline /></NavLink>
                </div>
                <div className='form'>
                    <h4 className='form-title'>Send us a message</h4>
                    <p className='form-par'>Whether your project is residential or commercial, we're eager to<br></br> learn all about it. Please provide us with as much detail as<br></br> possible regarding your project, including your design preferences,<br></br> objectives, and any specific requirements you have in mind.<br></br> Additionally, if you have a preferred day or time for us to reach out<br></br> to you, kindly let us know. We look forward to discussing your<br></br> project further.<br></br></p>
                    <p className='if'>*If you are inquiring about your product or service, please contact
                    <br></br> us via email at  
                    <NavLink className="email" to="mailto: mackenzieinteriors@gmail.com" >mackenzieinteriors@gmail.com</NavLink></p>
                    <form className='theform'>
                        <label className='label'>Name</label>
                        <div className='pad'><input className='field' type='name'/></div>
                        <label className='label'>Email</label>
                        <div className='pad'> <input className='field' type='email'/></div>
                        <label className='label'>Phone</label>
                        <div className='pad'> <input className='field' type='tel'/></div>
                        <label className='label'>Tell us a little about your project!</label>
                        <div className='pad'><textarea className='field-textarea'/></div>
                        <button className='btn-form'>Submit</button>
                    </form>
                </div>
            </div>
            <div className='container prefooter'>
            <p>Mackenzie Interiors  |  Designing Interiors Coast to Coast  |  734 W. Polk St. Phoenix, AZ 85007  | 602-529-2191  |  mackenzieinteriors@gmail.com</p>
            </div>
            <div className='footer'>
            <p className='copy'>© Copyright 2023 by <span className='mac'>Mackenzie Interiors</span></p>
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

export default ContactUs;