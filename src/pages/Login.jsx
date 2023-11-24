import { Link } from 'react-router-dom'
import Register from './Register'

const LoginPage = () => {
  return (
    <div className='mt-14 grow items-center justify-round'>
      <h2 className='text-center text-4xl mb-4'>Login</h2>
      <form className='max-w-md mx-auto '>
        <input type='email' placeholder='your@email.com' />
        <input type='password' placeholder='password' />
        <button className='primary' type='submit'>
          Login
        </button>
        <p className='p-4 text-center text-gray-500'>
          Don't have an account?
          <Link className='underline text-black italic' to={`/register`} element={<Register />}>
            Register here
          </Link>
        </p>
      </form>
      <div></div>
    </div>
  )
}
export default LoginPage
