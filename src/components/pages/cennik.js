import React from 'react'
import '../../App.css'
import Footer from '../Footer'
import Cennik from '../Cennik'
import { motion } from 'framer-motion'
import { animationSwitch, transition } from '../../animations';

export default function CennikStrona() {
    return (
        <motion.div initial="out" animate="in" exit="out" variants={animationSwitch} transition={transition}>
            <Cennik/>
        </motion.div>
    )
}