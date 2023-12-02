import { Link, useParams } from 'react-router-dom'
import { PlusIcon } from '../assets/icons/Logo'

import PlacesFormPage from './components/PlacesFormPage'

const Places = () => {
  const { action } = useParams()

  return (
    <div>
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
