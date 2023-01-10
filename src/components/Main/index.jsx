import React from 'react'
import Progress from '../Progress';
import MyForm from '../MyForm';
import './index.css';

const Main = () => {
  return (
    <div className='main'>
      <Progress />
      <MyForm />
    </div>
  )
}

export default Main;