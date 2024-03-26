import { useState } from 'react'

function Adddata() {
  const [data, setdata] = useState('')

  function savedata(e) {
   
  }

  return (
    <div>
      <form onSubmit={savedata}>
        <input type="text" value={data} onChange={(e) => setdata(e.target.value)} />
        <button type="submit">hell yah</button>
      </form>
    </div>
  )
}

export default Adddata
