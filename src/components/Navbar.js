import React from 'react'


const Navbar = () => {
  return (
    
    //      <nav className="fixed flex flex-row-reverse w-full top-0 left-0 absolute mt-4">
    //          <div className="mx-6 text-xl font-bold">
    //         <a href="https://redscale.vercel.app/?fbclid=PAAab3mKr68AtwETKYtUU2vpAWkHr-oM8qmZanXkFVySk9Rsb23HrIjj-Oxfc" className="text-lime-700 hover:text-gray-500">Portfolio</a>
    //     </div>    
    //     <div className="mx-6 text-xl font-bold">
    //         <a href="https://redscale.vercel.app/?fbclid=PAAab3mKr68AtwETKYtUU2vpAWkHr-oM8qmZanXkFVySk9Rsb23HrIjj-Oxfc" className="text-lime-700 hover:text-gray-500">Contact Us</a>
    //     </div>   
    //     <div className="mx-6 text-xl font-bold">
    //         <a href="https://redscale.vercel.app/?fbclid=PAAab3mKr68AtwETKYtUU2vpAWkHr-oM8qmZanXkFVySk9Rsb23HrIjj-Oxfc" className="text-lime-700 hover:text-gray-500">About Us</a>
    //     </div>  
    //     <div className="mx-6 text-xl font-bold">
    //         <a href="https://redscale.vercel.app/?fbclid=PAAab3mKr68AtwETKYtUU2vpAWkHr-oM8qmZanXkFVySk9Rsb23HrIjj-Oxfc" className="text-lime-700 hover:text-gray-500">Home</a>
    //     </div>  
        
    // </nav>
    <div className=" ">
    <header className="">
    <nav className="container mx-auto px-6 py-3 ">
    <div className="flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-gray-800">The Indian Farm Co.</a>
        <div className="flex space-x-4">
        <button className="text-xl bg-black text-white px-4 py-2 rounded-3xl">
                    Shop Now
          </button>
            <a href="#" className="text-gray-800 font-semibold py-2">Home</a>
            <a href="#" className="text-gray-800 font-semibold py-2">About</a>
            <a href="#" className="text-gray-800 font-semibold py-2">Services</a>
            <a href="#" className="text-gray-800 font-semibold py-2">Contact</a>
        </div>
    </div>
</nav>
</header>
</div>

   
  )
}

export default Navbar
