// QuestionList.jsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SAMPLE_EXERCISES = [
  {
    id: 1,
    title: "The Web Awakens - Creating Your First HTML Page",
    description: "Every adventure begins somewhere. This one begins with your first-ever HTML page. Let's put it together and start your journey on the web!",
  },
  {
    id: 2,
    title: "Speak Loud and Clear - Meet the Headings!",
    description: "Headings are like signboards on the road. They help you organize your ideas and guide your readers. Time to try out headings from big to small.",
  },
  {
    id: 3,
    title: "The Grocery Scroll - Unleashing Lists",
    description: "It's time to organize your pantry and cooking steps using lists! You’ll use both unordered and ordered lists to do this.",
  },
  {
    id: 4,
    title: "Picture Perfect - Adding an Image",
    description: "Images speak louder than text sometimes. Time to decorate your webpage with an image of your favorite thing!",
  },
  {
    id: 5,
    title: "The Great Divide - Sections, Classes & Divs",
    description: "Think of your webpage like rooms in a house. Sections and divs help organize each room.",
  },
  {
    id: 6,
    title: "What is CSS?",
    description: "Imagine your website is a plain cake — CSS is the frosting and decorations that make it irresistible! Let's start by adding some global styles to your webpage.",
  },
  {
    id: 7,
    title: "Styling Lists Like a Pro",
    description: "Lists organize your content like a neat shelf. But plain bullet points are boring! Let’s spice them up with custom colors, spacing, and styles.",
  },
  {
    id: 8,
    title: "Perfect Your Navbar",
    description: "Your navbar is your website’s compass. Let's style it so users can easily navigate while making it visually sleek.",
  },
  {
    id: 9,
    title: "Beautiful Sections with Classes and Divs",
    description: "Websites are like stories broken into chapters. Sections and divisions (<section>, <div>) help organize content — now let's style them!",
  },
  {
    id: 10,
    title: "Footer Fun",
    description: "The footer is like the sign-off in a letter. Let's make it look friendly and clear with simple styling.",
  }
]

const QuestionList = ({ exercises = SAMPLE_EXERCISES }) => {
  const [searchText, setSearchText] = useState('')
  const navigate = useNavigate()

  const filtered = exercises.filter((exercise) =>
    exercise.title.toLowerCase().includes(searchText.toLowerCase())
  )

  return (
    <div className="bg-gray-900 text-white max-w-3xl mt-5 mb-8 ml-[25px] h-[420px] overflow-y-auto rounded-lg shadow-lg overflow-hidden">
      <div className="px-4 py-4 border-b border-gray-700">
        <input
          type="text"
          placeholder="Search exercises"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full px-3 py-2 bg-gray-800 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="divide-y divide-gray-800">
        {filtered.map((exercise) => (
          <div
            key={exercise.id}
            className="px-4 py-4 flex justify-between items-center hover:bg-gray-800 transition-colors"
          >
            <div className="pr-4">
              <h3 className="text-lg font-semibold text-indigo-400">
                {exercise.title}
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                {exercise.description}
              </p>
            </div>
            <button
              onClick={() => navigate(`/exercise/${exercise.id}`)}
              className="bg-indigo-600 hover:bg-indigo-700 text-sm text-white px-4 py-2 rounded-md"
            >
              Start
            </button>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="px-4 py-6 text-center text-gray-500">
            No exercises found.
          </div>
        )}
      </div>
    </div>
  )
}

export default QuestionList
