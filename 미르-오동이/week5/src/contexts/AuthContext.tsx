import { createContext, useContext, useState, ReactNode } from 'react'

interface AuthContextType {
  accessToken: string | null
  login: (token: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string | null>(() =>
    localStorage.getItem('accessToken')
  )

  const login = (token: string) => {
    localStorage.setItem('accessToken', token)
    setAccessToken(token)
  }

  const logout = () => {
    localStorage.removeItem('accessToken')
    setAccessToken(null)
  }

  return (
    <AuthContext.Provider value={{ accessToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('AuthContext를 찾을 수 없습니다.')
  return context
}
