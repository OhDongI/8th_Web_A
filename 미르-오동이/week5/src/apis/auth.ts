import axios from 'axios'

interface SignInRequest {
  email: string
  password: string
}

interface SignInResponse {
  accessToken: string
  refreshToken: string
}

export const postSignIn = async (data: SignInRequest): Promise<SignInResponse> => {
  const response = await axios.post('/v1/auth/signin', data)
  return response.data
}