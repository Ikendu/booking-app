import { useState } from 'react'
import Checktime from './Checktime'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import PhotosUploader from '../PhotosUploader'
import Perks from './Perks'

const PlacesFormPage = () => {
  const [title, setTitle] = useState(``)
  const [address, setAddress] = useState(``)
  const [addPhotos, setAddPhotos] = useState([])
  const [description, setDescription] = useState(``)
  const [perks, setPerks] = useState([])
  const [extraInfo, setExtrainfo] = useState(``)
  const [checkIn, setCheckIn] = useState(``)
  const [checkOut, setCheckout] = useState(``)
  const [maxGuests, setMaxGuests] = useState(1)
  const [redirect, setRedirect] = useState(``)

  const inputHeader = (title) => <h2 className=' text-2xl font-medium mt-4'>{title}</h2>
  const inputDescription = (desc) => <p className=' text-gray-500 text-sm'>{desc}</p>

  const preInput = (title, desc) => (
    <>
      {inputHeader(title)}
      {inputDescription(desc)}
    </>
  )

  const handlePlaces = async (e) => {
    e.preventDefault()

    const placeData = {
      title,
      address,
      addPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
    }
    await axios.post(`/places`, placeData)
    setRedirect(`/account/places`)
  }
  if (redirect) return <Navigate to={redirect} />

  return (
    <form onSubmit={handlePlaces}>
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
      <PhotosUploader addPhotos={addPhotos} setAddPhotos={setAddPhotos} />

      {preInput(`Description`, `description of the place`)}
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

      {preInput(`Perks`, `Select all the perks of your place`)}
      <Perks perks={perks} setPerks={setPerks} />

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
      <div>
        <button className='primary my-5 '>Save</button>
      </div>
    </form>
  )
}
export default PlacesFormPage
