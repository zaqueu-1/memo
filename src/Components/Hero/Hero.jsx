import React from 'react'
import './hero.css'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <motion.div initial={{ x: -20, opacity: 0 }} 
                animate={{ x: 0, opacity: 1, transition: { duration: 0.3 } }}  
                className='hero-container'> 
      <h1>memo</h1>
      <h4>organize suas tarefas, organize seu tempo</h4>
    </motion.div> 
  )
}

export default Hero
