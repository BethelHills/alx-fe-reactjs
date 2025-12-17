import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import PostsComponent from '../alx-react-app/src/components/PostsComponent'

const queryClient = new QueryClient()

function App() {
  const appStyle = {
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
    display: 'flex',
    flexDirection: 'column',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
    flex: '1',
  };

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div style={appStyle}>
          <Navbar />
          <div style={containerStyle}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <hr style={{ marginTop: 18 }} />
          <PostsComponent />
          <Footer />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
