import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthContext'
import { postSignIn } from '../apis/auth'
import { useState } from 'react'

const LoginPage = () => {
  const { login } = useAuthContext()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    try {
      const { accessToken } = await postSignIn({ email, password })
      login(accessToken)
      navigate('/my')
    } catch (error) {
      alert('로그인 실패: 이메일/비밀번호를 확인하세요')
    }
  }

  return (
    <div>
      <h1>로그인 페이지</h1>
      <input placeholder="이메일" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="비밀번호" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>로그인</button>
    </div>
  )
}

export default LoginPage
