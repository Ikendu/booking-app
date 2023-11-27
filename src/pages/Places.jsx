import { Link, useParams } from 'react-router-dom'
import {
  EnterIcon,
  PetIcon,
  PlusIcon,
  RadioIcon,
  TVicon,
  TruckIcon,
  WifiIcon,
} from '../assets/icons/Logo'

const Places = () => {
  const { action } = useParams()

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
            <h2 className=' text-2xl font-medium mt-4'>Title</h2>
            <p className=' text-gray-500 text-sm'>
              Title for your place should be catchy as in advertisement
            </p>
            <input type='text' placeholder='title for example my lovely appartment' />

            <h2 className=' text-2xl font-medium mt-4'>Address</h2>
            <p className=' text-gray-500 text-sm'>Address to the place</p>
            <input type='text' placeholder='title for example my lovely appartment' />

            <h2 className=' text-2xl font-medium mt-4'>Photos</h2>
            <p className=' text-gray-500 text-sm'>Click the + sign to upload (More = better)</p>
            <div className='flex gap-2'>
              <input type='text' placeholder='Add using a link ...jpg' />
              <button className=' bg-gray-400 text-white px-4 rounded-xl'>Add&nbsp;Photo</button>
            </div>

            <div className='mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
              <button className='border bg-transparent p-8 text-2xl text-gray-600 rounded-md'>
                +{' '}
              </button>
            </div>

            <h2 className=' text-2xl font-medium mt-4'>Description</h2>
            <p className=' text-gray-500 text-sm'>description of the place</p>

            <h2 className=' text-2xl font-medium mt-4'>Perks</h2>
            <p className=' text-gray-500 text-sm'>Select all the perks of your place</p>
            <div className='grid mt-2 gap-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-6'>
              <label className='border p-4 flex gap-2 items-center rounded-2xl cursor-pointer'>
                <input type='checkbox' />
                <WifiIcon />
                <span>Wifi</span>
              </label>
              <label className='border p-4 flex gap-2 items-center rounded-2xl cursor-pointer'>
                <input type='checkbox' />
                <TruckIcon />
                <span>Free packing spot</span>
              </label>
              <label className='border p-4 flex gap-2 items-center rounded-2xl cursor-pointer'>
                <input type='checkbox' />
                <PetIcon />
                <span>Pets Allowd</span>
              </label>
              <label className='border p-4 flex gap-2 items-center rounded-2xl cursor-pointer'>
                <input type='checkbox' />
                <TVicon />
                <span>TV</span>
              </label>
              <label className='border p-4 flex gap-2 items-center rounded-2xl cursor-pointer'>
                <input type='checkbox' />
                <RadioIcon />
                <span>Radio</span>
              </label>
              <label className='border p-4 flex gap-2 items-center rounded-2xl cursor-pointer'>
                <input type='checkbox' />
                <EnterIcon />
                <span>Private Entrance</span>
              </label>
            </div>

            <h2 className=' text-2xl font-medium mt-4'>Extra Info</h2>
            <p className=' text-gray-500 text-sm'>House rules, etc</p>
            <textarea />

            <h2 className=' text-2xl font-medium mt-4'>Check in-out times</h2>
            <p className=' text-gray-500 text-sm'>
              Add check in and out time, Remember to add some time windows for cleaning the rooms
              between guest.
            </p>
            <div className='grid sm:grid-cols-3 gap-3 text-center'>
              <div>
                <h3 className='mt-2 mb-1'>Check in time</h3>
                <input type='text' placeholder='12:00' />
              </div>
              <div>
                <h3 className='mt-2 mb-1'>Check out time</h3>
                <input type='text' />
              </div>
              <div>
                <h3 className='mt-2 mb-1'>Max number of guest</h3>
                <input type='text' />
              </div>
            </div>
            <div>
              <button className='primary my-5 '>Save</button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
export default Places
