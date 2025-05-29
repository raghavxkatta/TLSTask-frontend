// src/components/CodeEditor.jsx
import React, { useState, useEffect } from 'react'

export default function CodeEditor({ initialCode }) {
  const defaultTemplate = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Live Preview</title>
  <style>
    /* You can add default CSS here */
    body {
      font-family: sans-serif;
      padding: 20px;
    }
  </style>
</head>
<body>
  <h2>Live HTML/CSS/JS Preview</h2>
  <!-- Write your HTML here -->
  <div id="app"></div>
  <script>
    // Write your JS here
    console.log('Hello from live preview!')
  </script>
</body>
</html>`

  const [code, setCode] = useState(initialCode || defaultTemplate)
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(code)
    }, 250)
    return () => clearTimeout(timeout)
  }, [code])

  return (
    <div className="flex flex-col md:flex-row gap-4 h-full">
      {/* Code Editor Pane */}
      <div className="w-full md:w-1/2 flex flex-col">
        <h2 className="text-xl font-semibold text-gray-200 mb-2">Code Editor</h2>
        <textarea
          className="flex-1 bg-gray-800 text-gray-100 font-mono text-sm rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>

      {/* Live Preview Pane */}
      <div className="w-full md:w-1/2 flex flex-col">
        <h2 className="text-xl font-semibold text-gray-200 mb-2">Live Preview</h2>
        <div className="flex-1 border border-gray-700 rounded-md overflow-hidden">
          <iframe
            srcDoc={srcDoc}
            title="Live Preview"
            sandbox="allow-scripts"
            frameBorder="0"
            className="w-full h-full bg-white"
          />
        </div>
      </div>
    </div>
  )
}
