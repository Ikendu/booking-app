const LoginPage = () => {
  return (
    <div className='mt-10'>
      <h2 className='text-center text-4xl'>Login</h2>
      <form className='max-w-md mx-auto '>
        <input type='email' placeholder='your@email.com' />
        <input type='password' placeholder='password' />
        <button className='primary' type='submit'>
          Submit
        </button>
      </form>
    </div>
  )
}
export default LoginPage
