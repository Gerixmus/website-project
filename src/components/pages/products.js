import React from 'react'
import '../../App.css'
import Footer from '../Footer'
import {motion} from 'framer-motion'
import { animationSwitch, transition } from '../../animations';
import Oferta from '../Oferta'

export default function Products() {
    return(
        <motion.div initial="out" animate="in" exit="out" variants={animationSwitch} transition={transition}>
            <h1 className='products'>PRODUCTS</h1>
            <Oferta/>
            <Footer/>
        </motion.div>
    )
    
}