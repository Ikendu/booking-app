import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Register = () => {
  const [name, setName] = useState(``)
  const [email, setEmail] = useState(``)
  const [password, setPassword] = useState(``)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (name === ``) return toast.error(`name cannot be empty`)

    try {
      await axios.post(`/register`, {
        name,
        email,
        password,
      })
      toast.success(`Registration successful, Now you can login`)
    } catch (error) {
      toast.error(`Failed, retry with a different email`)
    }
  }
  return (
    <div className='mt-14 grow items-center justify-round'>
      <h2 className='text-center text-4xl mb-4'>Register</h2>
      <form className='max-w-md mx-auto' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='John Ede'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <button className='primary' type='submit'>
          Register
        </button>
        <p className='p-4 text-center text-gray-500 '>
          Already have an account?
          <Link className='underline text-black italic' to={`/login`} element={<Register />}>
            Login here
          </Link>
        </p>
      </form>
      <div></div>
    </div>
  )
}
export default Register
