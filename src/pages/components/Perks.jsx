import { EnterIcon, PetIcon, RadioIcon, TVicon, TruckIcon, WifiIcon } from '../../assets/icons/Logo'

const Perks = ({ selected, onChange }) => {
  return (
    <>
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
    </>
  )
}
export default Perks
