import { useAuthContext } from './useAuthContext'
import { useJobsContext } from './useJobsContext'

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const { dispatch: dispatchJobs } = useJobsContext()

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user')

    // dispatch logout action
    dispatch({ type: 'LOGOUT' })
    dispatchJobs({ type: 'SET_JOBS', payload: null })
  }

  return { logout }
}