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
        {bookings.map((books) => (
          <div key={books._id}>{books.name}</div>
        ))}
      </div>
    </div>
  )
}
export default BookingsPage
