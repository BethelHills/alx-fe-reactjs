import GitHubSearch from './components/GitHubSearch'

function App(){
  return (
    <div style={{fontFamily: 'Arial, sans-serif', padding: 20}}>
      <header style={{marginBottom:20}}>
        <h1>GitHub User Search</h1>
      </header>
      <main>
        <GitHubSearch />
      </main>
      <footer style={{marginTop:24, color:'#666'}}>
        <small>Built with Vite + React</small>
      </footer>
    </div>
  )
}

export default App
