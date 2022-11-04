import React from 'react'

export const Input = ({keyword, setKeyword, handleClickInput}) => {
  return (
    <div>
      <input type="text" onChange={(e) => setKeyword(e.target.value)} />
      <button onClick={handleClickInput}>検索</button>
    </div>
  )
}
