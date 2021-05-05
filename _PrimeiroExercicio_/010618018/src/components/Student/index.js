import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowLeft
} from 'react-icons/fi'
import Eu from './kleber.jpg'

import './styles.css'

const Student = () => {

  const [showInfo, setShowInfo] = useState(false)

  return (
    <div className="student_container">
      <motion.button
        className="button"
        onClick={() => setShowInfo(!showInfo)}
        initial={{ x: 0 }}
        animate={{x: !showInfo ? 0 : -340}}
        transition={{
          type: 'spring',
          stiffness: 350,
          damping: 40
        }}
      >
        Aluno
        <motion.div
          animate={{rotate: showInfo ? 180 : 0}}
        >
          <FiArrowLeft />
        </motion.div>
      </motion.button>
      <motion.div
        className="info"
        initial={{ x: 320 }}
        animate={{x: showInfo ? 0 : 350}}
        transition={{
          type: 'spring',
          stiffness: 350,
          damping: 40
        }}
      >
        <img src={Eu} className="image" alt=""/>
        <span>
          Kleber Fernando
        </span>
        <span>
          R.A: 010618018
        </span>
        <a href="https://github.com/kleberfh" target="_blank" rel="noreferrer">github</a>
      </motion.div>
    </div>
  )
}

export default Student