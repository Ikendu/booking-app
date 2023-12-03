import axios from 'axios'
import { useState } from 'react'
import { StarIcon, StarWhiteIcon, TrashIcon } from '../assets/icons/Logo'

const PhotosUploader = ({ addPhotos, setAddPhotos }) => {
  const [photoLinks, setPhotoLinks] = useState(``)

  const photoByLink = async (e) => {
    e.preventDefault()

    const { data: filename } = await axios.post(`/upload-link`, { link: photoLinks })
    setAddPhotos((prev) => [...prev, filename])
    setPhotoLinks(``)
  }

  const uploadPhotos = async (e) => {
    const files = e.target.files
    const data = new FormData()
    for (let i in files) data.append(`photos`, files[i]) //for-loop for multiple upload
    const response = await axios.post(`/uploads`, data, {
      headers: { 'Content-type': 'multipart/form-data' },
    })
    //const { data: filenames } = response
    setAddPhotos((prev) => [...prev, ...response.data])
  }

  const removeImage = (e, photo) => {
    e.preventDefault()
    setAddPhotos([...addPhotos.filter((file) => file !== photo)])
  }

  const makeMainImage = (e, photo) => {
    e.preventDefault()
    const otherPhotos = addPhotos.filter((file) => file != photo)
    setAddPhotos([photo, ...otherPhotos])
  }
  return (
    <div>
      <div className='flex gap-2'>
        <input
          type='text'
          value={photoLinks}
          onChange={(e) => setPhotoLinks(e.target.value)}
          placeholder='Add using a link ...jpg'
        />
        <button onClick={photoByLink} className=' bg-gray-400 text-white px-4 rounded-xl'>
          Add&nbsp;Photo
        </button>
      </div>
      <div className='mt-2 gap-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
        {addPhotos.length > 0 &&
          addPhotos.map((photo) => (
            <div key={photo} className='relative flex h-32 '>
              <img
                className='rounded-xl w-full object-cover'
                src={'http://localhost:4000/uploads/' + photo}
              />
              <button
                onClick={(e) => removeImage(e, photo)}
                className='absolute right-0 bottom-0 text-white bg-black bg-opacity-50 p-1 rounded-xl cursor-pointer'
              >
                <TrashIcon />
              </button>

              <button
                onClick={(e) => makeMainImage(e, photo)}
                className='absolute left-0 bottom-0 text-white bg-black bg-opacity-50 p-1 rounded-xl cursor-pointer'
              >
                {photo === addPhotos[0] ? <StarWhiteIcon /> : <StarIcon />}
              </button>
            </div>
          ))}

        <label className='border bg-transparent cursor-pointer p-8 text-2xl text-gray-600 rounded-xl text-center'>
          <input type='file' multiple className='hidden' onChange={uploadPhotos} />+
        </label>
      </div>
    </div>
  )
}
export default PhotosUploader
