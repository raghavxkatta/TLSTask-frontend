import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Utility to generate days for a given month
function getDaysInMonth(year, month) {
  const date = new Date(year, month, 1)
  const days = []
  const firstDayIndex = date.getDay() // 0=Sun
  const prevMonthLastDate = new Date(year, month, 0).getDate()

  // Previous month's tail days
  for (let i = firstDayIndex; i > 0; i--) {
    days.push({
      date: new Date(year, month - 1, prevMonthLastDate - i + 1),
      inCurrentMonth: false,
    })
  }

  // Current month days
  while (date.getMonth() === month) {
    days.push({ date: new Date(date), inCurrentMonth: true })
    date.setDate(date.getDate() + 1)
  }

  // Next month's head days to fill week
  const nextDays = 7 - (days.length % 7)
  if (nextDays < 7) {
    for (let i = 1; i <= nextDays; i++) {
      days.push({ date: new Date(year, month + 1, i), inCurrentMonth: false })
    }
  }
  return days
}

export default function Calendar() {
  const today = new Date()
  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())

  // Load solved dates from localStorage
  const [solvedDates, setSolvedDates] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('solvedDates')) || {}
    } catch {
      return {}
    }
  })

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem('solvedDates', JSON.stringify(solvedDates))
  }, [solvedDates])

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ]

  const days = getDaysInMonth(currentYear, currentMonth)

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  const toggleSolve = (date) => {
    const key = date.toISOString().split('T')[0]
    setSolvedDates(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <div className=" bg-white rounded-2xl shadow-lg p-6 border-2 border-[#070054]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={prevMonth} className="p-2 rounded-full hover:bg-[#d9d9d9]">
          <ChevronLeft className="w-5 h-5 text-[#070054]" />
        </button>
        <div className="text-lg font-semibold text-[#070054]">
          {monthNames[currentMonth]} {currentYear}
        </div>
        <button onClick={nextMonth} className="p-2 rounded-full hover:bg-[#d9d9d9]">
          <ChevronRight className="w-5 h-5 text-[#070054]" />
        </button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-sm text-[#070054] mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
          <div key={d} className="text-center font-medium">
            {d}
          </div>
        ))}
      </div>

      {/* Days with LeetCode-like solve markers */}
      <div className="grid grid-cols-7 gap-2">
        {days.map(({ date, inCurrentMonth }) => {
          const key = date.toISOString().split('T')[0]
          const isToday = key === today.toISOString().split('T')[0]
          const solved = !!solvedDates[key]

          return (
            <div
              key={key}
              onClick={() => inCurrentMonth && toggleSolve(date)}
              title={inCurrentMonth ? (solved ? 'Solved' : 'Click to mark solved') : ''}
              className={`relative h-10 flex items-center justify-center rounded-lg cursor-pointer select-none
                ${inCurrentMonth ? 'text-[#070054]' : 'text-[#d9d9d9]'}
                ${isToday ? 'border-2 border-[#070054]' : 'hover:bg-[#d9d9d9]'}`}>
              {date.getDate()}
              {solved && (
                <span className="absolute bottom-1 w-2 h-2 bg-[#070054] rounded-full"></span>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
