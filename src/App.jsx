import { useState } from 'react'
import './App.css'
import Form from './components/Form'
const initialBlogForm = {
        author: "",
        title: "",
        body: "",
        public: false,
    }

function App() {

  const [blogs, setBlogs] = useState([{
    author: "Stiven",
    title: "come non sviluppare",
    body: "Imparate da loris",
    public: true,
  },
  {
    author: "Loris",
    title: "BOh",
    body: "BOh Boh BOg BOgBogfosodfsdasfdfsdfsdfdfsd",
    public: false,
  }
  ]);

  function addBlog(event, formDate, setFormDate, setActive, active) {
    event.preventDefault();
    setBlogs([...blogs, formDate]);
    setFormDate(initialBlogForm);
    setActive(!active)
  }


  return (
    <>
      <h1>BLOG</h1>
      <Form 
      addBlog = {addBlog}
      />

      <div className="grid">
        {blogs.map((blog, index) => (
          <div key={index} className={`col ${blog.public ? "border_green" : "border_yellow"}`}>
            <div className='flex'>
              <p>{blog.title} - <span className='text_gray'>{blog.author}</span></p>
            </div>
            <div>
              <p><strong>Descrizione:</strong></p>
              <p>{blog.body}</p>
            </div>
          </div>
        ))}

      </div>
    </>
  )
}

export default App
