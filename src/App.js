// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { useState } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Practice from './components/useEffect';
import Hero from './components/Hero';
import About from './pages/About';
import GetInTouch from './pages/GetInTouch';
import MapComponent from './components/Mapcomponent';

function App() {







  return (
    <div className="">
      <header className="sticky top-0 z-50  flex justify-center items-center">
          <div className=" w-full bg-[#10A0A933] bg-opacity-75 p-4">
            <Navbar />
          </div>
      </header>
        <Hero/>
        <About/>
        <GetInTouch/>
        <MapComponent/>
        <Footer/>
    </div>
  );
  }

export default App;
