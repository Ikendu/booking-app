import { useContext, useState } from 'react'
import { UserContext } from './userContex'
import { Link, Navigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Places from './Places'
import AccountNav from './components/AccountNav'

const ProfilePage = () => {
  const { loading, user, setUser } = useContext(UserContext)
  const [redirect, setRedirect] = useState(false)
  let { subpage } = useParams()

  const logout = async () => {
    await axios.post(`/logout`)
    setRedirect(true)
    setUser(``)
  }

  if (!loading) {
    return <h2>Loading...</h2>
  }

  if (redirect) {
    return <Navigate to={`/`} />
  }

  if (loading && !user) {
    return <Navigate to={`/login`} />
  }

  return (
    <div>
      <AccountNav />
      {subpage === undefined && (
        <div className='text-center max-w-lg mx-auto mt-8'>
          <p className=' text-lg font-bold'>
            Hello {user.name} ({user.email})
          </p>
          <p>You are welcome to explore all we can offer</p>
          <button onClick={logout} className=' bg-red-500 max-w-sm mt-2 px-4 py-2 rounded-md'>
            Logout
          </button>
        </div>
      )}
      {subpage === `places` && <Places />}
    </div>
  )
}
export default ProfilePage
