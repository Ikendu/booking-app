const Checktime = ({ checkIn, setCheckIn, checkOut, setCheckout, maxGuests, setMaxGuests }) => {
  return (
    <>
      <div className='grid sm:grid-cols-3 gap-3 text-center'>
        <div>
          <h3 className='mt-2 mb-1'>Check in time</h3>
          <input
            type='text'
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            placeholder='12:00'
          />
        </div>

        <div>
          <h3 className='mt-2 mb-1'>Check out time</h3>
          <input
            type='text'
            value={checkOut}
            onChange={(e) => setCheckout(e.target.value)}
            placeholder='11:00'
          />
        </div>

        <div>
          <h3 className='mt-2 mb-1'>Max number of guest</h3>
          <input type='number' value={maxGuests} onChange={(e) => setMaxGuests(e.target.value)} />
        </div>
      </div>
    </>
  )
}
export default Checktime
