import React from 'react';
import bg from '../assets/bg.png';

const Hero = () => {
    return (
        <div className="bg-fixed h-screen text-4xl text-lime-900 font-bold" style={{backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <div className="text-6xl self-center mx-auto">
            <h1 className="mt-6 mx-16">Welcome to Indian Farm Co.</h1>
            <p className="mt-16 mx-54">Discover the goodness of organic jaggery</p>
            <button>Shop Now</button>
            </div>         
        </div>
    );
};

export default Hero;
