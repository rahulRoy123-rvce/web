import React from 'react'
import Jaggery from '../assets/Jaggery.png'
// import Human from '../assets/Human.svg'
import Human from '../assets/Human.png'

const About = () => {
  return (
    <div className="bg-[#D3E7CC]">
        <div className="text-center font-bold text-3xl ">          
            Savour the goodness of Organic Jaggery
        </div>
    <div className="mt-32 ml-32 flex flex-row">
   <img src={Jaggery} alt="Jaggery" className="w-1/3 h-1/3"/>
    <div className="mx-16 font-semibold text-justify">
    Experience the wholesome goodness of organic jaggery, a natural sweetener packed with nutritional benefits. Unlike refined sugars, organic jaggery retains its rich molasses content, offering essential vitamins and minerals. This unprocessed sweetener not only supports better digestion but also provides a sustained energy boost. Elevate your culinary creations with the distinct, caramel-like taste of organic jaggery, enhancing both flavor and health in every delightful bite. Make the switch to this nourishing alternative for a guilt-free sweetness experience.
    </div>
   
    </div> 
    <div className="flex justify-center mt-8">
    <button className="bg-[#2B5A1B] text-white py-3 px-6 rounded-[60px] text-xl font-semibold">
        Know More
    </button>  </div> 
    <div className="text-center text-3xl font-bold mt-10">
    Jaggery Health Benefits    
    </div>   
    <div className="flex-row flex justify-center items-center h-screen ">
<ul className="list-disc text-xl">
  <li>Fulfilling anti-oxidants</li>
  <li>
  Boosts digestive health
  </li>
  <li>
  Detoxifies the liver
  </li>
  <li>
  Provides an energy boost
  </li>
  <li>
  Relieves menstrual pain
  </li><li>
  Boosts immunity
  </li>
  <li>
  Prevents respiratory problems
  </li>
  <li>
  Treats anemia
  </li>
</ul>
<img src={Human} alt="Human" className="w-1/3 h-1/2 ml-64"/>


    </div>
     
</div>
  )
}

export default About
