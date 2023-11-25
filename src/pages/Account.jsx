import { useContext } from 'react'
import { UserContext } from './userContex'

const Account = () => {
  const { user } = useContext(UserContext)
  return (
    <div>
      <h1>{user.name} Acount Information</h1>
    </div>
  )
}
export default Account
