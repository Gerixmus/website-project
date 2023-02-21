import React from 'react'
import '../../App.css'
import Kontakt from '../Kontakt'
import { animationSwitch, transition } from '../../animations';
import {motion} from 'framer-motion'

export default function SignUp() {
    return (
        <div style={{height: "100%"}}>
            <motion.div style={{height: "100%"}} initial="out" animate="in" exit="out" variants={animationSwitch} transition={transition}>            
                <Kontakt/>
            </motion.div>
        </div>
    )
}