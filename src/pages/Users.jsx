import axios from 'axios'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

const deleteSyle = 'mx-14 bg-red-800 p-2 text-white rounded-md'

const Users = () => {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const allUsers = await axios.get(`/users`)
    setUsers(allUsers.data)
  }

  useEffect(() => {
    getUsers()
  }, [])

  const deleteUser = async (id) => {
    try {
      await axios.delete(`/delete/${id}`)
      getUsers()
      toast.success(`User Deleted`)
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div>
      {users.map((user) => (
        <ul key={user._id}>
          <li className='flex p-4'>
            <p>{user.name}</p>
            <button className={deleteSyle} onClick={deleteUser}>
              Delete
            </button>
            <button>Update</button>
          </li>
        </ul>
      ))}
    </div>
  )
}
export default Users
