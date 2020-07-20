import React from 'react';
import '../../assets/css/login.css';

export default function titulo(props) {
  const datos = props;
  return (
    <>
    <div className='titulo-principal'>
        {datos.text} <span className ='span-color'>Edgar Calderon</span>
    </div>
    </>
  );

}
