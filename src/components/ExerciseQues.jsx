import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CodeEditor from './CodeEditor';
import NavBar from './NavBar1';
import {jwtDecode} from 'jwt-decode';

const getUserIdFromToken = () => {
  const token = localStorage.getItem('token');
  if (!token) return null;
  try {
    const decoded = jwtDecode(token);
    return decoded.userId;
  } catch {
    return null;
  }
};



const EXERCISES = {
  1: {
    title: "The Web Awakens – Creating Your First HTML Page",
    description: `Every adventure begins somewhere. This one begins with your first-ever HTML page. Let's put it together and start your journey on the web!`,
    code: `<!DOCTYPE html> <!-- Declares the document type as HTML5 -->
<html> <!-- Root element of the HTML document -->

<head> <!-- Contains metadata and title -->
  <title>My Web Adventure</title> <!-- Title of the webpage displayed on the browser tab -->
</head>

<body> <!-- The main content of the webpage -->

  <!-- This is how you write a comment in HTML -->
  <!-- Comments are ignored by the browser and used to explain code -->
  <h1>The Journey of HTML Begins</h1> <!-- Main heading for the page -->
</body> <!-- End of body -->
</html> <!-- End of HTML document -->`
  },
  2: {
    title: "Speak Loud and Clear – Meet the Headings!",
    description: `Headings are like signboards on the road. They help you organize your ideas and guide your readers. Time to try out headings from big to small.`,
    code: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Headings Example</title>
</head>
<body> <!-- Starts the body where content is displayed -->
  <h1>Main Title</h1> <!-- Largest heading -->
  <h2>Subheading Level 1</h2> <!-- Second largest heading -->
  <h6>The smallest whisper of a heading</h6> <!-- Smallest heading -->
  <!-- Hint: Try adding <h3> and <h4> between them. -->
</body> <!-- Ends the body -->
</html>`
  },
  3: {
    title: "The Grocery Scroll – Unleashing Lists",
    description: `It's time to organize your pantry and cooking steps using lists! You’ll use both unordered and ordered lists to do this.`,
    code: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Lists Example</title>
</head>
<body>
  <h2>My Grocery List</h2> <!-- Heading for the grocery list -->
  <ul> <!-- Unordered list with bullet points -->
    <li>Milk</li>    <!-- First list item -->
    <li>Eggs</li>    <!-- Second list item -->
    <!-- Add your favorite snack here --> 
    <li><!-- Your favorite snack --></li> <!-- ← User adds another list item here -->
  </ul>

  <h2>Steps to Make a Sandwich</h2> <!-- Heading for the step-by-step list -->
  <ol> <!-- Ordered list with numbers -->
    <li>Take two slices of bread</li>
    <li>Spread butter or sauce</li>
    <li>Place your favorite filling</li>
    <li>Put slices together and enjoy!</li>
  </ol>
  <!-- Hint: Use <li> tags to list grocery items and sandwich steps. -->
</body>
</html>`
  },
  4: {
    title: "Picture Perfect – Adding an Image",
    description: `Images speak louder than text sometimes. Time to decorate your webpage with an image of your favorite thing!`,
    code: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Image Example</title>
</head>
<body>
  <h2>This is My Favorite Animal</h2>  <!-- Heading for the image -->
  
  <img src="https://unsplash.com/photos/a-girl-takes-a-photo-with-her-camera-oGeVYS5PoEI"
       alt="A girl with camera"
       width="300"> 
  <!-- Image of a girl with camera from Unsplash; replace the URL with your own image link or path -->
  <!-- Tip: Replace the src with a local file path or another image URL from the web. -->
</body>
</html>`
  },
  5: {
    title: "The Great Divide – Sections, Classes & Divs",
    description: `Think of your webpage like rooms in a house. Sections and divs help organize each room.`,
    code: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Sections & Divs</title>
</head>
<body>
  <section class="about-me"> <!-- A semantic section for personal info -->
    <h2>About Me</h2> <!-- Section title -->
    <p>I am learning frontend development and loving it!</p> <!-- Description inside the section -->
  </section>

  <div class="fun-facts"> <!-- A generic container for extra content -->
    <h3>Fun Facts</h3> <!-- Heading for fun facts -->
    <ul> <!-- List of fun facts -->
      <li>I can solve a Rubik's Cube</li>
      <li>I love coffee</li>
      <!-- Add another fun fact about yourself -->
      <li><!-- Your fun fact --></li> <!-- ← User fills in their own fact -->
    </ul>
  </div>
</body>
</html>`
  },
  6: {
    title: "What is CSS?",
    description: `Imagine your website is a plain cake — CSS is the frosting and decorations that make it irresistible! Let’s start by adding some global styles to your webpage to make it visually appealing.`,
    code: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>CSS Basics</title>
  <style>
    /* This styles the entire body of the webpage */
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Sets a clean font for all text */
      background-color: #f0f8ff; /* Adds a light blue background */
      color: #333; /* Sets default text color to dark grey */
      margin: 20px; /* Adds space around the content */
    }

    /* Style for all headings */
    h1, h2 {
      color: #1e90ff; /* Dodger blue color for headings */
    }
  </style>
</head>
<body>
  <h1>Welcome to CSS!</h1>
  <h2>Making websites beautiful, one style at a time</h2>

  <p>Notice how the background and text colors change the whole mood of the page.</p>
</body>
</html>`
  },
  7: {
    title: "Styling Lists Like a Pro",
    description: `Lists organize your content like a neat shelf. But plain bullet points are boring! Let’s spice them up with custom colors, spacing, and styles.`,
    code: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Styled Lists</title>
  <style>
    /* Style all unordered lists */
    ul {
      list-style-type: square; /* Changes bullets from default circles to squares */
      padding-left: 20px; /* Adds space on the left */
      color: green; /* Changes bullet text color */
      font-weight: bold; /* Makes list items bold */
    }

    /* Style all list items */
    li {
      margin-bottom: 10px; /* Adds space between list items */
    }
  </style>
</head>
<body>
  <ul>
    <li>Learn HTML basics</li>
    <li>Master CSS styling</li>
    <li>Build interactive pages</li>
    <!-- Add your favorite item below -->
  </ul>
</body>
</html>`
  },
  8: {
    title: "Perfect Your Navbar",
    description: `Your navbar is your website’s compass. Let's style it so users can easily navigate while making it visually sleek.`,
    code: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Navbar Styling</title>
  <style>
    /* Style the navigation bar */
    nav {
      background-color: #333; /* Dark background */
      overflow: hidden; /* Clear floats */
      padding: 10px 0;
    }

    /* Style the links inside the navbar */
    nav a {
      color: white; /* White text color */
      text-decoration: none; /* Remove underline */
      padding: 14px 20px; /* Spacing around links */
      float: left; /* Align links horizontally */
      font-weight: bold;
      font-family: Arial, sans-serif;
    }

    /* Change link color on hover */
    nav a:hover {
      background-color: #575757; /* Dark grey background on hover */
    }
  </style>
</head>
<body>
  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>
</body>
</html>`
  },
  9: {
    title: "Beautiful Sections with Classes and Divs",
    description: `Websites are like stories broken into chapters. Sections and divisions (<section>, <div>) help organize content — now let's style them!`,
    code: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Styled Sections</title>
  <style>
    /* Style all sections */
    section {
      background-color: #e0f7fa; /* Light cyan background */
      padding: 20px; /* Space inside section */
      margin-bottom: 15px; /* Space below each section */
      border-radius: 8px; /* Rounded corners */
      box-shadow: 0 2px 5px rgba(0,0,0,0.1); /* Subtle shadow */
    }

    /* Style section headings */
    section h2 {
      color: #00796b; /* Teal color */
      font-family: 'Verdana', sans-serif;
    }
  </style>
</head>
<body>
  <section>
    <h2>About Our Journey</h2>
    <p>This section tells a story about learning web development.</p>
  </section>

  <section>
    <h2>Next Steps</h2>
    <p>What you will learn in the upcoming exercises.</p>
  </section>
</body>
</html>`
  },
  10: {
    title: "Footer Fun",
    description: `The footer is like the sign-off in a letter. Let’s make it look friendly and clear with simple styling.`,
    code: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Footer Styling</title>
  <style>
    /* Style the footer element */
    footer {
      background-color: #070054; /* Dodger blue */
      color: white; /* White text */
      text-align: center; 
      padding: 15px 0; /* Vertical padding */
      position: fixed; /* Fix footer at bottom */
      width: 100%; /* Full width */
      bottom: 0; /* Stick to bottom */
      font-family: 'Courier New', monospace;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <footer>
    &copy; 2025 TechLearn Internship Challenge
  </footer>
</body>
</html>`
  }
}

