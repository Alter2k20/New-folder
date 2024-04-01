import { useState } from 'react'
const TransactionForm = () => {
  // const [transaction, setTransaction] = useState({})
  const [transactionID, setTransactionID] = useState(1)
  const [field1, setField1] = useState('')
  const [field2, setField2] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault()
    const transaction = {
      transactionID: transactionID,
      field1: field1,
      field2: field2
    }
    console.log(JSON.stringify(transaction, null, 2))
    // Here you can add the logic to update your JSON data
    setTransactionID(transactionID + 1) // Increase transactionID
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Field 1:
        <input type="text" value={field1} onChange={(e) => setField1(e.target.value)} required />
      </label>
      <label>
        Field 2:
        <input type="text" value={field2} onChange={(e) => setField2(e.target.value)} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}
export default TransactionForm
