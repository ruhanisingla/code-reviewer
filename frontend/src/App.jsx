 import {  useState,useEffect} from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from "axios"
import prism from "prismjs"
import './App.css'

function App() {

  const [code,setCode]= useState(`
    function sum(){
  return 1+1;
}
    `)

    const [review , setReview]=useState(``)

  useEffect(() => {
    prism.highlightAll()
  },[])

  async function reviewCode(){
     const response= await axios.post('http://localhost:3000/ai/get-review',{code})
     console.log(response.data)
     setReview(response.data)


  }

  return (
    <>
    <main>
      <div className='left'>
        <div className='code'>
         <Editor
  value={code}
  onValueChange={setCode}
  highlight={code => Prism.highlight(code, Prism.languages.javascript, "javascript")}
  padding={12}
  style={{
    fontFamily: '"Fira code", "Fira Mono", monospace',
    fontSize: 14,
    backgroundColor: "#0c0c0c",
    color: "#f8f8f2",
    minHeight: "100%",
    borderRadius: "0.5rem",
    whiteSpace: "pre-wrap",
    outline: "none"
  }}
/>

        </div>
        <div onClick={reviewCode} className='review'>Review</div>
      </div>
      <div className='right'><Markdown

            rehypePlugins={[ rehypeHighlight ]}

          >{review}</Markdown></div>
    </main>
      
    </>
  )
}



export default App
