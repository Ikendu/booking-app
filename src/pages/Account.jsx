import { useContext, useState } from 'react'
import { UserContext } from './userContex'
import { Link, Navigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Places from './Places'
import { BuildIcon, ListIcon, UserIcon } from '../assets/icons/Logo'

const btnProfile = 'px-6 py-2 bg-primary text-white'

const Account = () => {
  const { loading, user, setUser } = useContext(UserContext)
  const [redirect, setRedirect] = useState(false)
  let { subpage } = useParams()

  //   if (subpage === undefined) {
  //     subpage = `profile`
  //   }

  const logout = async () => {
    await axios.post(`/logout`)
    setRedirect(true)
    setUser(``)
  }

  if (!loading) {
    return <h2>Loading...</h2>
  }

  //redirect && <Navigate to={`/`} />
  if (redirect) {
    return <Navigate to={`/`} />
  }

  if (loading && !user) {
    return <Navigate to={`/login`} />
  }

  const linkClasses = (type) => {
    let classes = `inline-flex gap-2 px-6 py-2 rounded-full  `
    if (type === subpage) {
      classes = `${classes}  bg-primary text-white`
    } else {
      classes = `${classes} bg-gray-200 `
    }
    return classes
  }

  return (
    <div>
      <h1>Welcome {user?.name.toUpperCase()} </h1>
      <div className='mt-10 w-full flex gap-4 justify-center '>
        <Link to={`/account/profile`} className={linkClasses(`profile`)}>
          <UserIcon />
          My Profile
        </Link>
        <Link to={`/account/bookings`} className={linkClasses(`bookings`)}>
          <ListIcon />
          My bookings
        </Link>
        <Link to={`/account/places`} className={linkClasses(`places`)}>
          <BuildIcon />
          My Accomodations
        </Link>
      </div>
      {subpage === `profile` && (
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
export default Account
