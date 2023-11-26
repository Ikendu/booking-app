import { useContext } from 'react'
import { UserContext } from './userContex'
import { Link, Navigate, useParams } from 'react-router-dom'

const btnProfile = 'px-6 py-2 bg-primary text-white'

const Account = () => {
  const { loading, user } = useContext(UserContext)
  let { subpage } = useParams()

  if (subpage === undefined) {
    subpage = `profile`
  }

  if (!loading) {
    return <h2>Loading...</h2>
  }
  if (loading && !user) {
    return <Navigate to={`/login`} />
  }

  const linkClasses = (type) => {
    let classes = `px-6 py-2 rounded-full`
    if (type === subpage) {
      classes = `${classes} px-6 py-2 bg-primary text-white`
    }
    return classes
  }

  return (
    <div>
      <h1>Welcome {user?.name.toUpperCase()} </h1>
      <div className='mt-10 w-full flex gap-4 justify-center'>
        <Link to={`/account`} className={linkClasses(`profile`)}>
          My Profile
        </Link>
        <Link to={`/account/bookings`} className={linkClasses(`bookings`)}>
          My bookings
        </Link>
        <Link to={`/account/places`} className={linkClasses(`places`)}>
          My Accomodations
        </Link>
      </div>
    </div>
  )
}
export default Account
