import { Route, Routes } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/Login'
import Layout from './pages/Layout'
import Register from './pages/Register'
import axios from 'axios'
import Users from './pages/Users'
import UserContexProvider from './pages/userContex'
import ProfilePage from './pages/ProfilePage'
import Places from './pages/Places'
import PlacesFormPage from './pages/components/PlacesFormPage'
import PlaceDetails from './pages/PlaceDetails'
import Booked from './pages/components/Booked'
import BookingsPage from './pages/components/BookingsPage'

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
            <Route path='/account' element={<ProfilePage />} />
            <Route path='/account/places' element={<Places />} />
            <Route path='/account/places/new' element={<PlacesFormPage />} />
            <Route path='/account/places/:id' element={<PlacesFormPage />} />
            <Route path='/account/details/:id' element={<PlaceDetails />} />
            <Route path='/account/bookings' element={<BookingsPage />} />
            <Route path='/account/booked/:id' element={<Booked />} />
          </Route>
        </Routes>
      </UserContexProvider>
    </div>
  )
}

export default App
