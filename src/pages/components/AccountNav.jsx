import { Link, useLocation } from 'react-router-dom'
import { BuildIcon, ListIcon, UserIcon } from '../../assets/icons/Logo'

const AccountNav = () => {
  const { pathname } = useLocation()
  let subpage = pathname.split(`/`)?.[2]

  if (subpage === undefined) {
    subpage = `profile`
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
      <div className='mt-10 w-full flex gap-4 justify-center '>
        <Link to={`/account`} className={linkClasses(`profile`)}>
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
    </div>
  )
}
export default AccountNav
