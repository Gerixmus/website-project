import React from 'react';
import '../../App.css'
import Cards from '../Cards';
import HeroSection from '../HeroSection'
import Footer from '../Footer';
import { motion } from 'framer-motion'
import { animationSwitch, transition } from '../../animations';

function Home() {
    return(
        <motion.div initial="out" animate="in" exit="out" variants={animationSwitch} transition={transition}>
            <HeroSection/>
            <Cards/>
            <Footer/>
        </motion.div>
    )
}

export default Home;