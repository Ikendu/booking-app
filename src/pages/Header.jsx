import { Link } from 'react-router-dom'
import { LogoIcon, FindIcon, NavIcon, UserIcon } from '../assets/icons/Logo'
import { useContext } from 'react'
import { UserContext } from './userContex'

const roundhd = 'flex gap-2 border border-gray-300 rounded-full px-4 py-2 shadow-md shadow-gray-400'
const navstyle = 'border-l border-gray-300'

const Header = () => {
  const { user } = useContext(UserContext)
  return (
    <header className='flex justify-between'>
      <Link to={`/`} className='flex gap-1'>
        <LogoIcon />
        <span className='font-bold text-xl'>airlifes</span>
      </Link>
      <div className={roundhd}>
        <div>Anywhere</div>
        <div className={navstyle} />
        <div>Any week</div>
        <div className={navstyle} />
        <div>Add guest</div>
        <button>
          <FindIcon />
        </button>
      </div>
      <Link to={user ? `/account/profile` : `/login`} className={roundhd + 'items-center'}>
        <NavIcon />
        {user ? <p>{user.name}</p> : `Login`}
        <div className='overflow-hidden bg-gray-500 text-white rounded-full '>
          <UserIcon />
        </div>
      </Link>
    </header>
  )
}
export default Header
