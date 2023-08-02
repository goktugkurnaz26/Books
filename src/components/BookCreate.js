import { useState } from "react"

const BookCreate = ({ onCreate }) => {
    const [title,setTitle] = useState ("")
    const handleChange = (event) => {
        setTitle(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        onCreate(title)
        setTitle("")
    }
    return (
     <div className="book-create">
        <h3>Kitap Ekle</h3>
        <from onSubmit={handleSubmit}> 
            <label>Title</label>
            <input value={title} onChange={handleChange} className="input" />
            <button className="button">Oluştur</button>
        </from>
     </div>
    )
}
export default BookCreate
