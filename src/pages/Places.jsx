import { Link, useParams } from 'react-router-dom'
import { PlusIcon } from '../assets/icons/Logo'
import { useState } from 'react'
import Perks from './components/Perks'
import Checktime from './components/Checktime'
import axios from 'axios'

const Places = () => {
  const [title, setTitle] = useState(``)
  const [address, setAddress] = useState(``)
  const [addPhotos, setAddPhotos] = useState([])
  const [photoLinks, setPhotoLinks] = useState(``)
  const [description, setDescription] = useState(``)
  const [perks, setPerks] = useState([])
  const [extraInfo, setExtrainfo] = useState(``)
  const [checkIn, setCheckIn] = useState(``)
  const [checkOut, setCheckout] = useState(``)
  const [maxGuests, setMaxGuests] = useState(1)

  const { action } = useParams()

  const inputHeader = (title) => <h2 className=' text-2xl font-medium mt-4'>{title}</h2>
  const inputDescription = (desc) => <p className=' text-gray-500 text-sm'>{desc}</p>

  const preInput = (title, desc) => (
    <>
      {inputHeader(title)}
      {inputDescription(desc)}
    </>
  )

  const photoByLInk = async (e) => {
    e.preventDefault()

    const { data: filename } = await axios.post(`/upload-link`, { link: photoLinks })
    setAddPhotos((prev) => [...prev, filename])
    setPhotoLinks(``)
  }

  const uploadFiles = (e) => {
    const files = e.target.files
    console.log(files)
  }

  return (
    <div>
      {action !== `new` && (
        <div className=' text-center'>
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
          <form>
            {inputHeader(`Title`)}
            {inputDescription(`Title for your place should be catchy as in advertisement`)}
            <input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder='title for example my lovely appartment'
            />

            {inputHeader(`Address`)}
            {inputDescription(`Address to the place`)}
            <input
              type='text'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder='title for example my lovely appartment'
            />

            {preInput(`Photos`, `Click the + sign to upload (More = better)`)}
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
                    <div key={photo}>
                      <img className='rounded-xl' src={'http://localhost:4000/uploads/' + photo} />
                    </div>
                  ))
                  .reverse()}
              <label className='border bg-transparent cursor-pointer p-8 text-2xl text-gray-600 rounded-xl text-center'>
                <input type='file' className='hidden' onChange={uploadFiles} />+
              </label>
            </div>

            {preInput(`Description`, `description of the place`)}
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

            {preInput(`Perks`, `Select all the perks of your place`)}
            <Perks selected={perks} onChange={setPerks} />

            {preInput(`Extra Info`, `House rules, etc`)}
            <textarea value={extraInfo} onChange={(e) => setExtrainfo(e.target.value)} />

            {preInput(
              `Check in-out times`,
              `Add check in and out time, Remember to add some time windows for cleaning the rooms
              between guest.`
            )}
            <Checktime
              checkIn={checkIn}
              setCheckIn={setCheckIn}
              checkOut={checkOut}
              setCheckout={setCheckout}
              maxGuests={maxGuests}
              setMaxGuests={setMaxGuests}
            />
          </form>
        </div>
      )}
    </div>
  )
}
export default Places
