import React from 'react'
import TextBox from './TextBox'
import './HomePart4.css'
import Img1 from '../Assets/custome-software-development-1-png.png'
import Img2 from '../Assets/cloud-application-development-1-png.png'
import Img3 from '../Assets/software-consulting-1-png.png'
import Img4 from '../Assets/product-development-1-png.png'

export default function HomePart4() {
  return (
    <div className='first-div'>
        <TextBox 
          img1 = {Img1}
          heading1 = "Custom Software Development"
          para1 = "Every business is in need of a way to increase their customer acquisition, and become more visible on the market. As one of the top software development companies in India, we use a complete suite of tools and methods to tailor each project to the specific needs of our clients. This includes using our own in-house development studio, offshore development teams, and a wide range of open-source software."
          img2 = {Img2}
          heading2 = "Cloud Application Development"
          para2 = "The cloud is revolutionizing how we develop software. With the right tools, developers can quickly and efficiently create new applications. But the market is full of different software development solutions to choose from, most of which are completely overpriced and offer nothing unique! Our software development services offer competitive pricing, unique features that make development easier and more efficient, and an experienced team of developers to help you every step of the way."
        />
        <TextBox 
          img1 = {Img3}
          heading1 = "Software Consulting"
          para1 = "Do you want to grow your business, but are overwhelmed by all the possibilities? Our customized software development solutions are here to help! Our team of business consultants is highly trained to help you. We offer a free consultation where we'll explore your challenges and opportunities. What's more, if you hire us for our services, we will provide you with the top-notch solutions!"
          img2 = {Img4}
          heading2 = "Product Development"
          para2 = "Our software development company helps entrepreneurs, inventors, and startups with their product design. Our team of engineers and designers work with clients to conceptualize their idea, prototype their product, or develop a marketing campaign. We offer a range of software services from low-cost consulting services to full-fledged development strategies to help you get your idea off the ground."
        />
    </div>
  )
}
