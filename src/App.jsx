import { Route, Routes } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/Login'
import Layout from './pages/Layout'
import Register from './pages/Register'
import axios from 'axios'
import Users from './pages/Users'

axios.defaults.baseURL = import.meta.env.VITE_API_URL

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/users' element={<Users />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
