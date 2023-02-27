import React from "react";
import Hero from './Components/Hero/Hero';
import Board from './Components/Board/Board';
import { AnimatePresence } from 'framer-motion'
import './app.css'

function App() {
  return (
    <>
    <AnimatePresence>
      <Hero />
      <Board />
    </AnimatePresence>
    </>
  );
}

export default App;
