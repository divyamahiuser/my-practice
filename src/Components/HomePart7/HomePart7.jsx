import React from 'react';
import '../HomePart6/HomePart6.css';
import './HomePart7.css';
import SpecificSoftwares from './SpecificSoftwares';
import BankingFinance from '../Assets/banking-and-finance-1.svg';
import HealthCare from '../Assets/healthcare-1.svg';
import Hospitality from '../Assets/hospitality-1.svg';
import EntertainmentMedia from '../Assets/entertainment-and-media-1.svg';
import TravelTourism from '../Assets/Group.svg';
import ITSector from '../Assets/IT-sector-1.svg';
import Manufacturing from '../Assets/manufacturing-1.svg';
import ECommerceRetailSectors from '../Assets/e-commerce-and-retails-sector-1.svg';

export default function HomePart7() {
  return (
    <div>
        <svg style={{margin: "0 auto"}} width="1170" height="1500" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* <!-- Defining a linear gradient --> */}
            <linearGradient id="myGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor:"#f2fbfc", stopOpacity:"1"}} />
              <stop offset="100%" style={{stopColor:"white", stopOpacity:"1"}} />
            </linearGradient>
            </defs>
          <path d="M 0 50 Q 150 0, 370 90 T 800 60 T 1180 50 V1000 H0 Z" fill="url(#myGradient)" />
        </svg>
        <div className='featured-services featured-services-part7'>
            <div className="top">
               <h6 style={{paddingBottom: "13px"}} className='h6'>Industries That We Serve</h6>
               <h2 className='h2'>Industry Specific Software Development Services</h2>
            </div>
            <div style={{margin: "0 auto", padding: "0px 20px"}} className="down-specifics">
                <SpecificSoftwares 
                  Img = {BankingFinance}
                  alt = "Banking & Finance"
                  heading = "Banking & Finance"
                  para = "We build custom data analytic dashboards, financial reporting tools and business intelligence tools for investment banks. We offer both onsite and offshore development services and provide effective budget management, project management, resource allocation, remote team management and outsourcing services."
                />
                <SpecificSoftwares 
                  Img = {HealthCare}
                  alt = "Health Care"
                  heading = "Health Care"
                  para = "The healthcare industry will soon be facing a major shortage of professionals. Our software development services offer an innovative approach to solving this problem. We develop medical apps that are tailored to the needs of doctors and nurses, while also developing patient-facing apps to help patients manage their condition."
                />
                <SpecificSoftwares 
                  Img = {Hospitality}
                  alt = "Hospitality"
                  heading = "Hospitality"
                  para = "We offer comprehensive software development services for the hospitality industry. Our team of software developers have good experience in developing applications that integrate seamlessly with hospitality POS, CRM, and ERP systems. We have extensive experience with the latest trends in hospitality technology, including mobile apps and chatbots."
                />
                <SpecificSoftwares 
                  Img = {EntertainmentMedia}
                  alt = "Entertainment & Media"
                  heading = "Entertainment & Media"
                  para = "Our team provides software development solutions for the entertainment and media industry as well.We build media players, game consoles, streaming services, and more. Our team of experts can help you conceptualise your idea, find and manage partners, develop the product, and get it to market."
                />
            </div>  
            <div style={{margin: "0 auto", padding: "0px 20px"}} className="down-specifics">
                <SpecificSoftwares 
                  Img = {TravelTourism}
                  alt = "Travel & Tourism"
                  heading = "Travel & Tourism"
                  para = "The Travel & Tourism industry is one of the largest and fastest-growing industries in the world. We develop tailor-made software, apps, and websites for travel & tourism businesses. We provide a range of services to help our customers achieve their goals, such as custom development, consulting, and more."
                />
                <SpecificSoftwares 
                  Img = {ITSector}
                  alt = "IT Sector"
                  heading = "IT Sector"
                  para = "We've hand-picked some of the best software developers from around India to work full time on your project and only take on projects that we're fully committed to. We provide daily updates, weekly live calls with our team, and monthly progress reports."
                />
                <SpecificSoftwares 
                  Img = {Manufacturing}
                  alt = "Manufacturing"
                  heading = "Manufacturing"
                  para = "The average manufacturing company has over 100 IT systems that need to be integrated. This can be achieved by using our software development services to link all of your systems and publish them as a single cloud-based application."
                />
                <SpecificSoftwares 
                  Img = {ECommerceRetailSectors}
                  alt = "E-Commerce & Retail Sectors"
                  heading = "E-Commerce & Retail Sectors"
                  para = "We provide cost-effective, fully customized e-commerce, retail sectors software development services. We are committed to delivering the highest quality of work and offer great customer service."
                />
            </div>  
        </div>
    </div>
  )
}
