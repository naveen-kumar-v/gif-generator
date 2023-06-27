import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

export default function Tag() {

  const [tag, setTag] = useState('car')

  const { gif, loader, fetchData } = useGif(tag);

  return (
    <div className='bg-success w-50 rounded d-flex flex-column align-items-center border border-dark mb-3 container-fluid'>
      <h2 className='my-2 text-uppercase h3'><u>random {tag} gif</u></h2>
      {
        loader ? <Spinner /> : <img src={gif} alt="gif" width={300}
          className='img-fluid mx-auto' />
      }
      <input className='w-75 text-center border-0 rounded p-1 m-2' type='text' placeholder='Enter text to search Gif....' value={tag} onChange={e => setTag(e.target.value)} />
      <button className=' btn btn-warning w-75 fw-bold border-0 rounded p-1 m-2' onClick={() => fetchData()}>Generate</button>
    </div>
  )
}
