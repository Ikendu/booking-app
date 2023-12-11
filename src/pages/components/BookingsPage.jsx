import { useEffect, useState } from 'react'
import AccountNav from './AccountNav'
import axios from 'axios'
import { format } from 'date-fns'
import { CalenderIcon, CardIcon, ThumbUpIcon, UsersIcon } from '../../assets/icons/Logo'
import { Link } from 'react-router-dom'

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
            <Link
              to={`/account/booked/${booked._id}`}
              key={booked._id}
              className='flex gap-4 bg-gray-200 mt-10 rounded-2xl overflow-hidden '
            >
              <div className=' w-52'>
                <img
                  src={`${import.meta.env.VITE_API_URL}/uploads/${booked.placeId.photos?.[0]}`}
                />
              </div>
              <div className='mt-3'>
                <div className='text-xl font-semibold py-2 grow pr-3 flex gap-2'>
                  <ThumbUpIcon />
                  {booked.placeId.title}
                </div>
                <div className='flex gap-3 text-gray-500'>
                  <CalenderIcon />
                  {booked.days} nights from{' '}
                  <span className='font-semibold'>
                    {format(new Date(booked.checkIn), `dd-MM-yyyy`)}
                  </span>
                  {` `} &rarr; {` `}
                  <span className='font-semibold'>
                    {format(new Date(booked.checkOut), `dd-MM-yyyy`)}
                  </span>
                </div>
                <div className='flex gap-3'>
                  <UsersIcon />
                  Number of Guest: {booked.maxGuests} | <CardIcon /> Total amount:{' '}
                  <span className='font-bold'>N{booked.amount}</span>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}
export default BookingsPage
