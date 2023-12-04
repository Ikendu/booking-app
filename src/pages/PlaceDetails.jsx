import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CloseIcon, MoreImageIcon } from '../assets/icons/Logo'

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
          All Photos goes here
          <button
            onClick={() => setShowAll(false)}
            className='fixed p-2 bg-slate-700 flex gap-1 rounded-xl shadow shadow-black '
          >
            <CloseIcon />
          </button>
          <div className='grid gap-4  bg-black'>
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
    <div className=' mt-4 bg-gray-100 -mx-8 px-8 py-8'>
      <h1 className='text-3xl'>{place.title}</h1>
      <a
        className='underline block font-semibold my-2'
        target='_blank'
        rel='noreferrer'
        href={'https://maps.google.com/?q=' + place.address}
      >
        {place.address}
      </a>
      <div className='relative'>
        <div className='grid gap-2 grid-cols-[2fr_1fr]'>
          {place.photos?.length > 0 && (
            <>
              <div>
                <img
                  className='aspect-square object-cover'
                  src={import.meta.env.VITE_API_URL + `/uploads/` + place.photos[0]}
                />
              </div>
              <div className='grid overflow-hidden'>
                <img
                  className='aspect-square object-cover'
                  src={import.meta.env.VITE_API_URL + `/uploads/` + place.photos[1]}
                />
                <img
                  className=' aspect-square object-cover relative top-2'
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
    </div>
  )
}
export default PlaceDetails
