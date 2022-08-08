import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useAuthContext } from './useAuthContext'

export const useLogin = ((type) => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
  let navigate = useNavigate();

  const login = async (email, password, role) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch(`http://localhost:9191/api/user/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, role })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))

      // update the auth context
      dispatch({ type: 'LOGIN', payload: json })

      // update loading state
      setIsLoading(false)
      navigate("/useroverview")
    }
  };

  return { login, isLoading, error }
})