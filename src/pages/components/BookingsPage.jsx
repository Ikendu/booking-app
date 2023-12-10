import { useEffect, useState } from 'react'
import AccountNav from './AccountNav'
import axios from 'axios'

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
              <div>
                <p>{booked.placeId.title}</p>
                <p>
                  from {booked.checkIn} to {booked.checkOut}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
export default BookingsPage
