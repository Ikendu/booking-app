import { useState } from 'react'

const BookingWidget = ({ place }) => {
  const [checkIn, setCheckIn] = useState(``)
  const [checkOut, setCheckOut] = useState(``)
  const [maxGuests, setMaxGuests] = useState(1)
  return (
    <div>
      <div className='my-6 grid grid-col-1 md:grid-cols-2'>
        <div className='m-3'>
          <div className=' mb-5 mr-3'>
            <h2 className=' text-2xl font-semibold my-2'>Description</h2>
            <p>{place.description}</p>
          </div>
          Check-in: {place.checkIn} <br />
          Check-out: {place.checkOut} <br />
          Max guest: {place.maxGuests}
        </div>
        <div className='bg-white rounded-2xl p-4 shadow shadow-2xl'>
          <div className='text-2xl text-center font-bold'>Price: ${place.price} / per night</div>
          <div className='mt-4 border rounded-xl'>
            <div className='flex'>
              <div className='p-3'>
                <label>Check-in: </label>
                <input
                  type='date'
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className=' border-2 rounded-md'
                />
              </div>
              <div className=' p-3 border-l '>
                <label>Check-out: </label>
                <input
                  type='date'
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className='border-2 rounded-md'
                />
              </div>
            </div>

            <div className='border-t p-3'>
              <label>Max Number of Guest:</label>
              <input
                type='number'
                value={maxGuests}
                onChange={(e) => setMaxGuests(e.target.value)}
              />
            </div>
          </div>

          <button className=' mt-4 primary '>Book this place</button>
        </div>
      </div>
      <div className='bg-white -mx-4 p-6 border-t'>
        <h2 className=' text-2xl font-semibold my-2'>Extra Info</h2>
        <div className=' text-sm text-gray-700 leading-6'>{place.extraInfo}</div>
      </div>
    </div>
  )
}
export default BookingWidget
