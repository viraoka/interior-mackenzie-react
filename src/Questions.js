import { QuestionsItem } from "./QuestionsItem";
import { list } from "./list";
import imgFaq from './faq.jpg';
import imgComment from './commentFaq.jpg';
import Footer from "./Footer";
import Form from './Form';


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
            <Form/>
            <Footer/>
        </div>)
}

export default Questions;