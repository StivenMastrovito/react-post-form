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

  const [active, setActive] = useState(false)

  function aggiornaForm(event) {
    const key = event.target.name;
    setFormDate({
      ...formDate,
      [key]: event.target.type === "checkbox" ? event.target.checked : event.target.value,
    })
  }

  function annulla(){
    console.log("annulla");
    
    setActive(!active);
    setFormDate(initialBlogForm);
  }

  function addBlog(event) {
    console.log("submit");
    
    event.preventDefault();
    setBlogs([...blogs, formDate]);
    setFormDate(initialBlogForm);
    setActive(!active)
  }


  return (
    <>
      <h1>BLOG</h1>
      <form action="" onSubmit={addBlog}>
        <div>
          <label htmlFor="author">Autore:</label>
          <input required type="text" name='author' id='author' value={formDate.author} onChange={aggiornaForm} />
        </div>
        <div>
          <label htmlFor="title">Titolo:</label>
          <input required type="text" name='title' id='title' value={formDate.title} onChange={aggiornaForm} />
        </div>
        <div className='align_top flex' >
          <label htmlFor="body">Descrizione:</label>
          <textarea className='flex' required type="text-area" name="body" id="body" value={formDate.body} onChange={aggiornaForm} />
        </div>

        <label htmlFor="public">Vuoi pubblicarlo online?</label>
        <input type="checkbox" name="public" id="public" checked={formDate.public} onChange={aggiornaForm} />
        {!active && <button onClick={() => setActive(!active)} className='btn btn_blue'>PUBBLICA</button>}
        {active && <div>
          <h3>Sei sicuro di voler pubblicare?</h3>
          <button className='btn btn_yellow' onClick={annulla}>ANNULLA</button>
          <button className='btn btn_blue' type='submit'>PUBBLICA</button>
        </div>
        }
        
      </form>
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
