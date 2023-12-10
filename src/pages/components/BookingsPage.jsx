import { useEffect, useState } from 'react'
import AccountNav from './AccountNav'
import axios from 'axios'
import { format } from 'date-fns'

const BookingsPage = () => {
  const [bookings, setBookings] = useState([])

  const getMyBookings = async () => {
    const { data } = await axios.get(`/bookings`)
    setBookings(data)
  }

  useEffect(() => {
    getMyBookings()
  }, [])

  return (
    <div>
      <AccountNav />
      <div>
        {bookings?.length > 0 &&
          bookings.map((booked) => (
            <div
              key={booked._id}
              className='flex gap-4 bg-gray-200 mt-10 rounded-2xl overflow-hidden '
            >
              <div className=' w-52'>
                <img
                  src={`${import.meta.env.VITE_API_URL}/uploads/${booked.placeId.photos?.[0]}`}
                />
              </div>
              <div className='mt-3'>
                <p className='text-xl font-semibold'>{booked.placeId.title}</p>
                <p>
                  from{' '}
                  <span className='font-semibold'>
                    {format(new Date(booked.checkIn), `dd-MM-yyyy`)}
                  </span>
                  {` `}to{` `}
                  <span className='font-semibold'>
                    {format(new Date(booked.checkOut), `dd-MM-yyyy`)}
                  </span>
                </p>
                <div>
                  Number of Guest: {booked.maxGuests} <br />
                  Number of Nights: {booked.days}
                  <br />
                  Total amount: {booked.amount}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
export default BookingsPage
