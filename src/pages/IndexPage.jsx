import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const IndexPage = () => {
  const [allPlaces, setAllPlaces] = useState([])

  useEffect(() => {
    axios.get(`/places`).then((response) => {
      const { data } = response

      setAllPlaces([...data])
    })
  }, [])

  return (
    <div className='mt-10 gap-x-6 gap-y-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {allPlaces?.map((place) => (
        <Link to={`/account/details/${place._id}`} key={place._id}>
          <div className=' bg-gray-300 rounded-2xl flex '>
            {place.photos?.[0] && (
              <img
                className=' rounded-2xl aspect-square object-cover'
                src={`http://localhost:4000/uploads/` + place.photos[0]}
              />
            )}
          </div>
          <h2 className='font-bold'>{place.address}</h2>
          <h3 className='text-sm text-gray-500 '>{place.title}</h3>
          <div className='mt-1'>
            <span className='font-bold'>N{place.price}</span> per night
          </div>
        </Link>
      ))}
    </div>
  )
}
export default IndexPage
