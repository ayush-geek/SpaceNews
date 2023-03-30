
import './App.css';
import { useEffect ,useState } from 'react';

function App() {

    const [newsList ,setNewsList]=useState([]);
  useEffect(()=>{
    fetch("https://api.spaceflightnewsapi.net/v4/articles/").then((res)=>res.json())
    .then((data)=>
    {
      setNewsList(data.results);
    }
    )
  },[])

  return (
    <div className="App">
      <div className="title">
        <h1>Space News</h1>
      </div>

      <div className="newsContainer">
        {
          newsList.map((value,key)=>{
            return <div key={key} className="article"
            onClick={()=>{
              window.location.href=value.url
            }}>
              <h3>{value.title}</h3>
              <img src={value.image_url}></img>
              <p>{value.summary}</p>
              <h4>{value.published_at}</h4>
              </div>
          })

        }
      </div>
    </div>
  );
}

export default App;
