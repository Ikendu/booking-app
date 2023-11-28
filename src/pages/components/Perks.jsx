import { EnterIcon, PetIcon, RadioIcon, TVicon, TruckIcon, WifiIcon } from '../../assets/icons/Logo'

const Perks = ({ perks, setPerks }) => {
  const handleCheckbox = (e) => {
    const { name, checked } = e.target
    if (checked) {
      setPerks([...perks, name])
    } else {
      setPerks([...perks.filter((item) => item != name)])
    }
    console.log(perks)
  }

  return (
    <>
      <div className='grid mt-2 gap-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-6'>
        <label className='border p-4 flex gap-2 items-center rounded-2xl cursor-pointer'>
          <input type='checkbox' name='wifi' onChange={handleCheckbox} />
          <WifiIcon />
          <span>Wifi</span>
        </label>
        <label className='border p-4 flex gap-2 items-center rounded-2xl cursor-pointer'>
          <input type='checkbox' name='packing' onChange={handleCheckbox} />
          <TruckIcon />
          <span>Free packing spot</span>
        </label>
        <label className='border p-4 flex gap-2 items-center rounded-2xl cursor-pointer'>
          <input type='checkbox' name='pets' onChange={handleCheckbox} />
          <PetIcon />
          <span>Pets Allowd</span>
        </label>
        <label className='border p-4 flex gap-2 items-center rounded-2xl cursor-pointer'>
          <input type='checkbox' name='tv' onChange={handleCheckbox} />
          <TVicon />
          <span>TV</span>
        </label>
        <label className='border p-4 flex gap-2 items-center rounded-2xl cursor-pointer'>
          <input type='checkbox' name='radio' onChange={handleCheckbox} />
          <RadioIcon />
          <span>Radio</span>
        </label>
        <label className='border p-4 flex gap-2 items-center rounded-2xl cursor-pointer'>
          <input type='checkbox' name='entrance' onChange={handleCheckbox} />
          <EnterIcon />
          <span>Private Entrance</span>
        </label>
      </div>
    </>
  )
}
export default Perks
