import { useState,useEffect } from 'react'

export const useFetch = (apiPath) => {

  const [data,setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=a6f3b49000b97200f217c2c46c899ac9`

  useEffect(()=>{
    async function fetchMovies(){
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    }
    fetchMovies();
  },[url]);

  return {data}
}
