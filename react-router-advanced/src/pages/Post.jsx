import { useParams } from 'react-router-dom'

export default function Post(){
  const { id } = useParams()
  return (
    <div style={{ padding: 20 }}>
      <h2>Post {id}</h2>
      <p>This demonstrates dynamic routing.</p>
    </div>
  )
}
