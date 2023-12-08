import React from 'react'
// import Twitter from '../assets/Twitter.svg'
import Twitter from '../assets/Twitter.png'
import Facebook from '../assets/Facebook.png'
import Insta from '../assets/Insta.png'
import Linkedin from '../assets/Linkedin.png'

const Footer = () => {
  return (
    <div className="my-8  flex flex-row justify-between mx-16">
     <div className="">
     powered by @<a  href="https://redscale.vercel.app/?fbclid=PAAab3mKr68AtwETKYtUU2vpAWkHr-oM8qmZanXkFVySk9Rsb23HrIjj-Oxfc" className="font-bold text-lg hover:text-gray-500">Redscale</a>
     </div> 
     <div className=" flex flex-row">
      <div className="mx-2">
      Terms of Service
      </div>
      <div className="mx-2">
      Privacy Policy
      </div>
      <div className="mx-2">
      Partners and Affiliates
      </div>
      <div className="mx-2">
      Sitemap
      </div>
          
     </div>
     <div className="flex flex-row">
      <img src={Twitter} alt="Twitter" className="w-7 h-7 mx-2"/>
      <img src={Facebook} alt="Facebook" className="w-7 h-7 mx-2"/>
      <img src={Insta} alt="Insta" className="w-7 h-7 mx-2"/>
      <img src={Linkedin} alt="Linkedin" className="w-7 h-7 mx-2"/>
     </div>
    </div>
  )
}

export default Footer
