import { useState } from 'react'

function Adddata() {
  const [data, setdata] = useState('')
  // const [date, setdate] = useState(Date())

  function savedata() {}

  return (
    <div>
      <form onSubmit={savedata()}>
        <input type="text" id="dat" value={data} onChange={(e) => setdata(e.target.value)} />
        <button type="submit">hell yah</button>
      </form>
    </div>
  )
}

export default Adddata
