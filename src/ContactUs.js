import imgContact from './imgcontact.jpg';
import Chat from './Chat';
import Form from './Form';
import Footer from './Footer';


const ContactUs =() => {
    return (
        <div>
            <img className='imgContact' src={imgContact} alt=''/>
            <Chat/>
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
            <Form/>
            <Footer/>
        </div>
    )
}

export default ContactUs;