import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ControlledForm from './ControlledForm'
import FormikForm from './FormikForm'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import PostsComponent from './components/PostsComponent'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="container">
          <nav className="nav">
            <Link to="/">Controlled Form</Link>
            <Link to="/formik">Formik Form</Link>
          </nav>
          <Routes>
            <Route path="/" element={<ControlledForm />} />
            <Route path="/formik" element={<FormikForm />} />
          </Routes>
          <hr style={{ marginTop: 18 }} />
          <PostsComponent />
        </div>
      </Router>
    </QueryClientProvider>
  )
}
