export default function SearchInput({value, onChange, onSubmit, placeholder}){
  return (
    <form onSubmit={onSubmit} style={{display:'flex', gap:8, marginBottom:12}}>
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        style={{flex:1, padding:8, fontSize:16}}
      />
      <button type="submit" style={{padding:'8px 12px'}}>Search</button>
    </form>
  )
}
