import { Link } from 'react-router-dom'
import { LogoIcon, FindIcon, NavIcon, UserIcon } from '../assets/icons/Logo'

const roundhd = 'flex gap-2 border border-gray-300 rounded-full px-4 py-2 shadow-md shadow-gray-400'
const navstyle = 'border-l border-gray-300'

const Header = () => {
  return (
    <header className=' flex justify-between'>
      <a href='' className='flex gap-1'>
        <LogoIcon />
        <span className='font-bold text-xl'>airlifes</span>
      </a>
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
      <Link to={`/login`} className={roundhd + 'items-center'}>
        <NavIcon />
        <div className='overflow-hidden bg-gray-500 text-white rounded-full '>
          <UserIcon />
        </div>
      </Link>
    </header>
  )
}
export default Header
