import { useParams } from 'react-router-dom'

const Booked = () => {
  const { id } = useParams()
  return <div>Booking: {id}</div>
}
export default Booked
