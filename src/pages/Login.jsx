import { Link, Navigate } from 'react-router-dom'
import Register from './Register'
import { useContext, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { UserContext } from './userContex'

const LoginPage = () => {
  const [email, setEmail] = useState(``)
  const [password, setPassword] = useState(``)
  const [redirect, setRedirect] = useState(false)
  const { user, setUser } = useContext(UserContext)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const userDoc = await axios.post(`/login`, { email, password })
      toast.success(`Login successful`)
      setUser(userDoc.data)
      setRedirect(true)
    } catch (error) {
      toast.error(error.message)
    }
  }

  if (redirect) return <Navigate to={`/`} />

  return (
    <div className='mt-14 grow items-center justify-round'>
      <h2 className='text-center text-4xl mb-4'>Login</h2>
      <form className='max-w-md mx-auto' onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='your@email.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='primary mt-3' type='submit'>
          Login
        </button>
        <p className='p-4 text-center text-gray-500 mt-4'>
          Don't have an account?
          <Link
            className='underline text-black italic ml-1'
            to={`/register`}
            element={<Register />}
          >
            Register here
          </Link>
        </p>
      </form>
      <div></div>
    </div>
  )
}
export default LoginPage
