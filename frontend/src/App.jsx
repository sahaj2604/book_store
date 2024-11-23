import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import CreateBook from './pages/CreateBook.jsx'
import EditBooks from './pages/EditBooks.jsx'
import DeleteBook from './pages/DeleteBook.jsx'
import ShowBook from './pages/ShowBook.jsx'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/books/create' element={<CreateBook/>} />
        <Route path='/books/edit/:id' element={<EditBooks/>} />
        <Route path='/books/delete/:id' element={<DeleteBook/>} />
        <Route path='/books/details/:id' element={<ShowBook/>} />
      </Routes>
    </div>
  )
}

export default App
