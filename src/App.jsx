import { Route, Routes } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/Login'
import Layout from './pages/Layout'
import Register from './pages/Register'
import axios from 'axios'
import Users from './pages/Users'
import UserContexProvider from './pages/userContex'
import Account from './pages/account'

axios.defaults.baseURL = import.meta.env.VITE_API_URL
axios.defaults.withCredentials = true

function App() {
  return (
    <div>
      <UserContexProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<Register />} />
            <Route path='/users' element={<Users />} />
            <Route path='/account' element={<Account />} />
          </Route>
        </Routes>
      </UserContexProvider>
    </div>
  )
}

export default App
