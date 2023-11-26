import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const UserContext = createContext({})

const UserContexProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  const getData = async () => {
    const userDoc = await axios.get(`/profile`)
    setUser(userDoc.data)
    setLoading(true)
  }

  useEffect(() => {
    getData()
  }, [])

  return <UserContext.Provider value={{ user, setUser, loading }}>{children}</UserContext.Provider>
}
export default UserContexProvider
