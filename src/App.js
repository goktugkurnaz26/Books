import { useState } from "react"
import BookCreate from "./components/BookCreate"

const App = () => {
    const [books, setBooks] = useState([]) 
    const createBook = (title) => {
      // KÖTÜ KODLAMA 
      books.push({id:123,title:title})
      setBooks(books)
    }
  return (
  <div>
    {books.length}
    <BookCreate onCreate={createBook} />
    </div>
  )
}
export default App
