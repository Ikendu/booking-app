const Checktime = () => {
  return (
    <>
      <div className='grid sm:grid-cols-3 gap-3 text-center'>
        <div>
          <h3 className='mt-2 mb-1'>Check in time</h3>
          <input type='text' placeholder='12:00' />
        </div>
        <div>
          <h3 className='mt-2 mb-1'>Check out time</h3>
          <input type='text' />
        </div>
        <div>
          <h3 className='mt-2 mb-1'>Max number of guest</h3>
          <input type='text' />
        </div>
      </div>
      <div>
        <button className='primary my-5 '>Save</button>
      </div>
    </>
  )
}
export default Checktime