const ExerciseQues = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const exercise = EXERCISES[id];

  const markAsComplete = async () => {
    const userId = getUserIdFromToken();
    if (!userId) return alert("User not logged in");

    try {
      const response = await fetch("http://localhost:3000/api/progress/complete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ userId, exerciseId: id })
      });

      const data = await response.json();
      alert("✅ Progress saved!");

      const nextId = parseInt(id) + 1;
      if (EXERCISES[nextId]) {
        navigate(`/exercise/${nextId}`);
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("❌ Error saving progress:", error);
      alert("❌ Failed to save progress");
    }
  };

  if (!exercise) {
    return (
      <div className="text-center text-red-500 p-4">Exercise not found</div>
    );
  }

  return (
    <>
      <NavBar />
      <button
        onClick={() => navigate('/dashboard')}
        className="bg-[#070054] mt-5 ml-4 hover:bg-indigo-700 text-sm text-white px-4 py-2 rounded-md"
      >
        Back
      </button>
      <div className="max-w-6xl mx-auto mt-5 p-6 bg-gray-900 mb-10 text-white rounded-lg shadow-lg space-y-6">
        <h1 className="text-3xl font-bold text-indigo-400">{exercise.title}</h1>
        <p className="text-gray-300">{exercise.description}</p>
        <div className="h-[450px]">
          <CodeEditor initialCode={exercise.code} />
          <button
            onClick={markAsComplete}
            className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
          >
            ✅ Mark Exercise as Complete
          </button>
        </div>
      </div>
    </>
  );
};

export default ExerciseQues;