import { useState } from 'react'
import './App.css'
import Form from './components/Form'
const initialBlogForm = {
        author: "",
        title: "",
        body: "",
        public: false,
        image: ""
    }

function App() {

  const [blogs, setBlogs] = useState([{
    author: "Stiven",
    title: "come non sviluppare",
    body: "Imparate da loris",
    public: true,
    image: ""
  },
  {
    author: "Loris",
    title: "BOh",
    body: "BOh Boh BOg BOgBogfosodfsdasfdfsdfsdfdfsd",
    public: false,
    image: ""
  },
  {
    author: "Samuel",
    title: "Mio salvatore del 04-12-2025",
    body: "Oggi ti ho assillato",
    public: true,
    image: ""
  },
  
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
      <Form addBlog = {addBlog}/>

      <div className="grid">
        {blogs.map((blog, index) => (
          <div key={index} className={`col ${blog.public ? "border_green" : "border_yellow"}`}>
            <div className='flex'>
              <p>{blog.title} - <span className='text_gray'>{blog.author}</span></p>
            </div>
            <div>
              <p><strong>Descrizione:</strong></p>
              <p>{blog.body}</p>
              {blog.image !== "" && <img src={blog.image} alt="" />}
              
            </div>
          </div>
        ))}

      </div>
    </>
  )
}

export default App
