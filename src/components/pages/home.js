import React from 'react';
import '../../App.css'
import Cards from '../Cards';
import HeroSection from '../HeroSection'
import { motion } from 'framer-motion'
import { animationSwitch, transition } from '../../animations';

function Home() {
    return(       
        <div style={{flex: 1,paddingTop: "80px"}}>
            <motion.div initial="out" animate="in" exit="out" variants={animationSwitch} transition={transition}>
                <HeroSection/>
                <Cards/>
            </motion.div>
        </div> 
    )
}

export default Home;