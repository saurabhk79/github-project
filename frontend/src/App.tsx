import React from 'react'
import {Route, Routes, BrowserRouter} from "react-router-dom"
import Search from './components/Search'

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Search />}  />
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App