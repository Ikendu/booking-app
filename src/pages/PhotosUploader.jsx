import axios from 'axios'
import { useState } from 'react'
import { TrashIcon } from '../assets/icons/Logo'

const PhotosUploader = ({ addPhotos, setAddPhotos }) => {
  const [photoLinks, setPhotoLinks] = useState(``)

  const photoByLInk = async (e) => {
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
  return (
    <div>
      <div className='flex gap-2'>
        <input
          type='text'
          value={photoLinks}
          onChange={(e) => setPhotoLinks(e.target.value)}
          placeholder='Add using a link ...jpg'
        />
        <button onClick={photoByLInk} className=' bg-gray-400 text-white px-4 rounded-xl'>
          Add&nbsp;Photo
        </button>
      </div>
      <div className='mt-2 gap-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
        {addPhotos.length > 0 &&
          addPhotos
            .map((photo) => (
              <div key={photo} className='relative flex h-32 '>
                <img
                  className='rounded-xl w-full object-cover'
                  src={'http://localhost:4000/uploads/' + photo}
                />
                <div className='absolute right-0 bottom-0 text-white bg-black bg-opacity-50 p-1 rounded-xl cursor-pointer'>
                  <TrashIcon />
                </div>
              </div>
            ))
            .reverse()}

        <label className='border bg-transparent cursor-pointer p-8 text-2xl text-gray-600 rounded-xl text-center'>
          <input type='file' multiple className='hidden' onChange={uploadPhotos} />+
        </label>
      </div>
    </div>
  )
}
export default PhotosUploader
