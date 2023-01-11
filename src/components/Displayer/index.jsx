import React from 'react'

const Displayer = ({ data }) => {
  return (
    <ul style={{listStyleType: 'none', paddingLeft: '278px'}}>
      {
        Object.entries(data).map(arr => <li key={arr[0]}><span style={{fontWeight: 'bold'}}>{arr[0]}</span>：&nbsp;<span>{arr[1]}</span></li>)
      }
    </ul>
  )
}

export default Displayer
