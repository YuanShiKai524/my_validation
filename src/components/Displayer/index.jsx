import React from 'react'

const Displayer = ({ data }) => {
  return (
    <ul style={{listStyleType: 'none', padding: '32px 20px 32px 278px', backgroundColor: 'rgb(242, 242, 242, 0.7)'}}>
      {
        Object.entries(data).map(arr => <li key={arr[0]}><span style={{fontWeight: 'bold'}}>{arr[0]}</span>：&nbsp;<span>{arr[1]}</span></li>)
      }
    </ul>
  )
}

export default Displayer
