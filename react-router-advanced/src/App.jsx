import { BrowserRouter, Routes, Route, Link, Outlet, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Post from './pages/Post'
import Login from './pages/Login'

// simple fake auth
let isAuthenticated = false
export function requireAuth(component) {
  return isAuthenticated ? component : <Navigate to="/login" replace />
}

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: 12 }}>
        <Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link> | <Link to="/posts/1">Post 1</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={requireAuth(<Dashboard />)}>
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  )
}
