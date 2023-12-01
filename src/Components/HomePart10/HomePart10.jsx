import React from 'react';
import './HomePart10.css';
import '../App.css';
import RowParagraphs from './RowParagraphs';

export default function HomePart10() {
  return (
    <div>
      <div className="loading">
        <div className="loader">
            <div className="loading-lefttoright loader-gap"></div>
        </div>
      </div>
      <div className="frequently-asked-questions-container">
        <h3 style={{textAlign: "center"}} className='h3 frequently-asked-questions-h3'>Frequently Asked Questions</h3>
        <div className="questions-container">

          <RowParagraphs 
            quest = "What all details do I need to provide you to start off with the work?"
            answ = "It will be easier for us if you share all the relevant information of your project like – opportunities, deadlines and the main aim of your business. This way, we can help you get developers of the highest quality who will provide you with the best software development solutions."
          />
          <RowParagraphs 
            quest = "What major programming languages and technologies do you use in your work?"
            answ = "At Poulima Infotech, our expertise enables us to provide you with a wide range of custom software development solutions that take into account our customers’ goals. Few of the many programming languages we use are Reactjs, React Native, Nodejs, Flutter, JavaScript, Python, Django, Expressjs."
          />
          <RowParagraphs 
            quest = "How much time does it take to start off with the project?"
            answ = "That depends on the project. We will schedule a quick meeting then and there to get more information about your expectations and goals. Rest you can be well assured as our team works hard to ensure that all of our projects are completed on time."
          />
          <RowParagraphs 
            quest = "If a developer gets stuck in the code, do you have supervisors who can take over without the need for any extra help from us?"
            answ = "Yes, we have a hierarchical structure so that all developers are assisted by their senior mentors and peers. You won’t need to worry about the hurdles until you rely on something from your end like code access or anything else. If you have hired us as your dedicated developer, we will take care of making sure that the final product always functions perfectly."
          />
          <RowParagraphs 
            quest = "What kind of support can I expect from your team?"
            answ = "We offer personalized, proactive customer support by phone, email and chat. We’re here to help you continuously throughout the process. We’ll be reaching out to see if you need anything and provide regular updates on how things are going. We take complete responsibility for the presence and performance of our work-force to ensure that you’re always aware of what’s happening."
          />
          <RowParagraphs 
            quest = "Is it necessary to have prior technical knowledge to work with you?"
            answ = "No, not at all. If you have a vision for what objectives you want to achieve and need specific software to do that, we will help figure out the best way to get it done. Software developers might want to go deeper into development but that’s not required. We are happy to work with you and will be available for any questions throughout the course of your project. We will explain all aspects of work in a straightforward way."
          />
          <RowParagraphs 
            quest = "What are the options available in case I am not satisfied with a particular software developer?"
            answ = "If a client is unhappy with one of our staff members for the duration of a project, we guarantee that they will be replaced with someone else."
          />
          <RowParagraphs 
            quest = "I am uncertain of the type of the service I need. What shall I do in such a case?"
            answ = "Simply, get in touch with our team to schedule a consultation and our experts will assist you accordingly."
          />
          <RowParagraphs 
            quest = "Can you increase the staff for a particular project, if necessary?"
            answ = "We are always happy to take on less or more work based on your needs. If this isn’t enough, we have the capability of adding more people to your project in a timely manner."
          />
          <RowParagraphs 
            quest = "What is the average experience of your developers?"
            answ = "Our developers vary in experience, but most of them are about 2-5 years into programming."
          />

        </div>
      </div>
    </div>
  )
}
