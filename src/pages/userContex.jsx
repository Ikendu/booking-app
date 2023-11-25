import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const UserContext = createContext({})

const UserContexProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const getData = async () => {
    const userDoc = await axios.get(`/profile`)
    setUser(userDoc.data)
    console.log(userDoc.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}
export default UserContexProvider
