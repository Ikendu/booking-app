import { Link, useParams } from 'react-router-dom'
import { PlusIcon } from '../assets/icons/Logo'
import { useEffect, useState } from 'react'
import axios from 'axios'
import AccountNav from './components/AccountNav'

const Places = () => {
  const [allPlaces, setAllPlaces] = useState([])

  const getAllPost = async () => {
    const allpost = await axios.get(`/user-places`)
    setAllPlaces(allpost.data)
  }
  useEffect(() => {
    getAllPost()
  }, [])

  return (
    <div>
      <AccountNav />

      <div className='text-center'>
        <Link
          to={`/account/places/new`}
          className='inline-flex gap-1 bg-primary m-8 py-2 px-4 rounded-full text-white'
        >
          <PlusIcon /> Add new place
        </Link>
      </div>

      <div className='mt-4 '>
        {allPlaces.length > 0 &&
          allPlaces.map((place) => (
            <Link
              to={`/account/places/` + place._id}
              key={place._id}
              className='flex gap-4 p-4 rounded-2xl bg-gray-100 mt-5 cursor-pointer'
            >
              <div className='flex w-32 h-32 bg-gray-300 shrink-0 '>
                <img
                  className=' object-cover'
                  src={`http://localhost:4000/uploads/` + place?.photos[0]}
                  alt='Place Image'
                />
              </div>
              <div>
                <p className='text-xl'>{place.title}</p>
                <p className='text-sm mt-2'>{place.description}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default Places
