import React from 'react'

const Displayer = ({ data }) => {
  return (
    <ul>
      {
        Object.entries(data).map(arr => <li key={arr[0]}>{`${arr[0]}: ${arr[1]}`}</li>)
      }
    </ul>
  )
}

export default Displayer
