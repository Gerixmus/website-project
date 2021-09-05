import React from 'react'
import '../../App.css'
import Footer from '../Footer'
import Kontakt from '../Kontakt'
import { animationSwitch, transition } from '../../animations';
import {motion} from 'framer-motion'

export default function SignUp() {
    return (
        <motion.div initial="out" animate="in" exit="out" variants={animationSwitch} transition={transition}>
            <Kontakt/>
            <Footer/>
        </motion.div>
    )
}