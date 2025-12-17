import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import ProfilePage from './components/ProfilePage'
import UserContext from './UserContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import PostsComponent from './components/PostsComponent'

const queryClient = new QueryClient()

function App() {
  const userData = { name: 'Jane Doe', email: 'jane.doe@example.com' };

  return (
    <QueryClientProvider client={queryClient}>
      <>
        <WelcomeMessage />
        <Header />
        <MainContent />
        <hr style={{margin: '24px 0'}} />
        <PostsComponent />
        <Footer />
        <UserContext.Provider value={userData}>
          <ProfilePage />
        </UserContext.Provider>
      </>
    </QueryClientProvider>
  )
}

export default App
