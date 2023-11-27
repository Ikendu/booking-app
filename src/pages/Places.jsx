import { Link, useParams } from 'react-router-dom'
import { PlusIcon } from '../assets/icons/Logo'
import { useState } from 'react'
import Perks from './components/Perks'
import Checktime from './components/Checktime'

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
              <button className=' bg-gray-400 text-white px-4 rounded-xl'>Add&nbsp;Photo</button>
            </div>
            <div className='mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
              <button className='border bg-transparent p-8 text-2xl text-gray-600 rounded-md'>
                +{' '}
              </button>
            </div>

            {preInput(`Description`, `description of the place`)}
            <textarea />

            {preInput(`Perks`, `Select all the perks of your place`)}
            <Perks selected={perks} onChange={setPerks} />

            {preInput(`Extra Info`, `House rules, etc`)}
            <textarea />

            {preInput(
              `Check in-out times`,
              `Add check in and out time, Remember to add some time windows for cleaning the rooms
              between guest.`
            )}
            <Checktime />
          </form>
        </div>
      )}
    </div>
  )
}
export default Places
