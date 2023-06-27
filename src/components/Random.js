import React from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

export default function Random() {

  const { gif, loader, fetchData } = useGif('');
  console.log(gif)
  return (
    <div className='bg-primary w-50 rounded d-flex flex-column align-items-center border border-dark container-fluid'>
      <h2 className='my-3'><u>Random Gif</u></h2>
      {
        loader ? <Spinner /> : <img src={gif} alt="gif" width={300} className='img-fluid ' />
      }
      <button className=' btn btn-warning w-75 fw-bold border-0 rounded p-1 m-3' onClick={() => fetchData()}>Generate</button>
    </div>
  )
}
