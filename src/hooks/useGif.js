import axios from 'axios';
import { useState, useEffect } from 'react'


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const url = `https://g.tenor.com/v1/search?q&key=${API_KEY}&random=true`

export default function useGif({ tag }) {

  const [gif, setGif] = useState('');
  const [loader, setLoader] = useState(false);

  async function fetchData() {
    setLoader(true)
    const op = await axios.get(tag ? `${url}&tag=${tag}` : url)
    const imageSrc = op.data.data.images.downsized.url;
    setGif(imageSrc);
    setLoader(false)
  }

  useEffect(() => {
    fetchData();
  }, [])

  return ({ gif, loader, fetchData })
}
