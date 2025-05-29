import React, { useState, useEffect } from 'react'
import { Settings } from 'lucide-react'
import { motion } from 'framer-motion'
import NavBar from './NavBar1'
import Calendar from './Calendar'
import Carousel from './Carousel'
import QuestionList from './QuestionList'
import DashboardGraph from './DashboardGraph'
const Dashboard = () => {
  const userName = localStorage.getItem('tls_name') || 'User'; // Fetch name from localStorage
  const fullGreeting = `Hi, ${userName}!`
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let idx = 0
    const timer = setInterval(() => {
      setDisplayText(fullGreeting.slice(0, idx + 1))
      idx++
      if (idx === fullGreeting.length) clearInterval(timer)
    }, 80)

    return () => clearInterval(timer)
  }, [fullGreeting])

  // Blinking cursor
  useEffect(() => {
    const blink = setInterval(() => setShowCursor(prev => !prev), 500)
    return () => clearInterval(blink)
  }, [])

  return (
    <>
        <NavBar />
        <div className=" mt-10  flex display-flex">
        {/* Greeting Section */}
            <div className="mb-8 inline-block ml-10">
                <h1 className="text-5xl font-bold  bg-gradient-to-r from-[#211a5a] via-[#3b3676] to-[#352f76] bg-clip-text text-transparent ">
                {displayText}
                <motion.span        
                    animate={{ opacity: showCursor ? 1 : 0 }}
                    transition={{ duration: 0.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="inline-block ml-1 w-1 h-10 bg-gradient-to-b from-[#352f76] to-[#070054]"
                />
                </h1>
                {/* Underline animation */}
                <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(displayText.length / fullGreeting.length) * 100}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="h-1 bg-gradient-to-r from-[#352f76] to-[#070054] rounded-full mt-2"
                />
                <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8, ease: 'easeOut' }}
                className="text-zinc-500 mt-4 text-lg"
                >
                Welcome back! Ready to build something amazing today?
                </motion.p>
                <Carousel />
            </div>
            <div className='ml-8 mb-4 flex justify-end'>
                <div className="w-[400px]"> {/* Adjust width as needed */}
                    <Calendar />
                </div>
            </div>
        </div>
        <div className="mr-10 flex display-flex">
            <QuestionList />
            <DashboardGraph/>
        </div>
     
    </>    
  )
}

export default Dashboard
