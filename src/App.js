import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { Movie } from "./components/Movie";

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

function App() {
  // const [boolean, setBoolean] = useState(false);

  // const getYoutubeLists = () => {
  //   const fetchData = () => {
  //     axios
  //       .get(
  //         `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=react&maxResults=3&key=${YOUTUBE_API_KEY}`
  //       )
  //       .then((res) => {
  //         console.log(res);
  //       });
  //   };
  //   fetchData();
  // };
  useEffect(() => {
    const getYoutubeLists = () => {
      const fetchData = () => {
        axios
          .get(
            `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=react&maxResults=3&key=${YOUTUBE_API_KEY}`
          )
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      fetchData();
    };
    getYoutubeLists();
  }, []);

  // const handleClick = () => {
  //   setBoolean(!boolean);
  //   if (boolean === true) {
  //     getYoutubeLists();
  //   }
  // };

  // useEffect(() => {

  // }, [boolean])

  return (
    <div className="App">
      {/* <button onClick={handleClick}>押して動画取得</button>
      {boolean ? <Movie handleClick={handleClick} /> : <p>表示してね！</p>} */}
    </div>
  );
}

export default App;
