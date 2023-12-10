import { useState } from 'react'
import { differenceInCalendarDays } from 'date-fns'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Navigate } from 'react-router-dom'

const BookingWidget = ({ place }) => {
  const [checkIn, setCheckIn] = useState(``)
  const [checkOut, setCheckOut] = useState(``)
  const [maxGuests, setMaxGuests] = useState(1)
  const [name, setName] = useState(``)
  const [phone, setPhone] = useState(``)
  const [redirect, setRedirect] = useState(``)

  let numberOfDays = 0
  if (checkIn && checkOut) {
    numberOfDays = differenceInCalendarDays(new Date(checkOut), new Date(checkIn))
  }
  const amount = numberOfDays * place.price

  const bookThisPlace = async (e) => {
    e.preventDefault()

    const clientOrder = {
      placeId: place._id,
      checkIn,
      checkOut,
      maxGuests,
      name,
      phone,
      price: place.price,
      amount,
    }

    const { data } = await axios.post(`booking`, clientOrder)

    if (data) {
      toast.success(`booking successfull`)
      const userId = data._id
      setRedirect(`/account/booked/${userId}`)
    } else toast.error(`Booking failed`)
  }

  if (redirect) {
    return <Navigate to={redirect} />
  }

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
              <label>Number of Guest:</label>
              <input
                type='number'
                value={maxGuests}
                onChange={(e) => setMaxGuests(e.target.value)}
              />
            </div>

            {numberOfDays > 0 && (
              <div className='border-t p-3'>
                <label>Your Full Name:</label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                <label>Phone Number:</label>
                <input type='tel' value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
            )}
          </div>

          <button onClick={bookThisPlace} className=' mt-4 primary '>
            Book this place {numberOfDays > 0 && <span> N{amount}</span>}
          </button>
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
