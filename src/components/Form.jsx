import { useState } from "react";
import Input from "./Input";
const initialBlogForm = {
        author: "",
        title: "",
        body: "",
        public: false,
    }

export default function Form({addBlog}) {
    const [formDate, setFormDate] = useState(initialBlogForm);
    const [active, setActive] = useState(false)

    function aggiornaForm(event) {
        const key = event.target.name;
        setFormDate({
            ...formDate,
            [key]: event.target.type === "checkbox" ? event.target.checked : event.target.value,
        })
    }

    function annulla() {
        setActive(!active);
        setFormDate(initialBlogForm);
    }

    function addBlogForm(){
      addBlog(event, formDate, setFormDate, setActive, active)  
    }

    return (
        <form action="" onSubmit={addBlogForm}>
            <div>
                <Input
                    formDate={formDate.author}
                    type="text"
                    name="author"
                    aggiornaForm={aggiornaForm}
                    className=""
                />
            </div>
            <div>
                <Input
                    formDate={formDate.title}
                    type="text"
                    name="title"
                    aggiornaForm={aggiornaForm}
                    className=""
                />
            </div>
            <div className='align_top flex' >
                <Input
                    formDate={formDate.body}
                    type="text-area"
                    name="body"
                    aggiornaForm={aggiornaForm}
                    className="flex"
                />
            </div>
            <Input
                formDate={formDate.public}
                type="checkbox"
                name="public"
                aggiornaForm={aggiornaForm}
                className=""
            />
            {!active && <button onClick={() => setActive(!active)} className='btn btn_blue'>PUBBLICA</button>}
            {active && <div>
                <h3>Sei sicuro di voler pubblicare?</h3>
                <button className='btn btn_yellow' onClick={annulla}>ANNULLA</button>
                <button className='btn btn_blue' type='submit'>PUBBLICA</button>
            </div>
            }
        </form>
    )
}