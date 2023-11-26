import { Link, useParams } from 'react-router-dom'
import { PlusIcon } from '../assets/icons/Logo'

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
              <button className='border bg-transparent p-8 text-2xl text-gray-600'>+ </button>
            </div>

            <h2 className=' text-2xl font-medium mt-4'>Description</h2>
            <p className=' text-gray-500 text-sm'>description of the place</p>

            <h2 className=' text-2xl font-medium mt-4'>Perks</h2>
            <p className=' text-gray-500 text-sm'>Select all the perks of your place</p>
            <div>
              <label>
                <input type='checkbox' />
                <span>Wifi</span>
              </label>
              <label>
                <input type='checkbox' />
                <span>Free packing spot</span>
              </label>
              <label>
                <input type='checkbox' />
                <span>Pets Allowd</span>
              </label>
              <label>
                <input type='checkbox' />
                <span>TV</span>
              </label>
              <label>
                <input type='checkbox' />
                <span>Private Entrance</span>
              </label>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
export default Places
