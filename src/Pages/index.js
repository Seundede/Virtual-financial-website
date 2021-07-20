import React, { useState} from 'react'
import Footer from '../Components/Footer';
import Hero from '../Components/HeroSection'
import Info from '../Components/InfoSection'
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree
} from "../Components/InfoSection/Data";
import Navbar from '../Components/Navbar'
import Services from '../Components/Services';
import Sidebar from '../Components/Sidebar'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
      <div>
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Hero />
        <Info {...homeObjOne}/>
        <Info {...homeObjTwo}/>
        <Services />
        <Info {...homeObjThree}/>
        <Footer />
      </div>
    );
}

export default Home
