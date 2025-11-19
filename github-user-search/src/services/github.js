import axios from 'axios'

const API = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 5000,
})

// If a token is provided via Vite env, attach it to requests
const token = import.meta.env.VITE_APP_GITHUB_API_KEY
if (token) {
  API.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export default {
  async getUser(username){
    const resp = await API.get(`/users/${encodeURIComponent(username)}`)
    return resp.data
  }
}
