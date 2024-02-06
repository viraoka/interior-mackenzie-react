import { NavLink } from 'react-router-dom';
import { IoCallOutline } from "react-icons/io5";


const Form = () => {
    return (
        <div  className='call-form'>
        <div> 
                <div className='call'>
                    <h5 className='call-title'>A Free 15-Minute Call</h5>
                    <p className='call-par'>Let's hop on a discovery call<br></br> to chat about your project and answer<br></br> any questions you might have about<br></br> working with MI.</p>
                    <NavLink className="number" to="tel: +1(602) 529-2191"><IoCallOutline /></NavLink>
                </div>
            </div>
        <div className='form'>
            <h4 className='form-title'>Send us a message</h4>
            <p className='form-par'>Whether your project is residential or commercial, we're eager to<br></br> learn all about it. Please provide us with as much detail as<br></br> possible regarding your project, including your design preferences,<br></br> objectives, and any specific requirements you have in mind.<br></br> Additionally, if you have a preferred day or time for us to reach out<br></br> to you, kindly let us know. We look forward to discussing your<br></br> project further.<br></br></p>
            <p className='if'>*If you are inquiring about your product or service, please contact
            <br></br> us via email at  
            <NavLink className="email" to="mailto: mackenzieinteriors@gmail.com" >mackenzieinteriors@gmail.com</NavLink></p>
            <form className='theform'>
            <label htmlFor='name' className='label'>Name</label>
            <div className='pad'><input className='field' type='text' name='name'/></div>
            <label htmlFor='email' className='label'>Email</label>
            <div className='pad'> <input className='field' type='text' name='email'/></div>
            <label htmlFor='phone' className='label'>Phone</label>
            <div className='pad'> <input className='field' type='tel' name='phone'/></div>
            <label htmlFor='tell' className='label'>Tell us a little about your project!</label>
            <div className='pad'><textarea rows='4' cols='53' className='field-textarea' name='tell'/></div>
            <button className='btn-form'>Submit</button>
            </form>
        </div>
        </div>
    )
}

export default Form;