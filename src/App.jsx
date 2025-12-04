import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const initialBlogForm = {
  author: "",
  title: "",
  body: "",
  public: false,
}

function App() {
  const [formDate, setFormDate] = useState(initialBlogForm);
  const [blogs, setBlogs] = useState([]);

  function aggiornaForm(event) {
    const key = event.target.name;
    setFormDate({
      ...formDate,
      [key]: event.target.type === "checkbox" ? event.target.checked : event.target.value,
    })
  }

  function addBlog(event) {
    event.preventDefault();
    setBlogs([...blogs, formDate]);
    setFormDate(initialBlogForm);
  }


  return (
    <>
      <h1>BLOG</h1>
      <form action="" onSubmit={addBlog}>
        <label htmlFor="author">Autore:</label>
        <input required type="text" name='author' id='author' value={formDate.author} onChange={aggiornaForm} />

        <label htmlFor="title">Titolo:</label>
        <input required type="text" name='title' id='title' value={formDate.title} onChange={aggiornaForm} />

        <label htmlFor="body">Descrizione:</label>
        <input required type="text-area" name="body" id="body" value={formDate.body} onChange={aggiornaForm} />

        <label htmlFor="public">Vuoi pubblicarlo online?</label>
        <input type="checkbox" name="public" id="public" checked={formDate.public} onChange={aggiornaForm} />
        <button type='submit'>PUBBLICA</button>
      </form>
      <div className="grid">
        {blogs.map((blog) => (
          <div className="col">
            <div>
              <p>{blog.title}</p>
              <p>{blog.author}</p>
            </div>
            <p><strong>Descrizione:</strong>{blog.body}</p>
          </div>
        ))}

      </div>
    </>
  )
}

export default App
