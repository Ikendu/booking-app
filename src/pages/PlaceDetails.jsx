import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CloseIcon, MapIcon, MoreImageIcon } from '../assets/icons/Logo'

const PlaceDetails = () => {
  const { id } = useParams()
  const [place, setPlace] = useState([])
  const [showAll, setShowAll] = useState(false)

  const getDetails = async () => {
    const placeDetails = await axios.get(`/place-details/${id}`)
    const { data } = placeDetails
    console.log(data)
    setPlace(data)
  }

  useEffect(() => {
    getDetails()
  }, [])

  if (showAll) {
    return (
      <div className='absolute inset-0 bg-black text-white '>
        <div className=' p-8  bg-black'>
          <h2 className='text-center'>
            Photos of <span className=' font-bold text-xl text-slate-300'> {place.title}</span>
          </h2>
          <button
            onClick={() => setShowAll(false)}
            className='fixed p-2 bg-slate-700 flex gap-1 rounded-xl shadow shadow-black right-8'
          >
            <CloseIcon />
            Close View
          </button>
          <div className='grid gap-6  bg-black'>
            {place?.photos.length > 0 &&
              place.photos.map((photo) => (
                <div key={place._id}>
                  <img
                    className=' w-full'
                    src={import.meta.env.VITE_API_URL + `/uploads/` + photo}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className=' mt-4 bg-gray-100 -mx-8 px-8 py-8 '>
      <h1 className='text-3xl'>{place.title}</h1>
      <a
        className='flex gap-1 my-2 underline block font-semibold my-2'
        target='_blank'
        rel='noreferrer'
        href={'https://maps.google.com/?q=' + place.address}
      >
        <MapIcon />
        {place.address}
      </a>
      <div onClick={() => setShowAll(true)} className='relative cursor-pointer'>
        <div className='grid gap-2 grid-cols-[2fr_1fr] rounded-2xl overflow-hidden'>
          {place.photos?.length > 0 && (
            <>
              <div>
                <img
                  className=' h-full object-cover'
                  src={import.meta.env.VITE_API_URL + `/uploads/` + place.photos[0]}
                />
              </div>
              <div className='grid overflow-hidden'>
                <img
                  className='h-full object-cover'
                  src={import.meta.env.VITE_API_URL + `/uploads/` + place.photos[1]}
                />
                <img
                  className=' h-full object-cover relative top-2'
                  src={import.meta.env.VITE_API_URL + `/uploads/` + place.photos[2]}
                />
              </div>
            </>
          )}
        </div>
        <button
          onClick={() => setShowAll(true)}
          className='absolute bottom-2 right-2 p-2 bg-slate-200 rounded-2xl border flex gap-1 '
        >
          <MoreImageIcon />
          Show more photos
        </button>
      </div>
      <div className='my-6 '>
        <h2 className=' text-2xl font-semibold my-2'>Description</h2>
        <p>{place.description}</p>
      </div>
      <div className='grid grid-cols-2'>
        <div>
          Check-in: {place.checkIn} <br />
          Check-out: {place.checkOut} <br />
          Max guest: {place.maxGuests}
        </div>
        <div className='bg-white rounded-2xl p-4 shadow shadow-2xl'>
          <div className='text-2xl text-center font-bold'>Price: ${place.price} / per night</div>
          <div>
            <div>
              <label>Check-in: </label>
              <input type='date' />
            </div>
            <div>
              <label>Check-out: </label>
              <input type='date' />
            </div>
          </div>

          <button className='primary'>Book this place</button>
        </div>
      </div>
    </div>
  )
}
export default PlaceDetails
