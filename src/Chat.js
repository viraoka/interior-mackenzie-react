import { NavLink } from 'react-router-dom';


const Chat = () => {
    return (
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
    )
}

export default Chat;