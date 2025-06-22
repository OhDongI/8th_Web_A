import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthContext'

const MyPage = () => {
  const { logout } = useAuthContext()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div>
      <h1>마이 페이지</h1>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  )
}

export default MyPage