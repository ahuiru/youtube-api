import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { Input } from "./components/Input";
import { Movie } from "./components/Movie";

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

function App() {
  const [keyword, setKeyword] = useState("");
  const [youtubeList, setYoutubeList] = useState([]);
  const [isThumbnails, setIsThumbnails] = useState(true);

  const getYoutubeLists = () => {
    const fetchData = () => {
      axios
        .get(
          `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${keyword}&maxResults=3&key=${YOUTUBE_API_KEY}`
        )
        .then((res) => {
          console.log(res);
          setYoutubeList(res.data.items);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  };
  // useEffect(() => {
  //   const getYoutubeLists = () => {
  //     const fetchData = () => {
  //       axios
  //         .get(
  //           `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${keyword}&maxResults=3&key=${YOUTUBE_API_KEY}`
  //         )
  //         .then((res) => {
  //           console.log(res);
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     };
  //     fetchData();
  //   };
  //   getYoutubeLists();
  // }, []);

  const handleClickInput = () => {
    getYoutubeLists();
  };

  // }, [boolean])

// idをってきてそのidとyoutube.idが一緒なら動画回すみたいなのはどうよ

  return (
    <div className="App">
      <Input
        keyword={keyword}
        setKeyword={setKeyword}
        handleClickInput={handleClickInput}
      />
      {/* {youtubeList.map((youtube, i) => (
        <div key={i}>

          <Movie youtube={youtube} isThumbnails={isThumbnails} setIsThumbnails={setIsThumbnails} />
        </div>
      ))} */}
      <Movie youtubeList={youtubeList} isThumbnails={isThumbnails} setIsThumbnails={setIsThumbnails} />
    </div>
  );
}

export default App;
