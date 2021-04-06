import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [data,setData]=useState(null);
  const onClick=async()=>{
    try{
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=93424d526b064f2eba25aa4eb3ecfcd4');
      setData(response.data)
    }catch(e){
      console.log(e)
    }
  }
  return (
  <div>
    <div>
      <button onClick={onClick}>불러오기</button>
    </div>
    {data && <textarea row={7} value={JSON.stringify(data,null,2)}/>}
  </div>
  );
}

export default App;
