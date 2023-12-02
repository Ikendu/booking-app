import { Link, useParams } from 'react-router-dom'
import { PlusIcon } from '../assets/icons/Logo'
import PlacesFormPage from './components/PlacesFormPage'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Places = () => {
  const { action } = useParams()
  const [allPlaces, setAllPlaces] = useState([])

  const getAllPost = async () => {
    const allpost = await axios.get(`/postlist`)
    setAllPlaces(allpost.data)
  }
  useEffect(() => {
    getAllPost()
  }, [])

  return (
    <div>
      <div className='text-center'>
        All places
        {allPlaces.map((place) => (
          <div key={place._id}>{place?.title}</div>
        ))}
      </div>

      {action !== `new` && (
        <div className='text-center'>
          <Link
            to={`/account/places/new`}
            className='inline-flex gap-1 bg-primary m-8 py-2 px-4 rounded-full text-white'
          >
            <PlusIcon /> Add new place
          </Link>
        </div>
      )}
      {action == `new` && (
        <div>
          <PlacesFormPage />
        </div>
      )}
    </div>
  )
}

export default Places
