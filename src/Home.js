import imgModern from './home/modernhouse.jpg';
import ImageAge from './home/age.jpg';
import imageHappy from './home/happy.jpg';
import imgHome from './home/homepage.jpg';
import imgHomeTwo from './home/homepagetwo.jpg';
import Footer from './Footer';
import Form from './Form';


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
            <Form/>
            <Footer/>
        </div>
    )
}

export default Home;